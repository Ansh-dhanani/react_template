import React, { useState, useEffect, createContext, useContext } from 'react';

// Context for sharing hover state and mouse position
const HoverFollowContext = createContext();

// Parent component that provides the hover context
export function HoverFollowProvider({ children, className = "" }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY
      });
      
      if (!isInitialized) {
        setIsInitialized(true);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isInitialized]);

  const contextValue = {
    mousePos,
    isHovering,
    isInitialized,
    setIsHovering
  };

  return (
    <HoverFollowContext.Provider value={contextValue}>
      <div className={`${className} ${isHovering ? 'cursor-none' : ''}`}>
        {children}
      </div>
    </HoverFollowContext.Provider>
  );
}

// Hook to use the hover context
function useHoverFollow() {
  const context = useContext(HoverFollowContext);
  if (!context) {
    throw new Error('useHoverFollow must be used within a HoverFollowProvider');
  }
  return context;
}

// Floating button component
export function HoverFollowButton({ 
  children, 
  className = "",
  offset = { x: -100, y: -24 },
  transition = "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
}) {
  const { mousePos, isHovering, isInitialized } = useHoverFollow();

  return (
    <div
      className={`fixed z-50 bg-white bg-opacity-30 text-black font-medium border-none rounded-xl px-6 py-3 text-sm backdrop-blur-md shadow-lg transition-all duration-300 ease-out flex items-center gap-2 pointer-events-none ${
        isHovering && isInitialized ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        transform: `translate3d(${mousePos.x + offset.x}px, ${mousePos.y + offset.y}px, 0px)`,
        transition: isHovering && isInitialized ? transition : 'opacity 0.3s ease'
      }}
    >
      {children}
    </div>
  );
}

// Hoverable trigger component
export function HoverFollowTrigger({ 
  children, 
  className = "",
  as: Component = "div"
}) {
  const { isHovering, setIsHovering } = useHoverFollow();

  return (
    <Component
      className={`${isHovering ? 'cursor-none' : 'cursor-pointer'} ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
    </Component>
  );
}

// // Example usage component
// export default function HoverFollowExample() {
//   return (
//     <HoverFollowProvider className="relative h-screen w-full m-0 p-0 font-sans">
//       {/* Floating button */}
//       <HoverFollowButton>
//         Hello my name is Ansh
//       </HoverFollowButton>

//       {/* Trigger element */}
//       <HoverFollowTrigger 
//         as="p"
//         className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-500 bg-red-500 p-24"
//       >
//         Created with heart
//       </HoverFollowTrigger>

//       {/* You can add more triggers */}
//       <HoverFollowTrigger 
//         className="absolute top-10 left-10 bg-blue-500 text-white p-4 rounded"
//       >
//         Another hover area
//       </HoverFollowTrigger>
//     </HoverFollowProvider>
//   );
// }