import { motion } from "framer-motion";

function ProjectCard({ project, variants, onSelect }) {
    return (
        <motion.div className="project-card"
            variants={variants}
            whileHover={{ y: -10 }}
        >

            <h3>
                {project.title}
            </h3>

            <p className="project-description">
                {project.summary}
            </p>

            <div className="technologies">
                {project.technologies.map((tech) => (
                    <span key={tech}>
                        {tech}
                    </span>
                ))}
            </div>

            <button 
                className="project-button"
                onClick={() => onSelect(project)}
            >
                View Project
            </button>

        </motion.div>
    );
}

export default ProjectCard;