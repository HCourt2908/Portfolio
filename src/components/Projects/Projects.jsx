import projects from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";
import { motion } from "framer-motion";

const projectsScreen = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.3
        }
    }
};

const titleVariant = {
    hidden: {
        opacity: 0,
        y: 50
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.5
        }
    }
};

const projectContainer = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2
        }
    }
};

const buttonVariant = {
    hidden: {
        opacity: 0,
        y: 50
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            delay: 1.4
        }
    }
};

const projectCard = {
    hidden: {
        opacity: 0,
        y: 50
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.2
        }
    }
};

function Projects({ onBack, onNext, onSelectProject, currentIndex, setCurrentIndex }) {

    const visibleProjects = [
        projects[currentIndex % projects.length],
        projects[(currentIndex + 1) % projects.length],
        projects[(currentIndex + 2) % projects.length]
    ];

    return (
        <motion.section 
            id="projects" 
            className="projects"
            variants={projectsScreen}
            initial="hidden"
            animate="visible"
        >

            <div className="projects-content">

            <motion.h2 variants={titleVariant}>
                Projects
            </motion.h2>

            <div className="project-carousel">

                
                <button className="scroll-button" onClick={() => setCurrentIndex((currentIndex - 1 + projects.length) % projects.length)}>
                    ←
                </button>
                

                <motion.div className="project-grid" variants={projectContainer}>
                    {visibleProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            variants={projectCard}
                            onSelect={onSelectProject}
                        />
                    ))}
                </motion.div>

                
                <button className="scroll-button" onClick={() => setCurrentIndex((currentIndex + 1) % projects.length)}>
                    →
                </button>
                

            </div>

            </div>

            <div className="scroll-buttons">

            <motion.h3 variants={buttonVariant}>
                Home
            </motion.h3>

            <motion.button
                className="scroll-button"
                variants={buttonVariant}
                onClick={onBack}
            >
                ↑
            </motion.button>

            <motion.button
                className="scroll-button"
                variants={buttonVariant}
                onClick={onNext}
            >
                ↓
            </motion.button>

            <motion.h3 variants={buttonVariant}>
                About Me
            </motion.h3>

            </div>
            
        </motion.section>
    );
}

export default Projects;