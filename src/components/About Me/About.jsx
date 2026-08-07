import "./About.css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const aboutSections = [
    {
        title: "Who I am",
        content: "My name is Henry Court and I'm a current student at the University of Bristol. I'm also from Bristol! I love to solve interesting and unique problems."
    },
    {
        title: "Education",
        content: "I am currently in my 4th year of MEng Computer Science, averaging a 75. \nSome of my top modules are an 86 in Machine Learning, a 75 in the Teams Project and a 75 in Computer Graphics."
    },
    {
        title: "Experience",
        content: "I have worked as a Software Engineering Intern for an internal University of Bristol client, extending an existing CRM system. \nI have worked as a Research Intern, using interviews and questionnaires to assess a key Computer Science module. \nI am currently developing a web-game adaptation of a museum exhibit for OceanX. "
    },
    {
        title: "Skills",
        content: "I am a natural problem solver, and love to take on difficult tasks. \nI am a proficient programmer in many languages, such as Java, Python, C# and C++. \nI possess strong leadership skills, and am also great at communicating with my team and clients."
    },
    {
        title:  "Interests",
        content: "I love to play video games, in particular Nintendo games and story-driven singleplayer games such as Marvel's Spiderman and Elden Ring. \nI enjoy listening to a wide variety of music genres, such as Tyler, the Creator, Frank Ocean, The 1975 and South Arcade."
    },
    {
        title: "Current Projects",
        content: "I am currently working on adapting a Singaporean museum exhibit into a web-based educational experience for OceanX. \nThe goal is for the experience to be accessible to classrooms globally."
    }
];

const aboutMeScreen = {
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

const aboutContainer = {
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
            delay: 1.9
        }
    }
};

const aboutCard = {
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

function About({ onBack, onNext }) {

    
    const [selectedSection, setSelectedSection] = useState(null);

    return (
        <motion.section 
            id="projects"
            className="about"
            variants={aboutMeScreen}
            initial="hidden"
            animate="visible"
        >

            <motion.h1 variants={titleVariant}>
                About Me
            </motion.h1>

            <motion.div className="about-grid" variants={aboutContainer}>

                {aboutSections.map((section) => (
                    <motion.div 
                        className="about-card" 
                        key={section.title}
                        layoutId={section.title}
                        variants={aboutCard}
                        onClick={() => setSelectedSection(section)}
                    >

                        <h2>{section.title}</h2>

                    </motion.div>
                ))}


            </motion.div>

            <AnimatePresence>
                {selectedSection && (
                    <motion.div
                        className="about-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.15
                        }}
                    >

                        <motion.div
                            className="about-expanded"
                            layoutId={selectedSection.title}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                        >

                            <h2>{selectedSection.title}</h2>

                            <p>{selectedSection.content}</p>

                            <button
                                onClick={() => setSelectedSection(null)} 
                            >
                                ← Back
                            </button>
                            
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>

            <div className="scroll-buttons">
            
            <motion.h3 variants={buttonVariant}>
                Projects
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
                Contact Me
            </motion.h3>

            </div>


        </motion.section>
    );

}

export default About;