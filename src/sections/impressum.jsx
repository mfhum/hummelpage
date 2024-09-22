import React from 'react';
function Impressum() {
  return (
    <>
      {/* new section */}
      <nav id='impressumNavbar' className='impressumNavbar'>
        <a onClick={() => setMenuOpen(!menuOpen)} href='/' className='navImpressum' aria-label='Zurück zur Hauptseite'>
          <h3>Zurück zur Hauptseite</h3>
        </a>
      </nav>
      <section id='impressumSection' className='impressumSection'>
        <h1 className='impressumTitle'>Impressum</h1>
        <div className='impressumContent'>
          <h2>Website Owner:</h2>
          <h3>Marius Hummel</h3>
          <h3>contact@marius.li</h3>

          <h2>Liability for Links</h2>
          <h3>
            This website contains links to external websites. I have no control over the content of these websites, and therefore, I cannot assume any liability for their content. The respective
            provider or operator of the linked pages is always responsible for their content.
          </h3>

          <h2>Copyright</h2>
          <h3>
            The content and works on these pages created by the site operator are subject to Swiss copyright law. The duplication, processing, distribution, and any kind of exploitation outside the
            limits of copyright require written permission from the respective author or creator.
          </h3>

          <h2>Contact</h2>
          <h3>If you have any questions about this Impressum, feel free to contact me at contact@marius.li.</h3>
        </div>
      </section>
    </>
  );
}

export default Impressum;
