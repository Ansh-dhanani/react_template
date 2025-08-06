import React, { useState, useEffect, useRef, useCallback } from 'react';

const CustomCursor = () => {
  const [currentType, setCurrentType] = useState('normal');
  const [opacity, setOpacity] = useState(0);
  const [clickAnimate, setClickAnimate] = useState(false);
  const [linkClickAnimate, setLinkClickAnimate] = useState(false);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const cursorRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const timeoutRef = useRef(null);
  const isAnimatingRef = useRef(false);

  // Check if device is mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      try {
        const isTouchDevice = (
          'ontouchstart' in window || 
          (navigator?.maxTouchPoints && navigator.maxTouchPoints > 0) || 
          (navigator?.msMaxTouchPoints && navigator.msMaxTouchPoints > 0) ||
          (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)
        );
        setIsMobile(isTouchDevice);
      } catch (error) {
        console.warn('Error detecting mobile device:', error);
        setIsMobile(true);
      }
    };

    checkMobile();
    
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkMobile, 100);
    };

    if (window.addEventListener) {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
      };
    }
  }, []);

  const cursors = {
    normal: "https://wondermake.xyz/assets/pointer-84176aa3.svg",
    clicked: "https://wondermake.xyz/assets/active-1352ec3e.svg",
    onlink: "https://wondermake.xyz/assets/default-b2d72215.svg"
  };

  // Smooth cursor animation - separate from other effects
  useEffect(() => {
    if (isMobile || isAnimatingRef.current) return;
    
    isAnimatingRef.current = true;
    
    const animateCursor = () => {
      try {
        // Smooth interpolation without zoom compensation in transform
        posRef.current.x += (mouseRef.current.x - posRef.current.x) * 0.5;
        posRef.current.y += (mouseRef.current.y - posRef.current.y) * 0.5;
        
        if (cursorRef.current && isFinite(posRef.current.x) && isFinite(posRef.current.y)) {
          cursorRef.current.style.transform = 
            `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
        }
        
        if (isAnimatingRef.current) {
          animationFrameRef.current = requestAnimationFrame(animateCursor);
        }
      } catch (error) {
        console.warn('Animation error:', error);
        if (isAnimatingRef.current) {
          animationFrameRef.current = requestAnimationFrame(animateCursor);
        }
      }
    };
    
    animationFrameRef.current = requestAnimationFrame(animateCursor);
    
    return () => {
      isAnimatingRef.current = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isMobile]);

  // Check if hovering over interactive elements
  const isHoveringInteractive = (x, y) => {
    try {
      if (!document.elementFromPoint || !isFinite(x) || !isFinite(y)) {
        return false;
      }
      
      const element = document.elementFromPoint(x, y);
      if (!element) return false;
      
      const hoverTags = ["A", "BUTTON", "INPUT", "TEXTAREA", "LABEL", "SELECT"];
      const tagName = element.tagName;
      
      const hasClickHandler = element.onclick !== null || 
                            element.getAttribute('onclick') !== null ||
                            element.style.cursor === 'pointer' ||
                            (element.hasAttribute('role') && element.getAttribute('role') === 'button');
      
      return (tagName && hoverTags.includes(tagName)) || hasClickHandler;
    } catch (error) {
      return false;
    }
  };

  // Mouse move handler
  const handleMouseMove = (e) => {
    try {
      if (!e || typeof e.clientX !== 'number' || typeof e.clientY !== 'number') {
        return;
      }
      
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      if (!isContextMenuOpen) {
        setOpacity(1);

        if (isHoveringInteractive(e.clientX, e.clientY)) {
          if (currentType !== 'clicked') {
            setCurrentType('onlink');
          }
        } else if (currentType !== 'clicked') {
          setCurrentType('normal');
        }
      }
    } catch (error) {
      console.warn('Mouse move error:', error);
    }
  };

  // Mouse down handler
  const handleMouseDown = (e) => {
    try {
      if (!e || typeof e.button !== 'number') return;
      
      if (e.button === 0) { // Left click
        if (currentType === 'onlink') {
          setLinkClickAnimate(true);
        } else {
          setCurrentType('clicked');
          setClickAnimate(true);
        }
      } else if (e.button === 2) { // Right click
        setIsContextMenuOpen(true);
        setOpacity(0);
      }
    } catch (error) {
      console.warn('Mouse down error:', error);
    }
  };

  // Mouse up handler
  const handleMouseUp = (e) => {
    try {
      if (!e || typeof e.button !== 'number') return;
      
      if (e.button === 0) { // Left click release
        setClickAnimate(false);
        setLinkClickAnimate(false);
        
        // Small delay to ensure we get the correct hover state
        setTimeout(() => {
          if (isHoveringInteractive(mouseRef.current.x, mouseRef.current.y)) {
            setCurrentType('onlink');
          } else {
            setCurrentType('normal');
          }
        }, 10);
      }
    } catch (error) {
      console.warn('Mouse up error:', error);
    }
  };

  // Context menu handler
  const handleContextMenu = (e) => {
    try {
      setIsContextMenuOpen(true);
      setOpacity(0);
    } catch (error) {
      console.warn('Context menu error:', error);
    }
  };

  // Click handler to detect when context menu closes
  const handleClick = (e) => {
    try {
      if (isContextMenuOpen) {
        setIsContextMenuOpen(false);
        setOpacity(1);
      }
    } catch (error) {
      console.warn('Click handler error:', error);
    }
  };

  // Key handler to detect Escape key
  const handleKeyDown = (e) => {
    try {
      if (e && e.key === 'Escape' && isContextMenuOpen) {
        setIsContextMenuOpen(false);
        setOpacity(1);
      }
    } catch (error) {
      console.warn('Key down error:', error);
    }
  };

  // Mouse leave handler
  const handleMouseLeave = () => {
    try {
      if (!isContextMenuOpen) {
        setOpacity(0);
      }
    } catch (error) {
      console.warn('Mouse leave error:', error);
    }
  };

  // Mouse enter handler
  const handleMouseEnter = () => {
    try {
      if (!isContextMenuOpen) {
        setOpacity(1);
      }
    } catch (error) {
      console.warn('Mouse enter error:', error);
    }
  };

  // Window focus handler
  const handleWindowFocus = () => {
    try {
      if (isContextMenuOpen) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        
        timeoutRef.current = setTimeout(() => {
          setIsContextMenuOpen(false);
          setOpacity(1);
          timeoutRef.current = null;
        }, 100);
      }
    } catch (error) {
      console.warn('Window focus error:', error);
    }
  };

  // Event listeners effect - simplified dependencies
  useEffect(() => {
    if (isMobile) return;

    if (!document.addEventListener || !window.addEventListener) {
      console.warn('Event listeners not supported');
      return;
    }

    try {
      document.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('contextmenu', handleContextMenu);
      document.addEventListener('click', handleClick);
      document.addEventListener('keydown', handleKeyDown);
      window.addEventListener('focus', handleWindowFocus);
    } catch (error) {
      console.error('Error adding event listeners:', error);
    }

    return () => {
      try {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('contextmenu', handleContextMenu);
        document.removeEventListener('click', handleClick);
        document.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('focus', handleWindowFocus);
      } catch (error) {
        console.warn('Error removing event listeners:', error);
      }
    };
  }, [isMobile, currentType, isContextMenuOpen]); // Minimal dependencies

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isAnimatingRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Don't render cursor on mobile
  if (isMobile) {
    return null;
  }

  return (
    <>
      <style jsx="true" global="true">{`
        @media (pointer: fine) {
          *, *::before, *::after {
            cursor: none !important;
          }
          body, html {
            cursor: none !important;
          }
          input, textarea, [contenteditable] {
            cursor: none !important;
          }
          a, button, [role="button"], select, option {
            cursor: none !important;  
          }
        }
        
        .custom-cursor-container {
          width: 56px !important;
          height: 56px !important;
          min-width: 56px !important;
          min-height: 56px !important;
          max-width: 56px !important;
          max-height: 56px !important;
          transform-origin: center center !important;
        }
        
        .custom-cursor-img {
          width: 56px !important;
          height: 56px !important;
          min-width: 56px !important;
          min-height: 56px !important;
          max-width: 56px !important;
          max-height: 56px !important;
          image-rendering: -webkit-optimize-contrast !important;
          image-rendering: crisp-edges !important;
        }
        
        @media screen and (min-resolution: 192dpi) {
          .custom-cursor-container,
          .custom-cursor-img {
            width: 56px !important;
            height: 56px !important;
          }
        }
      `}</style>
      
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none transition-opacity duration-300"
        style={{
          opacity: opacity,
          willChange: 'transform'
        }}
      >
        <div
          className="absolute custom-cursor-container transition-transform duration-150 ease-out"
          style={{
            transform: `translate(-20%, -10%) scale(${clickAnimate ? 0.8 : linkClickAnimate ? 0.7 : currentType === 'onlink' ? 0.85 : 1}) rotate(${linkClickAnimate ? -10 : currentType === 'onlink' ? -5 : 0}deg)`,
            transformOrigin: 'center center'
          }}
        >
          <img
            src={cursors[currentType]}
            alt="cursor"
            className="custom-cursor-img object-contain pointer-events-none select-none"
            draggable={false}
            onError={(e) => {
              console.warn(`Failed to load cursor image: ${cursors[currentType]}`);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CustomCursor;