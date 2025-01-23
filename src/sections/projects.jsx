import React from "react";

function Projects() {

	return (
			<>
				<section id='projects' className='ProjectsSection'>
					<h1 className='projectsTitle'>Projekte</h1>
					<div className='projectsDisplay'>
						<div className='project'>
							<div className='projectTitle'>
								<h2>Ustreia Orta /</h2>
								<h3>Lohn GR</h3>
							</div>
							<div className='projectDesc'>
								<h2>Die Website für dieses charmante Bed & Breakfast bringt den Webauftritt auf das professionelle Niveau, welches es verdient. Mit einem modernen Design und einer einfachen
									Benutzeroberfläche.</h2>
								<a href='https://ustreia-orta.ch' target='_blank' aria-label='Projekt (Ustreia Orta)'><h3 className='projectDescLink'>Zur Website &rarr;</h3></a>

							</div>
							<div className='projectMessage'>
								<h2>&#34;Ich kriege immer wieder Lob für meine Website und bin sehr zufrieden mit dem Resultat!&#34;</h2>
								<div className='projectCircle'/>
								<h3>Roger Rieder, Inhaber Ustreia Orta</h3>
							</div>
						</div>
						<div className='project'>
							<div className='projectTitle'>
								<h2>Takiwatanga /</h2>
								<h3>Thun BE</h3>
							</div>
							<div className='projectDesc'>
								<h2>Mithilfe meiner Auszubildenden in meinem aktuellen Job, haben wir die Website für das Takiwatanga in Thun erstellt. Ein modernes, verspieltes Design und eine einfache, barrierefreie
									Benutzeroberfläche, die es den Nutzern ermöglicht, sich schnell zurechtzufinden und Infos zu den neusten Veranstaltungen zu finden.</h2>
								<a href='https://takiwatanga-thun.ch' target='_blank' aria-label='Projekte (Takiwatanga)'><h3 className='projectDescLink'>Zur Website &rarr;</h3></a>
							</div>
							<div className='projectMessage'>
								<h2>&#34;Das kreative Design wieder spiegelt genau das wieder, was wir sind und was wir machen!&#34;</h2>
								<div className='projectCircle'/>
								<h3>Takiwatanga Thun, Verein</h3>
							</div>
						</div>
						<div className='project'>
							<div className='projectTitle'>
								<h2>Porfolio /</h2>
								<h3>by me</h3>
							</div>
							<div className='projectDesc'>
								<h2>Den Code zu diesem Portfolio findest du übrigens&nbsp;<a href='https://github.com/mfhum/hummelpage' target='_blank' aria-label='Portfolio Code'>
									<h2 className="clickable">hier!</h2>
								</a></h2>
							</div>
						</div>
					</div>
				</section>
			</>
	);
}

export default Projects;
