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

function Projects({ onBack, onSelectProject }) {
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

            <motion.div className="project-grid"
                variants={projectContainer}
            >

                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                        variants={projectCard}
                        onSelect={onSelectProject}
                    />
                ))}

            </motion.div>

            </div>

            <motion.button
                className="scroll-button"
                variants={buttonVariant}
                onClick={onBack}
            >
                ↑
            </motion.button>

        </motion.section>
    );
}

export default Projects;