import React from 'react';
function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [number, setNumber] = React.useState('00');

  React.useEffect(() => {
    const handleScroll = () => {
      const process = document.getElementById('process');
      const processPosition = process.getBoundingClientRect();
      const footer = document.getElementById('footer');
      const footerPosition = footer.getBoundingClientRect();

      // Check if the unique section is in view
      if (processPosition.top >= 25) {
        setNumber('00');
      } else if (footerPosition.top >= 25) {
        setNumber('01');
      } else {
        setNumber('02');
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <nav className={menuOpen ? 'navActive' : 'nav'}>
        {!menuOpen && <h2 className='pageNumber'>({number})</h2>}
        <a onClick={() => setMenuOpen(false)} href='#top' className='svg logo'>
          {(number != '00' || menuOpen) && <h2 className='navLogo'>Hummel.</h2>}
          <svg className='svgLogo' width='225' height='70' viewBox='0 0 208 76' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M76.745 9.45193C134.666 -19.6104 257.173 42.7656 183.502 65.0947C91.4141 93.0061 -63.1681 51.7313 30.4697 10.9644C71.1818 -6.76029 135.209 11.0767 154.288 19.5854'
              stroke='black'
              strokeWidth='2'
            />
          </svg>
        </a>
        <a onClick={() => setMenuOpen(!menuOpen)} className='svg menu'>
          <h3>Menu</h3>
          <svg className='svgMenu' width='225' height='50' viewBox='0 0 208 76' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M76.745 9.45193C134.666 -19.6104 257.173 42.7656 183.502 65.0947C91.4141 93.0061 -63.1681 51.7313 30.4697 10.9644C71.1818 -6.76029 135.209 11.0767 154.288 19.5854'
              stroke='black'
              strokeWidth='2'
            />
          </svg>
        </a>
        {menuOpen && (
          <div>
            <div className='circle' />
            <ul className='navList'>
              <li className='navItem'>
                <a onClick={() => setMenuOpen(!menuOpen)} href='#top' className='svg linkItem'>
                  <h1>Home /</h1>
                  <h3>(00)</h3>
                  <svg className='svgNav' width='550' height='225' viewBox='0 0 609 217' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M224.284 23.5458C395.589 -62.4085 757.913 122.074 540.027 188.114C267.669 270.664 -189.52 148.591 87.4209 28.0192C207.83 -24.4031 397.197 28.3511 453.625 53.5164'
                      stroke='black'
                      strokeWidth='2'
                    />
                  </svg>
                </a>
              </li>
              <li className='navItem'>
                <a onClick={() => setMenuOpen(!menuOpen)} href='#processSection' className='svg linkItem'>
                  <h1>Prozess /</h1>
                  <h3>(01)</h3>
                  <svg className='svgNav' width='550' height='225' viewBox='0 0 609 217' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M224.284 23.5458C395.589 -62.4085 757.913 122.074 540.027 188.114C267.669 270.664 -189.52 148.591 87.4209 28.0192C207.83 -24.4031 397.197 28.3511 453.625 53.5164'
                      stroke='black'
                      strokeWidth='2'
                    />
                  </svg>
                </a>
              </li>
              <li className='navItem'>
                <a onClick={() => setMenuOpen(!menuOpen)} href='#footer' className='svg linkItem'>
                  <h1>Kontakt /</h1>
                  <h3>(02)</h3>
                  <svg className='svgNav' width='650' height='225' viewBox='0 0 609 217' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M224.284 23.5458C395.589 -62.4085 757.913 122.074 540.027 188.114C267.669 270.664 -189.52 148.591 87.4209 28.0192C207.83 -24.4031 397.197 28.3511 453.625 53.5164'
                      stroke='black'
                      strokeWidth='2'
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        )}
        {number != '00' && !menuOpen && (
          <a className='svg backtotop' href='#top'>
            <svg className='svgTop' width='100' height='100' viewBox='0 0 412 353' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M125.797 31.9289C276.796 -44.571 430.296 36.9289 408.797 204.929C379.792 431.57 -33.1897 388.529 3.8549 126.929C34.7963 -91.5707 297.296 24.9292 350.296 106.929'
                stroke='black'
                strokeWidth='2'
              />
            </svg>
            <p>Back to the start</p>
          </a>
        )}
      </nav>
    </>
  );
}

export default Navbar;
