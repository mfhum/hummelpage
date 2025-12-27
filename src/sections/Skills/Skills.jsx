import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Generate stable random values
const generateSkills = (skills) => {
	return skills.map((skill) => ({
		name: skill,
		rotate: Math.random() * 16 - 8,
		marginTop: Math.random() * 40 - 10,
		duration: 3 + Math.random() * 2,
		yOffset: Math.random() * 20 - 10
	}));
};

const FRONTEND_RAW = ["React.js", "Angular", "Next.js", "HTML", "SCSS/SASS", "JavaScript", "TypeScript", "Vite", "UX / UI Design"];
const BACKEND_RAW = [".NET Web API", "C#", "EF Core", "Oracle DB", "SQL Server", "Django", "API Engineering", "Auth", "LINQ"];
const TOOLS_RAW = ["Git", "GitHub Projects & Actions", "Atlassian Suite", "Docker", "JetBrains", "VPS", "nginx", "Postman", "Figma", "GCP", "Adobe Products"];

const MagneticPill = ({ children, href, mouseX, mouseY }) => {
	const ref = useRef(null);

	const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
	const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

	useEffect(() => {
		const handleMouseChange = (latestX) => {
			if (!ref.current) return;

			const rect = ref.current.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;
			const mY = mouseY.get();

			const distX = latestX - centerX;
			const distY = mY - centerY;
			const distance = Math.sqrt(distX * distX + distY * distY);

			// Increase range and pull for better feel
			const maxRange = 400;
			if (distance < maxRange) {
				const force = (1 - distance / maxRange) * 15; // 15px pull
				x.set(distX * (force / distance));
				y.set(distY * (force / distance));
			} else {
				x.set(0);
				y.set(0);
			}
		};

		const unsubscribe = mouseX.on("change", handleMouseChange);
		return () => unsubscribe();
	}, [mouseX, mouseY, x, y]);

	return (
		<div ref={ref} style={{ display: 'inline-block' }}>
			<motion.div style={{ x, y }}>
				<motion.a
					href={href}
					target="_blank"
					className="skillLink"
					whileHover={{ x: -4, y: -4 }}
					style={{ display: 'block' }}
				>
					<div className="skillCard">
						<h3>{children}</h3>
					</div>
				</motion.a>
			</motion.div>
		</div>
	);
};

function Skills() {
	const [activeSkill, setActiveSkill] = React.useState("Frontend");
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	// Memoize stable skills data
	const frontendSkills = useMemo(() => generateSkills(FRONTEND_RAW), []);
	const backendSkills = useMemo(() => generateSkills(BACKEND_RAW), []);
	const toolsSkills = useMemo(() => generateSkills(TOOLS_RAW), []);

	useEffect(() => {
		const handleMouseMove = (e) => {
			mouseX.set(e.clientX);
			mouseY.set(e.clientY);
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [mouseX, mouseY]);

	const handleClick = (index) => {
		document.querySelector(".slider").style.setProperty("--active-index", index);
		setActiveSkill(["Frontend", "Backend", "Tools"][index]);
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
		exit: { opacity: 0 }
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: { y: 0, opacity: 1 }
	};

	const renderCategory = (skills, key) => (
		<motion.div
			className="skillCategory"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
			key={key}
		>
			{skills.map((skill, index) => (
				<motion.div
					variants={itemVariants}
					key={index}
					style={{
						rotate: skill.rotate,
						marginTop: skill.marginTop,
						marginInline: '12px'
					}}
				>
					<MagneticPill mouseX={mouseX} mouseY={mouseY} href="https://github.com/mfhum">{skill.name}</MagneticPill>
				</motion.div>
			))}
		</motion.div>
	);

	return (
		<section id="skills" className="skillsSection">
			<h1 className="skillsTitle">Skills</h1>
			<div className="sliderContainer">
				<div className="slider">
					<button
						onClick={() => handleClick(0)}
						className={`sliderItem ${activeSkill === "Frontend" ? "active" : ""}`}
					>
						<h3>Frontend</h3>
					</button>
					<button
						onClick={() => handleClick(1)}
						className={`sliderItem ${activeSkill === "Backend" ? "active" : ""}`}
					>
						<h3>Backend</h3>
					</button>
					<button
						onClick={() => handleClick(2)}
						className={`sliderItem ${activeSkill === "Tools" ? "active" : ""}`}
					>
						<h3>Tools</h3>
					</button>
				</div>
			</div>
			<div className="skillsGrid">
				{activeSkill === 'Frontend' && renderCategory(frontendSkills, 'frontend')}
				{activeSkill === 'Backend' && renderCategory(backendSkills, 'backend')}
				{activeSkill === 'Tools' && renderCategory(toolsSkills, 'tools')}
			</div>
		</section>
	);
}

export default Skills;
