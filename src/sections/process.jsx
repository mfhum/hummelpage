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
        <div className='projects'>
          <h2 className='projectTitle'>Meine letzten Projekte</h2>
          <div className='projectCards'>
            <div className='projectCard'>
              <a href='https://ustreia-orta.ch' target='_blank' aria-label='Mein letztes Projekt (Ustreia Orta)'>
                <h3>Ustreia Orta in Lohn</h3>
              </a>
              <h3 className='projectText'>
                Die Website für dieses charmante Bed & Breakfast bringt den Webauftritt auf das professionelle Niveau, welches es verdient. Mit einem modernen Design und einer einfachen
                Benutzeroberfläche.
              </h3>
            </div>
            <div className='projectCard'>
              <a href='https://takiwatanga-thun.ch' target='_blank' aria-label='Mein letztes Projekt (Takiwatanga Thun)'>
                <h3>Takiwatanga in Thun</h3>
              </a>
              <h3 className='projectText'>
                Mithilfe meiner Auszubildenden in meinem aktuellen Job, haben wir die Website für das Takiwatanga in Thun erstellt. Ein modernes, verspieltes Design und eine einfache, barrierefreie
                Benutzeroberfläche, die es den Nutzern ermöglicht, sich schnell zurechtzufinden und Infos zu den neusten Veranstaltungen zu finden.
              </h3>
            </div>
            <div className='projectCard'>
              <a href='https://github.com/mfhum/hummelpage' target='_blank' aria-label='Portfolio Code'>
                <h3>Portfolio</h3>
              </a>
              <h3 className='projectText last'>Den Code zu diesem Portfolio findest du übrigens hier!</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Process;
