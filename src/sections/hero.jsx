import React from 'react';
function Hero() {
  return (
    <section id='hero' className='Hero'>
      <div className='content'>
        <div className='svg name'>
          <svg className='svgHero' width='750' height='217' viewBox='0 0 609 217' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M224.284 23.5458C395.589 -62.4085 757.913 122.074 540.027 188.114C267.669 270.664 -189.52 148.591 87.4209 28.0192C207.83 -24.4031 397.197 28.3511 453.625 53.5164'
              stroke='black'
              strokeWidth='2'
            />
          </svg>
          <h3 className='nameHover'>This normally shows that an item clickable, in this particular case it's just a showcase.</h3>
          <h1 className='nameText'>Hummel</h1>
          <h1>Marius</h1>
        </div>
        <div className='Description'>
          <h2>Web Developer & Designer</h2>
        </div>
        {/* <div className='Description'>
          <h2>Need a new Website?</h2>
          <h2 className='DescriptionText'>
            Let's create something&nbsp;<div className='hover'>unique</div>!
          </h2>
        </div> */}
      </div>
      <div className='circle' />
    </section>
  );
}

export default Hero;
