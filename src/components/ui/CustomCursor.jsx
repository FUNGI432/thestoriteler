import { useEffect, useState } from 'react';
import CircularText from './CircularText';

/**
 * CustomCursor Component
 * Follows the mouse with a circular text effect.
 */
const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Global zoom is 0.9, so we divide by 0.9 to align visual cursor with physical hitboxes
      setMousePos({ x: e.clientX / 0.9, y: e.clientY / 0.9 });
      
      // Check if hovering over a clickable element
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
      style={{
        left: mousePos.x,
        top: mousePos.y,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s ease-out'
      }}
    >
      <CircularText
        text="thestoriteler "
        spinDuration={isPointer ? 5 : 15}
        onHover={isPointer ? "speedUp" : "slowDown"}
        className="scale-[0.6] md:scale-[0.8]"
      />
      
      {/* Center dot */}
      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full transition-transform duration-300 ${isPointer ? 'scale-150' : 'scale-100'}`} />
    </div>
  );
};

export default CustomCursor;
