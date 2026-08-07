import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import About from "../components/About Me/About";
import Contact from "../components/Contact Me/Contact"

function Home() {
    const [showProjects, setShowProjects] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    return(
        <>
            <Navbar 
                onProjects={() => {setShowProjects(true); setSelectedProject(null); setShowAbout(false); setShowContact(false);}}
                onAbout={() => {setShowAbout(true); setSelectedProject(null); setShowProjects(false); setShowContact(false)}}
                onHome={() => {setShowProjects(false); setSelectedProject(null); setShowAbout(false); setShowContact(false);}}
                onContact={() => {setShowContact(true); setShowProjects(false); setSelectedProject(null); setShowAbout(false);}}
                showProjects={showProjects}
                showAbout={showAbout}
                showContact={showContact}
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
                            onNext={() => {setShowAbout(true); setShowProjects(false);}}
                            onSelectProject={setSelectedProject}
                            currentIndex={currentProjectIndex}
                            setCurrentIndex={setCurrentProjectIndex}
                        />
                    </motion.div>

                ) : showAbout ? (

                    <motion.div
                        key="about"
                        initial={{opacity:0, y:100}}
                        animate={{opacity:1, y:0}}
                        exit={{opacity:0, y:-100}}
                        transition={{ duration: 0.5 }}
                    >

                        <About 
                            onBack={() => {setShowAbout(false); setShowProjects(true);}}
                            onNext={() => {setShowAbout(false); setShowContact(true);}} 
                        />
                    </motion.div>

                    
                ) : showContact ? (

                    <motion.div
                        key="contact"
                        initial={{opacity:0, y:100}}
                        animate={{opacity:1, y:0}}
                        exit={{opacity:0, y:-100}}
                        transition={{ duration: 0.5 }}
                    >

                        <Contact 
                            onBack={() => {setShowContact(false); setShowAbout(true);}}
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