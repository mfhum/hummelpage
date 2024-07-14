import React from 'react';
function Hero() {
  return (
    <section id='hero' className='Hero'>
      <div className='content'>
        <div className='svg name'>
          <div className='heroHover'>
            <svg className='svgHero' width='750' height='217' viewBox='0 0 609 217' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M224.284 23.5458C395.589 -62.4085 757.913 122.074 540.027 188.114C267.669 270.664 -189.52 148.591 87.4209 28.0192C207.83 -24.4031 397.197 28.3511 453.625 53.5164'
                stroke='black'
                strokeWidth='2'
              />
            </svg>
            <h1 className='nameText heroTitle'>Hummel</h1>
          </div>
          <h1 className='heroTitle'>Marius</h1>
          <div className='titleWrapper'></div>
        </div>
        <div className='Description'>
          <div className='descText'>
            <h2>Web Developer & </h2> <h2 className='descSometimes'>&nbsp;sometimes</h2> <h2 className='descDesigner'>&nbsp;Designer</h2>
          </div>
        </div>
      </div>
      <div className='circle' />
    </section>
  );
}

export default Hero;
