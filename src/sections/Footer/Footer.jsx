'use client'; // Required for Next.js App Router

import React, { useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

// 1. Updated Component: Accepts 'className' to apply styles directly to the <a> tag
const MagneticLink = ({ children, href, className, mouseX, mouseY }) => {
  const ref = useRef(null);

  // Spring physics
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    // Safety check: ensure mouseX is defined before subscribing
    if (!mouseX) return;

    const handleMouseChange = (latestX) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mY = mouseY.get();

      const distX = latestX - centerX;
      const distY = mY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      const maxRange = 200;
      if (distance < maxRange) {
        const force = (1 - distance / maxRange) * 10;
        x.set(distX * (force / distance));
        y.set(distY * (force / distance));
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const unsubscribe = mouseX.on("change", handleMouseChange);
    return () => unsubscribe();
  }, [mouseX, mouseY, x, y]);

  const isMailto = href && href.startsWith('mailto:');
  const target = isMailto ? "_self" : "_blank";

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`footerLink ${className || ''}`}
      style={{ x, y, display: 'inline-block', color: 'inherit', textDecoration: 'none' }}
      whileHover={{ scale: 1.1 }}
    >
      {children}
    </motion.a>
  );
};

function Footer() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <footer id='footer' className='footer' ref={containerRef}>
      <div className='footerCard'>
        <div className="footerHeader">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's work<br />together.
          </motion.h1>

          <a href="mailto:contact@marius.li" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="emailWrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <MagneticLink
                className="emailButton"
                href='mailto:contact@marius.li'
                mouseX={mouseX}
                mouseY={mouseY}
              >
                <h2>contact@marius.li</h2>
              </MagneticLink>
            </motion.div>
          </a>

        </div>

        <div className="footerBottom">
          <div className="socials">
            <MagneticLink href='https://github.com/mfhum' mouseX={mouseX} mouseY={mouseY}>Github</MagneticLink>
            <MagneticLink href='https://www.linkedin.com/in/marius-hummel-471078187/' mouseX={mouseX} mouseY={mouseY}>LinkedIn</MagneticLink>
            <MagneticLink href='/impressum' mouseX={mouseX} mouseY={mouseY}>Impressum</MagneticLink>
          </div>
        </div>

        <motion.div
          className="footerImageContainer"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="/images/marius.png" alt="Marius Hummel" className="footerImage" />
        </motion.div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Marius Fabian Hummel</p>
      </div>
    </footer>
  );
}

export default Footer;