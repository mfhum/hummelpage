import React from 'react';
function Process() {
  return (
    <>
      {/* new section */}
      <section id='processSection' className='ProcessSection'>
        <h1 className='processTitle'>Process</h1>
        <div className='processSteps'>
          <div className='step'>
            <h2>planning & strategy</h2>
            <h3>We create a plan that covers the project’s scope, strategy, goals, deliverables, timeline and resources.</h3>
          </div>

          <div className='step'>
            <h2>design</h2>
            <h3>We design your website with the user and your ultra unique info you gave us in mind. We help you stand out</h3>
          </div>

          <div className='step'>
            <h2>development</h2>
            <h3>We develop your website with the latest technologies and make sure it is responsive and fast. Our main focus is being able to adjust content by yourself without needing our help.</h3>
          </div>

          <div className='step'>
            <h2>testing & launch</h2>
            <h3>
              Together we polish the site to your perfect endresult. Fully equipped with tracking and data gathering. Additionally, we ensure that your site garners favor with Google, optimizing its
              potential for improved rankings.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Process;
