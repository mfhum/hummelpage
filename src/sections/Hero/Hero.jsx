import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const InteractiveChar = ({ char, delay, mouseX, mouseY }) => {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 400, damping: 30 });
  const y = useSpring(0, { stiffness: 400, damping: 30 });

  useEffect(() => {
    return mouseX.on("change", (latestX) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mY = mouseY.get();

      const distX = latestX - centerX;
      const distY = mY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < 100) {
        const power = (1 - distance / 100) * 15;
        x.set(distX * (power / distance));
        y.set(distY * (power / distance));
      } else {
        x.set(0);
        y.set(0);
      }
    });
  }, [mouseX, mouseY, x, y]);

  return (
    <motion.span
      ref={ref}
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      style={{
        display: 'inline-block',
        whiteSpace: char === ' ' ? 'pre' : 'normal',
        x, y
      }}
    >
      {char}
    </motion.span>
  );
};

const SplitText = ({ children, delay = 0, mouseX, mouseY }) => {
  const characters = children.split('');
  return (
    <span style={{ display: 'inline-flex', overflow: 'hidden' }}>
      {characters.map((char, i) => (
        <InteractiveChar
          key={i}
          char={char}
          delay={delay + (i * 0.03)}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}
    </span>
  );
};

const Dust = () => {
  const particles = Array.from({ length: 20 });
  return (
    <div className="dust-container">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="dust-particle"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
          }}
        />
      ))}
    </div>
  );
};

const BackgroundBlob = ({ color, initialX, initialY, mouseX, mouseY, range = 50 }) => {
  const x = useSpring(useMotionValue(initialX), { stiffness: 50, damping: 20 });
  const y = useSpring(useMotionValue(initialY), { stiffness: 50, damping: 20 });

  useEffect(() => {
    const unsubscribeX = mouseX.on("change", (latest) => {
      const moveX = (latest - window.innerWidth / 2) / range;
      x.set(initialX + moveX);
    });
    const unsubscribeY = mouseY.on("change", (latest) => {
      const moveY = (latest - window.innerHeight / 2) / range;
      y.set(initialY + moveY);
    });
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY, initialX, initialY, range, x, y]);

  return (
    <motion.div
      className="parallaxCircle"
      style={{
        x,
        y,
        backgroundColor: color,
        position: 'absolute',
      }}
    />
  );
};

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const pathX = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });
  const pathY = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });


  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      mouseX.set(x);
      mouseY.set(y);

      const moveX = (x - window.innerWidth / 2) / 25;
      const moveY = (y - window.innerHeight / 2) / 25;
      pathX.set(moveX);
      pathY.set(moveY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, pathX, pathY]);

  return (
    <section id='hero' className='Hero'>
      <div className="grain-overlay" />
      <Dust />

      {/* Interactive mouse glow */}
      <motion.div
        className="mouse-glow"
        style={{
          left: mouseX,
          top: mouseY,
        }}
      />

      <div className="heroBackground">
        <BackgroundBlob color="rgba(26, 87, 186, 0.2)" initialX={-150} initialY={-150} mouseX={mouseX} mouseY={mouseY} range={20} />
        <BackgroundBlob color="rgba(26, 87, 186, 0.15)" initialX={300} initialY={50} mouseX={mouseX} mouseY={mouseY} range={40} />
        <BackgroundBlob color="rgba(255, 255, 255, 0.3)" initialX={0} initialY={200} mouseX={mouseX} mouseY={mouseY} range={60} />
      </div>

      <motion.div
        className='content'
      >
        <div className='svg name'>
          <motion.svg
            className='svgHero'
            width='750'
            height='217'
            viewBox='0 0 609 217'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{ x: pathX, y: pathY }}
          >
            <motion.path
              d='M224.284 23.5458C395.589 -62.4085 757.913 122.074 540.027 188.114C267.669 270.664 -189.52 148.591 87.4209 28.0192C207.83 -24.4031 397.197 28.3511 453.625 53.5164'
              stroke='black'
              strokeWidth='2'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </motion.svg>

          <h1 className='nameText heroTitle'>
            <SplitText delay={0.4} mouseX={mouseX} mouseY={mouseY}>Hummel</SplitText>
          </h1>

          <h1 className='heroTitle'>
            <SplitText delay={0.2} mouseX={mouseX} mouseY={mouseY}>Marius</SplitText>
          </h1>
        </div>

        <div className='description'>
          <motion.div
            className='descText'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          >
            <h2>Web Developer & </h2>
            <motion.h2
              className='descSometimes'
              animate={{
                color: ["#888", "#1a57ba", "#888"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              &nbsp;sometimes
            </motion.h2>
            <h2 className='descDesigner'>&nbsp;Designer</h2>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <div className="scroll-line">
          <motion.div
            className="scroll-fill"
            animate={{
              height: ["0%", "100%", "0%"],
              top: ["0%", "0%", "100%"]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: [0.76, 0, 0.24, 1]
            }}
          />
        </div>
        <motion.span
          className="scroll-text"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Explore
        </motion.span>
      </motion.div>
      <div className='legacy-circle' />
    </section>
  );
}

export default Hero;
