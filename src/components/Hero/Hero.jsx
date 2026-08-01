import { easeInOut, motion } from "framer-motion";
import "./Hero.css";

const textVariants = {
    hidden: {
        opacity: 0,
        x: -50
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    }
};

const textContainer= {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.4
        }
    }
};

function Hero({ onNext }) {
    return (
        <section className="hero">

            <motion.div 
                className="hero-content"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
            >

            <motion.div className="hero-text"
                variants={textContainer}
                initial="hidden"
                animate="visible"
            >

            <motion.h1 variants={textVariants}>
                Henry Court
                <br />
            </motion.h1>

            <motion.h3 className="subtitle" variants={textVariants}>
                MEng Computer Science
                <br />
            </motion.h3>

            <motion.h3 className="subtitle" variants={textVariants}>
                University of Bristol
            </motion.h3>

            <motion.p className="description" variants={textVariants}>
                Final year Computer Science student at the University of Bristol
                interested in software development, game development, and creating
                useful, innovative and accessible applications.
            </motion.p>

            <div className="buttons" variants={textVariants}>
                <a
                    href="https://www.linkedin.com/in/henry-c2908/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.button variants={textVariants}>
                        LinkedIn
                    </motion.button>
                </a>

                <a
                    href="/Henry Court CV.pdf"
                    download
                >
                    <motion.button variants={textVariants}>
                        Download CV
                    </motion.button>
                </a>
            </div>

            </motion.div>


            <motion.div 
                className="hero-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{ delay: 0.4, duration: 0.8, y: {duration: 3, repeat: Infinity, ease: easeInOut} }}
            >
                <img
                src = "/profile.jpg"
                alt ="Henry Court"
                />
            </motion.div>

            </motion.div>

            

            <motion.button
                className="scroll-button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1, y: [-10, 0] }}
                transition={{ delay: 1.8 }}
                onClick={onNext}
            >
                ↓
            </motion.button>

            <motion.h3 className="scroll-text" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1, y: [-10, 0] }}
                transition={{ delay: 1.8 }}>
                Projects
            </motion.h3>

        </section>
    );
}

export default Hero;