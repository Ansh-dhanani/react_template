import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [currentType, setCurrentType] = useState('normal');
  const [opacity, setOpacity] = useState(0);
  const [clickAnimate, setClickAnimate] = useState(false);
  const cursorRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  const cursors = {
    normal: "https://wondermake.xyz/assets/pointer-84176aa3.svg",
    clicked: "https://wondermake.xyz/assets/active-1352ec3e.svg",
    onlink: "https://wondermake.xyz/assets/default-b2d72215.svg"
  };

  // Smooth cursor animation
  useEffect(() => {
    const animateCursor = () => {
      posRef.current.x += (mouseRef.current.x - posRef.current.x) * 0.5;
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * 0.5;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }
      
      requestAnimationFrame(animateCursor);
    };
    
    animateCursor();
  }, []);

  // Check if hovering over interactive elements
  const isHoveringInteractive = (x, y) => {
    const element = document.elementFromPoint(x, y);
    const hoverTags = ["A", "BUTTON", "INPUT", "TEXTAREA", "LABEL"];
    return element && hoverTags.includes(element.tagName);
  };

  // Mouse move handler
  const handleMouseMove = (e) => {
    mouseRef.current.x = e.clientX;
    mouseRef.current.y = e.clientY;
    setOpacity(1);

    if (isHoveringInteractive(e.clientX, e.clientY)) {
      if (currentType !== 'clicked') {
        setCurrentType('onlink');
      }
    } else if (currentType !== 'clicked') {
      setCurrentType('normal');
    }
  };

  // Mouse down handler
  const handleMouseDown = () => {
    setCurrentType('clicked');
    setClickAnimate(true);
  };

  // Mouse up handler
  const handleMouseUp = () => {
    setClickAnimate(false);
    if (isHoveringInteractive(mouseRef.current.x, mouseRef.current.y)) {
      setCurrentType('onlink');
    } else {
      setCurrentType('normal');
    }
  };

  // Mouse leave handler
  const handleMouseLeave = () => {
    setOpacity(0);
  };

  // Mouse enter handler
  const handleMouseEnter = () => {
    setOpacity(1);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [currentType]);

  return (
    <div className="min-h-screen bg-gray-100" style={{ cursor: 'none' }}>
      <style jsx>{`
        * {
          cursor: none !important;
        }
        body, html {
          cursor: none;
        }
        input, textarea {
          cursor: text !important;
        }
      `}</style>
      
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[10000] pointer-events-none transition-opacity duration-300"
        style={{
          opacity: opacity,
          willChange: 'transform'
        }}
      >
        <div
          className="absolute w-14 h-14 transition-transform duration-150"
          style={{
            transform: `translate(-20%, -10%) scale(${clickAnimate ? 0.8 : 1})`
          }}
        >
          <img
            src={cursors[currentType]}
            alt="cursor"
            className="w-full h-full object-contain pointer-events-none select-none"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;