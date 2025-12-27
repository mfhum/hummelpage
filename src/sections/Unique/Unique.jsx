import React, { useRef } from 'react';
import BlobCursor from "../../components/animations/BlobCursor/BlobCursor.jsx";
import VariableProximity from "../../components/animations/VariableProximity/VariableProximity.jsx";
function Unique() {
  const containerRef = useRef(null);

  return (
    <>
      <section id='unique' className='UniqueSection'>
        <h1 className="uniqueTitle">&#34;Unique&#34;</h1>
        <div className={'uniqueTextContainer'}>
          <div
            className={'uniqueText'}
            ref={containerRef}
          >
            <div className="uniqueTextLine">
              <VariableProximity
                label={'Ich lege Wert auf Einzigartigkeit und Exzellenz –'}
                className={'variableProximity'}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff='linear'
              />
            </div>
            <div className="uniqueTextLine">
              <VariableProximity
                label={'Bedeutet auch:'}
                className={'variableProximity'}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff='linear'
              />
            </div>
            <div className="uniqueTextLine">
              <VariableProximity
                label={'Höchste Ansprüche für aussergewöhnliche Ergebnisse.'}
                className={'variableProximity'}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff='linear'
              />
            </div>
          </div>
        </div>

        <BlobCursor />
      </section>
    </>
  );
}

export default Unique;
