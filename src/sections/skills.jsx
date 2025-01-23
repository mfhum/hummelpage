import React from "react";

function Skills() {
	const [activeSkill, setActiveSkill] = React.useState("Frontend");

	const handleClick = (index) => {
		document.querySelector(".slider").style.setProperty("--active-index", index);
		setActiveSkill(["Frontend", "Backend", "Tools"][index]);
	};

	const getRandomAnimation = () => {
		const animations = ["move1", "move2", "move3", "move4", "move5"];
		return animations[Math.floor(Math.random() * animations.length)];
	};

	return (
			<>
				<section id="skillsSection" className="skillsSection">
					<h1 className="skillsTitle">Skills</h1>
					<div className="sliderContainer">
						<div className="slider">
							<button
									onClick={() => handleClick(0)}
									className={`slider-item ${activeSkill === "Frontend" ? "active" : ""}`}
							>
								<h3>Frontend</h3>
							</button>
							<button
									onClick={() => handleClick(1)}
									className={`slider-item ${activeSkill === "Backend" ? "active" : ""}`}
							>
								<h3>Backend</h3>
							</button>
							<button
									onClick={() => handleClick(2)}
									className={`slider-item ${activeSkill === "Tools" ? "active" : ""}`}
							>
								<h3>Tools</h3>
							</button>
						</div>
					</div>
					<div className="skills-grid">
						{activeSkill === 'Frontend' && (
								<div className="skill-category">
									{["React.js", "Angular", "Next.js", "HTML", "SCSS/SASS", "JavaScript", "TypeScript", "Vite", "Design"].map((skill, index) => (
											<a key={index} href="https://github.com/mfhum" target="_blank"><div className="skill-item" style={{ animationName: getRandomAnimation() }} ><h3>{skill}</h3></div></a>
									))}
								</div>
						)}
						{activeSkill === 'Backend' && (
								<div className="skill-category">
									{[".NET Web API", "C#", "EF Core", "Oracle DB", "SQL Server", "Django","API Engineering", "Auth"].map((skill, index) => (
											<a key={index} href="https://github.com/mfhum" target="_blank"><div className="skill-item" style={{ animationName: getRandomAnimation() }}><h3>{skill}</h3></div></a>
									))}
								</div>
						)}
						{activeSkill === 'Tools' && (
								<div className="skill-category">
									{["Git", "GitHub Projects & Actions", "Atlassian Suite", "Docker", "JetBrains", "VPS", "Postman", "Figma"].map((skill, index) => (
											<a key={index} href="https://github.com/mfhum" target="_blank"><div className="skill-item" style={{ animationName: getRandomAnimation() }}><h3>{skill}</h3></div></a>
									))}
								</div>
						)}
					</div>
				</section>
			</>
	);
}

export default Skills;
