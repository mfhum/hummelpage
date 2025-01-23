import React, {useRef} from 'react';
import BlobCursor from "../blocks/Animations/BlobCursor/BlobCursor.jsx";
import VariableProximity from "../blocks/TextAnimations/VariableProximity/VariableProximity.jsx";
function Unique() {
  const containerRef = useRef(null);

  return (
    <>

      <section id='process' className='UniqueSection unique'>


        <h1 className="uniqueTitle">&#34;Unique&#34;</h1>
        <div className={'uniqueTextContainer'}>
          <div
              className={'uniqueText'}
              ref={containerRef}
          >
            <VariableProximity
                label={'Einzigartig, individuell und perfektionistisch – höchste Ansprüche, für ausergewöhnliche Ergebnisse.'}
                className={'variable-proximity-demo'}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff='linear'
            />
          </div>
        </div>

        <BlobCursor />
      </section>
    </>
  );
}

export default Unique;
