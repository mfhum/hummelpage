import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section
      id='hero'
      className='Hero'
    >
      <div className='content'>
        <div className='svg name'>
          <svg className='svgHero' width='750' height='217' viewBox='0 0 609 217' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <motion.path
              d='M224.284 23.5458C395.589 -62.4085 757.913 122.074 540.027 188.114C267.669 270.664 -189.52 148.591 87.4209 28.0192C207.83 -24.4031 397.197 28.3511 453.625 53.5164'
              stroke='black'
              strokeWidth='2'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          <motion.h1
            className='nameText heroTitle'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hummel
          </motion.h1>

          <motion.h1
            className='heroTitle'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Marius
          </motion.h1>

          <div className='titleWrapper'></div>
        </div>

        <div className='description'>
          <motion.div
            className='descText'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <h2>Web Developer & </h2> <h2 className='descSometimes'>&nbsp;sometimes</h2> <h2 className='descDesigner'>&nbsp;Designer</h2>
          </motion.div>
        </div>
      </div>
      <div className='circle' />
    </section>
  );
}

export default Hero;
