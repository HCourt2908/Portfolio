import { motion } from "framer-motion";
import "./ProjectDetails.css";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 50   
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            ease: "easeOut"
        }
    }
}

function ProjectDetails({ project, onBack }) {

    return (

            <motion.section className="project-details" variants={containerVariants} initial="hidden" animate="visible">

                <motion.h1 variants={itemVariants}>{project.title}</motion.h1>

                <motion.h3 variants={itemVariants}>{project.summary}</motion.h3>

                <motion.div className="project-media" variants={itemVariants}>

                {project.image && (
                    <img src={project.image} alt={project.title} />
                )}

                {project.youtube && (
                    <iframe 
                        src={project.youtube}
                        title={project.title}
                        allowFullScreen
                    />
                )}

                </motion.div>

               <motion.h2 variants={itemVariants}>Project Details</motion.h2>

               <motion.ul variants={itemVariants}>
                    {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
               </motion.ul>

                <motion.div className="project-buttons" variants={itemVariants}>

                {project.github && (
                    <button onClick={() => window.open(project.github, '_blank', 'noopener, noreferrer')}>
                        View GitHub
                    </button>
                )}

                <button onClick={onBack}>
                    ← Back
                </button>
                
                </motion.div>

            </motion.section>


    );

}

export default ProjectDetails;