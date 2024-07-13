import React from 'react';
function About() {
  const [unique, setUnique] = React.useState(false);
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);
  const [xp, setXp] = React.useState(0);
  const [yp, setYp] = React.useState(0);
  const [viewPort, setViewPort] = React.useState(1000);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.pageX - 30);
      setMouseY(e.pageY - 30);
      setViewPort(window.innerHeight);
    };

    document.getElementById('about').addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      if (mouseY <= viewPort + 150) {
        setYp((prevYp) => viewPort + 150);
      } else if (mouseY >= viewPort * 2 - 200) {
        setYp((prevYp) => viewPort * 2 - 200);
      } else {
        setYp((prevYp) => prevYp + (mouseY - prevYp) / 6);
      }
      setXp((prevXp) => prevXp + (mouseX - prevXp) / 6);
    }, 1);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, [mouseX, mouseY]);
  return (
    <section id='about' className={unique ? 'About unique' : 'About'}>
      <div className={unique ? 'heroCircle uniqueCircle' : 'heroCircle'} style={{ left: xp, top: yp }} />
      <div className='aboutQuestion'>
        <h2>Need a new Website?</h2>
        <div className='aboutDesc'>
          <h2>Let's create something&nbsp;&nbsp;&nbsp;</h2>
          <a onClick={() => setUnique(!unique)} className='svg uniqueHover'>
            <svg className='svgUnique' width='225' height='60' viewBox='0 0 208 76' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M76.745 9.45193C134.666 -19.6104 257.173 42.7656 183.502 65.0947C91.4141 93.0061 -63.1681 51.7313 30.4697 10.9644C71.1818 -6.76029 135.209 11.0767 154.288 19.5854'
                stroke='black'
                strokeWidth='2'
              />
            </svg>
            <h2>unique</h2>
          </a>
        </div>
      </div>
      {unique && (
        <div className='uniqueContent'>
          <div className='discoverText'>
            <h3>visually appealing.</h3>
            <h3>tailored to your needs.</h3>
            <h3>fast and responsive.</h3>
            <h3>easy to use.</h3>
            <h3>creative design.</h3>
            <h3>optimized performance.</h3>
            <h3>secure and reliable.</h3>
          </div>
          <div className='discoverText'>
            <h3>secure and reliable.</h3>
            <h3>visually appealing.</h3>
            <h3>tailored to your needs.</h3>
            <h3>fast and responsive.</h3>
            <h3>easy to use.</h3>
            <h3>creative design.</h3>
            <h3>optimized performance.</h3>
          </div>
          <div className='discoverText'>
            <h3>optimized performance.</h3>
            <h3>secure and reliable.</h3>
            <h3>visually appealing.</h3>
            <h3>tailored to your needs.</h3>
            <h3>fast and responsive.</h3>
            <h3>easy to use.</h3>
            <h3>creative design.</h3>
          </div>
          <div className='discoverText'>
            <h3>creative design.</h3>
            <h3>optimized performance.</h3>
            <h3>secure and reliable.</h3>
            <h3>visually appealing.</h3>
            <h3>tailored to your needs.</h3>
            <h3>fast and responsive.</h3>
            <h3>easy to use.</h3>
          </div>
          <h2 className='findOutMore'>See how by scrolling down!</h2>
        </div>
      )}
    </section>
  );
}

export default About;
