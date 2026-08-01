import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";

function Navbar({ onProjects, onAbout, onHome, showProjects, showAbout }) {
    return (
        <nav className="navbar">

            <div className="nav-left">
                <button onClick={onProjects}>
                    View My Projects
                </button>

                <button onClick={onAbout}>
                    About Me
                </button>
            </div>

            <button className="logo" onClick={onHome}>
                
                <AnimatePresence mode="wait">

                    {showProjects || showAbout ? (
                        <motion.span
                            key="home"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            ↑ Back Home
                        </motion.span>
                    ) : (
                        <motion.span
                            key="name"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3}}
                        >
                            Henry Court
                        </motion.span>
                    )}

                </AnimatePresence>

            </button>

            <div className="nav-right">
                <a href="#contact">Contact Me </a>
                <a href="https://github.com/HCourt2908/" target="_blank">Visit My Github</a>
            </div>
        </nav>
    );
}

export default Navbar;