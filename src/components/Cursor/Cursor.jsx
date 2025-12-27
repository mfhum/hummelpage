import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../../index.css';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });

      const target = e.target;
      const isHoverable = target.closest('a, button, .linkItem, .skillItem');
      setCursorVariant(isHoverable ? 'text' : 'default');
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) return null;

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      translateX: "-50%",
      translateY: "-50%",
      height: 32,
      width: 32,
      backgroundColor: "rgba(255, 255, 255, 1)",
      mixBlendMode: "difference",
    },
    text: {
      x: mousePosition.x,
      y: mousePosition.y,
      translateX: "-50%",
      translateY: "-50%",
      height: 150,
      width: 150,
      backgroundColor: "rgba(255, 255, 255, 1)",
      mixBlendMode: "difference",
    }
  };

  return (
    <motion.div
      className='cursor'
      variants={variants}
      animate={cursorVariant}
      transition={{
        x: { type: "spring", stiffness: 2500, damping: 40, mass: 0.1 },
        y: { type: "spring", stiffness: 2500, damping: 40, mass: 0.1 },
        default: { type: "spring", stiffness: 750, damping: 20, mass: 1 },
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: cursorVariant === 'text' ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
          pointerEvents: 'none'
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 200 200" style={{ overflow: 'visible' }}>
          <defs>
            {/* M 5,140: Starting further down (y=140)
              A 100,100: Larger radius to keep the text outside the 150px circle 
            */}
            <path id="bottomCurve" d="M 5,140 A 100,100 0 0 0 195,140" />
          </defs>
          <text style={{ fill: 'white' }}>
            <textPath
              xlinkHref="#bottomCurve"
              startOffset="50%"
              textAnchor="middle"
              side="right"
              style={{
                fontSize: '22px',
                fontWeight: 'bold',
                fontFamily: 'Outfit, sans-serif',
                letterSpacing: '12px'
              }}
            >
              CLICK
            </textPath>
          </text>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default Cursor;