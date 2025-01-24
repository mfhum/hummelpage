import React from 'react';
import InfiniteScroll from "../blocks/Components/InfiniteScroll.jsx";
function Footer() {
  const items = [
    { content: <a href="https://www.github.com/mfhum" target="_blank"><h2>Github &rarr;</h2></a> },
    { content: <a href="https://www.github.com/mfhum" target="_blank"><h2>LinkedIn &rarr;</h2></a> },
    { content: <a href="https://www.github.com/mfhum" target="_blank"><h2>Mail &rarr;</h2></a> },
    { content: <a href="https://www.github.com/mfhum" target="_blank"><h2>Impressum &rarr;</h2></a> },
    { content: <a href="https://www.github.com/mfhum" target="_blank"><h2>Github &rarr;</h2></a> },
    { content: <a href="https://www.github.com/mfhum" target="_blank"><h2>LinkedIn &rarr;</h2></a> },
    { content: <a href="https://www.github.com/mfhum" target="_blank"><h2>Mail &rarr;</h2></a> },
    { content: <a href="https://www.github.com/mfhum" target="_blank"><h2>Impressum &rarr;</h2></a> },
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
              href='mailto:contact@marius.li?subject=Kontaktanfrage%20Hummelweb&body=Hallo%20Marius%0D%0A%0D%0AIch%20bin%20%C3%BCber%20deine%20Webseite%20auf%20dich%20aufmerksam%20geworden%20und%20w%C3%A4re%20Interessiert%20an%20einem%20Call,%20wann%20h%C3%A4ttest%20du%20Zeit?%0D%0A%0D%0AFreundliche%20Gr%C3%BCsse%20XX'
              aria-label='Kontakt per E-Mail'>
              <h3>contact@marius.li</h3>
            </a>
          </div>
          <div className='footerContentImage'>
            <img className='footerContentImageSrc' src='../src/assets/marius.png' alt='Marius Hummel' />
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
