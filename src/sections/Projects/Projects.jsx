import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
	{
		number: "01",
		title: "Ustreia Orta",
		location: "Lohn GR",
		description: "Die Website dieses charmanten Bed & Breakfasts hebt den Webauftritt auf das professionelle Niveau, das es verdient. Sie überzeugt durch ein modernes Design und eine benutzerfreundliche Oberfläche.",
		link: "https://ustreia-orta.ch",
		testimonial: "Die Rückmeldungen unserer Gäste sind durchweg positiv. Die Zusammenarbeit ist sehr angenehm und unsere Ideen und Wünsche werden stets ernst genommen und kreativ umgesetzt.",
		author: "Roger und Annatina Rieder, Inhaber Ustreia Orta"
	},
	{
		number: "02",
		title: "Takiwatanga",
		location: "Thun BE",
		description: "Gemeinsam mit meinen Auszubildenden haben wir die Website für das Takiwatanga erarbeitet. Das Ergebnis ist ein modernes, verspieltes Design mit einer einfachen, barrierefreien Benutzeroberfläche.",
		link: "https://takiwatanga-thun.ch",
		testimonial: "Das kreative Design widerspiegelt genau das wieder, was wir sind und was wir machen!",
		author: "Takiwatanga Thun, Verein"
	},
	{
		number: "03",
		title: "Portfolio",
		location: "Open Source",
		description: "Das Projekt, auf dem du dich gerade befindest. Der Code ist öffentlich zugänglich und dient als Showcase für moderne Web-Technologien und Animationen.",
		link: "https://github.com/mfhum/hummelpage",
		testimonial: "Den Code findest du übrigens direkt auf GitHub. Schau gerne rein!",
		author: "Marius Fabian Hummel"
	},
	{
		number: "?",
		title: "Dein Projekt?",
		location: "Next Chapter",
		description: "Hier könnte deine Vision stehen. Ich bin immer auf der Suche nach spannenden Herausforderungen und innovativen Ideen, die wir gemeinsam zum Leben erwecken können.",
		link: "#footer",
		testimonial: "Bist du bereit, den nächsten Schritt zu wagen? Schreib mir eine Nachricht und lass uns darüber sprechen, wie wir deine Ziele erreichen.",
		author: "Marius Fabian Hummel (vielleicht bald du?)"
	}
];

function Projects() {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const nextProject = () => {
		setDirection(1);
		setIndex((prev) => (prev + 1) % projectsData.length);
	};

	const prevProject = () => {
		setDirection(-1);
		setIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
	};

	const current = projectsData[index];

	const variants = {
		enter: (direction) => ({
			x: direction > 0 ? "100%" : "-100%",
			opacity: 0
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1
		},
		exit: (direction) => ({
			zIndex: 0,
			x: direction < 0 ? "100%" : "-100%",
			opacity: 0
		})
	};

	return (
		<section id="projects" className="ProjectsSection">
			<div className="container sliderMode">
				<h1 className="projectsTitle">Projekte</h1>

				<div className="sliderWrapper">
					<AnimatePresence initial={false} custom={direction}>
						<motion.div
							key={index}
							custom={direction}
							variants={variants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{
								x: { type: "spring", stiffness: 300, damping: 30 },
								opacity: { duration: 0.4 }
							}}
							className="projectItem sliderItem"
						>
							<div className="projectBackgroundNumber">{current.number}</div>

							<div className="projectContent">
								<div className="projectHeader">
									<div className="titleWrapper">
										<h2 className="title">{current.title}</h2>
										<span className="divider">/</span>
										<h3 className="location">{current.location}</h3>
									</div>
								</div>

								<div className="projectBody">
									<div className="descriptionSide">
										<p className="description">{current.description}</p>
										<a href={current.link} target="_blank" rel="noopener noreferrer" className="projectLink">
											<span>Zur Website</span>
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
												<path d="M5 12h14M12 5l7 7-7 7" />
											</svg>
										</a>
									</div>

									{current.testimonial && (
										<div className="testimonialSide">
											<div className="quoteIcon">“</div>
											<p className="quote">{current.testimonial}</p>
											<p className="author">— {current.author}</p>
										</div>
									)}
								</div>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Slider Controls Container - Moved out of sliderWrapper but still in container */}
				<div className="sliderControls">
					<div className="sliderProgress">
						{projectsData.map((_, i) => (
							<div
								key={i}
								className={`progressDot ${i === index ? 'active' : ''}`}
								onClick={() => {
									setDirection(i > index ? 1 : -1);
									setIndex(i);
								}}
							/>
						))}
					</div>
				</div>
			</div>

			{/* Direct Navigation - Now outside the container */}
			<button className="navHint left" onClick={prevProject}>
				&larr; Previous
			</button>
			<button className="navHint right" onClick={nextProject}>
				Next &rarr;
			</button>
		</section>
	);
}

export default Projects;
