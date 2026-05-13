import { useEffect, useState } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Detect if hovering over clickable elements
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') !== null ||
        target.getAttribute('role') === 'button'
      );
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Extremely smooth spring physics for the trailing ring
  const smoothX = useSpring(mousePosition.x, { stiffness: 150, damping: 25, mass: 0.5 });
  const smoothY = useSpring(mousePosition.y, { stiffness: 150, damping: 25, mass: 0.5 });

  return (
    <>
      {/* Tiny solid precision dot (instant tracking) */}
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-[#C5A059] rounded-full pointer-events-none z-[10000]"
        animate={{ 
          x: mousePosition.x - 4, 
          y: mousePosition.y - 4,
          scale: isClicked ? 0.8 : isHovering ? 1.5 : 1
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      />
      
      {/* Trailing targeting ring (spring physics) */}
      <motion.div 
        className="fixed top-0 left-0 w-12 h-12 border-[0.5px] border-[#C5A059] rounded-full pointer-events-none z-[9999]"
        style={{ 
          x: smoothX, 
          y: smoothY, 
          translateX: '-50%', 
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.9 : isHovering ? 1.3 : 1,
          opacity: isHovering ? 0.8 : 0.4,
          borderWidth: isHovering ? '1px' : '0.5px'
        }}
      >
        {/* Crosshair accents */}
        <div className="absolute top-0 left-1/2 w-[1px] h-1.5 bg-[#C5A059] -translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-[1px] h-1.5 bg-[#C5A059] -translate-x-1/2"></div>
        <div className="absolute left-0 top-1/2 w-1.5 h-[1px] bg-[#C5A059] -translate-y-1/2"></div>
        <div className="absolute right-0 top-1/2 w-1.5 h-[1px] bg-[#C5A059] -translate-y-1/2"></div>

        {/* Click Pulse Effect */}
        <AnimatePresence>
          {isClicked && (
            <motion.div
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 border border-[#C5A059] rounded-full"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
