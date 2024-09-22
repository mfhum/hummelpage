import React from 'react';
function Process() {
  return (
    <>
      {/* new section */}
      <section id='processSection' className='ProcessSection'>
        <h1 className='processTitle'>Prozess</h1>
        <div className='processSteps'>
          <div className='step'>
            <h2>planung & strategie</h2>
            <h3>Ich erstelle einen Plan, der Umfang, Strategie, Ziele, Ergebnisse, Zeitplan und Ressourcen des Projekts abdecken.</h3>
          </div>
          <div className='step'>
            <h2>design</h2>
            <h3>Ich entwerfe die Website mit den Informationen, die du mir gegeben hast. An erster Stelle steht das Erlebnis des Endnutzers.</h3>
          </div>
          <div className='step'>
            <h2>development</h2>
            <h3>
              Ich entwickle deine Website mit den neuesten Technologien und sorge dafür, dass sie responsiv und schnell ist. Mein Hauptfokus liegt darauf, dass du den Inhalt selbst anpassen kannst,
              ohne meine Hilfe zu benötigen.
            </h3>
          </div>
          <div className='step'>
            <h2>testing & launch</h2>
            <h3>
              Gemeinsam testen wir die Seite zum perfekten Endergebnis. Zusätzlich sorgen wir dafür, dass die Seite für Google optimiert wird. Voll ausgestattet mit Tracking und Datensammlung werden
              wir die Seite dann zusammen veröffentlichen.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Process;
