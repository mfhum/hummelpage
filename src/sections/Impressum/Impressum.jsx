import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Impressum() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='impressumPage'
    >
      <nav id='impressumNavbar' className='impressumNavbar'>
        <Link to='/' className='backButton'>
          <div className="backIcon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </div>
          <h3>Zurück zur Startseite</h3>
        </Link>
      </nav>

      <section id='impressumSection' className='impressumSection'>
        <div className="impressumCard">
          <motion.h1
            className='impressumTitle'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Legal Notice
          </motion.h1>

          <motion.div
            className='impressumContent'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="legalBlock">
              <h2>Website Owner</h2>
              <p>Marius Hummel</p>
              <p>contact@marius.li</p>
            </div>

            <div className="legalBlock">
              <h2>Liability for Links</h2>
              <p>
                This website contains links to external websites. I have no control over the content of these websites, and therefore, I cannot assume any liability for their content. The respective
                provider or operator of the linked pages is always responsible for their content.
              </p>
            </div>

            <div className="legalBlock">
              <h2>Copyright</h2>
              <p>
                The content and works on these pages created by the site operator are subject to Swiss copyright law. The duplication, processing, distribution, and any kind of exploitation outside the
                limits of copyright require written permission from the respective author or creator.
              </p>
            </div>

            <div className="legalBlock">
              <h2>Contact</h2>
              <p>If you have any questions about this Legal Notice, feel free to contact me at contact@marius.li.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Impressum;
