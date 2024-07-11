import React from 'react';
function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <nav className={menuOpen ? 'navActive' : 'nav'}>
        <a onClick={() => setMenuOpen(false)} href='#home' className='svg logo'>
          <h2>Hummel.</h2>
          <svg className='svgLogo' width='200' height='75' viewBox='0 0 609 217' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M224.284 23.5458C395.589 -62.4085 757.913 122.074 540.027 188.114C267.669 270.664 -189.52 148.591 87.4209 28.0192C207.83 -24.4031 397.197 28.3511 453.625 53.5164'
              stroke='black'
              strokeWidth='2'
            />
          </svg>
        </a>
        <a onClick={() => setMenuOpen(!menuOpen)} className='svg menu'>
          <h3>Menu</h3>
          <svg className='svgMenu' width='140' height='50' viewBox='0 0 609 217' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M224.284 23.5458C395.589 -62.4085 757.913 122.074 540.027 188.114C267.669 270.664 -189.52 148.591 87.4209 28.0192C207.83 -24.4031 397.197 28.3511 453.625 53.5164'
              stroke='black'
              strokeWidth='2'
            />
          </svg>
        </a>
        {menuOpen && (
          <div>
            <ul className='navList'>
              <li className='navItem'>
                <a onClick={() => setMenuOpen(!menuOpen)} href='#home' className='svg linkItem'>
                  <h1>Home /</h1>
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
                <a onClick={() => setMenuOpen(!menuOpen)} href='#about' className='svg linkItem'>
                  <h1>About /</h1>
                  <h3>(02)</h3>
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
                <a onClick={() => setMenuOpen(!menuOpen)} href='#blog' className='svg linkItem'>
                  <h1>Others /</h1>
                  <h3>(03)</h3>
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
      </nav>
    </>
  );
}

export default Navbar;
