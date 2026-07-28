import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

function Home() {
    const [showProjects, setShowProjects] = useState(false);

    return(
        <>
            <Navbar 
                onProjects={() => setShowProjects(true)}
                onHome={() => setShowProjects(false)}
                showProjects={showProjects}
            />

            <AnimatePresence mode="wait">
            {
                showProjects ? (

                    <motion.div
                        key="projects"
                        initial={{opacity:0, y:100}}
                        animate={{opacity:1, y:0}}
                        exit={{opacity:0, y:-100}}
                        transition={{ duration: 0.5 }}
                    >

                        <Projects onBack={() => setShowProjects(false)} />
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