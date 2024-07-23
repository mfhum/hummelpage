import React from 'react';
function Footer() {
  return (
    <footer id='footer' className='footer'>
      <div className='footerTitle'>
        <h1>Contact</h1>
        {/* <h2>Marius Hummel.</h2>
        <h3>Web Developer & Designer</h3> */}
      </div>
      <div className='footerContact'>
        <a
          className='svg footerContactSvg'
          href='mailto:hummelmarius87@gmail.com?subject=Kontaktanfrage%20Hummelweb&body=Hallo%20Marius%0D%0A%0D%0AIch%20bin%20%C3%BCber%20deine%20Webseite%20auf%20dich%20aufmerksam%20geworden%20und%20w%C3%A4re%20Interessiert%20an%20einem%20Call,%20wann%20h%C3%A4ttest%20du%20Zeit?%0D%0A%0D%0AFreundliche%20Gr%C3%BCsse%20XX'>
          <h3>You like what you see?</h3>
          <h3>Let's set up a call!</h3>
          <svg className='svgFooter' width='750' height='217' viewBox='0 0 609 217' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M224.284 23.5458C395.589 -62.4085 757.913 122.074 540.027 188.114C267.669 270.664 -189.52 148.591 87.4209 28.0192C207.83 -24.4031 397.197 28.3511 453.625 53.5164'
              stroke='black'
              strokeWidth='2'
            />
          </svg>
        </a>
      </div>
      <div className='footerBase'>
        <h3>Impressum</h3>
        <h3>LinkedIn</h3>
        <h3>Github</h3>
      </div>
    </footer>
  );
}

export default Footer;
