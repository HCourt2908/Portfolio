import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

function Home() {
    const [showProjects, setShowProjects] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    return(
        <>
            <Navbar 
                onProjects={() => {setShowProjects(true); setSelectedProject(null);}}
                onHome={() => {setShowProjects(false); setSelectedProject(null);}}
                showProjects={showProjects}
            />

            <AnimatePresence mode="wait">
            {

                selectedProject ? (

                    <motion.div
                        key="project-details"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.5 }}
                    >

                        <ProjectDetails
                            project={selectedProject}
                            onBack={() => setSelectedProject(null)}
                        />

                    </motion.div>

                    

                ) : showProjects ? (

                    <motion.div
                        key="projects"
                        initial={{opacity:0, y:100}}
                        animate={{opacity:1, y:0}}
                        exit={{opacity:0, y:-100}}
                        transition={{ duration: 0.5 }}
                    >

                        <Projects 
                            onBack={() => setShowProjects(false)} 
                            onSelectProject={setSelectedProject}
                        />
                    </motion.div>

                ) : (

                    <motion.div
                        key="hero"
                        initial={{opacity:0, y:-100}}
                        animate={{opacity:1, y:0}}
                        exit={{opacity:0, y:100}}
                        transition={{ duration: 0.5 }}
                    >

                        <Hero onNext={() => setShowProjects(true)}/>
                    </motion.div>
                )
            }

            </AnimatePresence>

        </>
    );
}

export default Home;