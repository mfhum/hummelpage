import React from 'react';
import InfiniteScroll from "../blocks/Components/InfiniteScroll.jsx";
function Footer() {
  const items = [
    { content: <a href="https://www.github.com/mfhum" target="_blank"><h2>Github &rarr;</h2></a> },
    { content: <a href="https://www.linkedin.com/in/marius-hummel-471078187/" target="_blank"><h2>LinkedIn &rarr;</h2></a> },
    { content: <a href="href='mailto:contact@marius.li'" target="_blank"><h2>Mail &rarr;</h2></a> },
    { content: <a href="/impressum" target="_blank"><h2>Impressum &rarr;</h2></a> },
    { content: <a href="https://www.github.com/mfhum" target="_blank"><h2>Github &rarr;</h2></a> },
    { content: <a href="https://www.linkedin.com/in/marius-hummel-471078187/" target="_blank"><h2>LinkedIn &rarr;</h2></a> },
    { content: <a href="href='mailto:contact@marius.li'" target="_blank"><h2>Mail &rarr;</h2></a> },
    { content: <a href="/impressum" target="_blank"><h2>Impressum &rarr;</h2></a> },
  ]
  return (
    <footer id='footer' className='footer'>
      <div className='footerContent'>
        <div className='footerContentLeft'>
          <div className='footerContentTitle'>
            <h1>Kontakt</h1>
            <h2>Marius Fabian Hummel.</h2>
            <h3>Web Developer & Designer</h3>
            <a
              href='mailto:contact@marius.li'
              aria-label='Kontakt per E-Mail'>
              <h3>contact@marius.li</h3>
            </a>
          </div>
          <div className='footerContentImage'>
            <img className='footerContentImageSrc' src='/images/marius.png' alt='Marius Hummel' />
          </div>
        </div>
        <div className='footerContentRight'>
          <InfiniteScroll
              items={items}
              isTilted={true}
              tiltDirection='right'
              autoplay={true}
              autoplaySpeed={0.3}
              autoplayDirection='down'
              pauseOnHover={true}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
