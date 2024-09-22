import React from 'react';
function Unique() {
  const [unique, setUnique] = React.useState(false);
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);
  const [xp, setXp] = React.useState(0);
  const [yp, setYp] = React.useState(0);
  const [viewPort, setViewPort] = React.useState(1000);
  const [currentStep, setCurrentStep] = React.useState(0);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.pageX - 30);
      setMouseY(e.pageY - 30);
      setViewPort(window.innerHeight);
    };

    document.getElementById('process').addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      if (unique) {
        if (mouseY <= viewPort + 175) {
          setYp((prevYp) => viewPort + 175);
        } else if (mouseY >= viewPort * 2 - 250) {
          setYp((prevYp) => viewPort * 2 - 250);
        } else {
          setYp((prevYp) => prevYp + (mouseY - prevYp) / 6);
        }
        setXp((prevXp) => prevXp + (mouseX - prevXp) / 6);
      }
    }, 1);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, [mouseX, mouseY]);
  return (
    <>
      <section id='process' className={unique ? 'UniqueSection unique' : 'UniqueSection'}>
        <div className={unique ? 'heroCircle uniqueCircle' : 'heroCircle'} style={{ left: xp, top: yp }} />
        <div className='uniqueQuestion'>
          <h2>Du brauchst eine neue Webseite?</h2>
          <div className='uniqueDesc'>
            <h2>Wie wär's mit&nbsp;&nbsp;&nbsp;</h2>
            <button onClick={() => setUnique(!unique)} className='svg uniqueHover'>
              <svg className='svgUnique' width='225' height='100' viewBox='0 0 208 76' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M76.745 9.45193C134.666 -19.6104 257.173 42.7656 183.502 65.0947C91.4141 93.0061 -63.1681 51.7313 30.4697 10.9644C71.1818 -6.76029 135.209 11.0767 154.288 19.5854'
                  stroke='black'
                  strokeWidth='2'
                />
              </svg>
              <h2>einzigartig</h2>
            </button>
          </div>
        </div>
        <h2 className={unique ? 'findOutMore' : 'findOutMore closed'}>Finde mit einem Scroll mehr heraus!</h2>
      </section>
    </>
  );
}

export default Unique;
