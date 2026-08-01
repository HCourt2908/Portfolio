import MonsterHunterImage from "../assets/monster-hunter-planner.png";
import ProjectAsphyxia from "../assets/project-asphyxia.png";
import NonogramSolver from "../assets/nonogram-solver.png";
import CornellBoxEngine from "../assets/cornell-box-engine.png";
import MachineLearning from "../assets/machine-learning.png";
import HighPerformanceComputing from "../assets/high-performance-computing.png";

const projects = [
    {
        title: "Monster Hunter Loadout Planner",
        summary: "A full stack web application for creating and optimising Monster Hunter Rise armour builds.",
        technologies: [
            "Java",
            "Spring Boot",
            "Thymeleaf",
            "Javascript"
        ],
        details: [
            "Built using Java and Spring Boot with a Thymeleaf frontend",
            "Processes Monster Hunter Rise armour and skill data from JSON files",
            "Allows users to search for different armour sets and skills",
            "Displays total defence, all skills and their levels"
        ],
        github: "https://github.com/HCourt2908/monster-hunter-planner",
        image: MonsterHunterImage
    },

    {
        title: "VR Horror Experience",
        summary: "A Unity VR horror experience focused on accessiblity and immersion.",
        technologies: [
            "Unity",
            "C#",
            "XR Interaction Toolkit"
        ],
        details: [
            "Year 3 team project, collaboratively produced with 6 other students",
            "Created an immersive VR horror experience called Project Asphyxia",
            "Personally focused on accessibility, designing a novel locomotion system designed to reduce motion sickness",
            "Personally designed the game map from scratch, using premade asset packs to create a customised and cohesive linear experience",
            "Achieved a score of 75, with strong positive feedback on the accessibility and linearity of the experience"
        ],
        github: null,
        image: ProjectAsphyxia,
        youtube: "https://www.youtube.com/embed/bKNZcbmliUk"
    },

    {
        title: "Nonogram Solver",
        summary: "A python application that solves and visualises Nonogram puzzles.",
        technologies: [
            "Python",
            "Tkinter",
            "Algorithms"
        ],
        details: [
            "Python application that solves nonograms, AKA japanese crosswords",
            "Uses a self-designed logical deduction algorithm to solve puzzles of any size",
            "Uses a self-designed guess->contradiction backtracking algorithm to solve puzzles that are impossible to solve with logic alone",
            "Has a basic GUI allowing users to input custom nonograms of any size and their clues, solves the puzzle, then shows a visual representation of the image"
        ],
        github: "https://github.com/HCourt2908/Nonogram-Solver",
        image: NonogramSolver
    },

    {
        title: "Cornell Box Computer Graphics Engine",
        summary: "A simple computer graphics engine that renders 3D models in 2D space",
        technologies: [
            "C++"
        ],
        details: [
            "A C++ ground-up computer graphics engine",
            "Used rasterising and ray tracing techniques to render 3D models from .obj files",
            "Implemented features such as soft shadows, advanced camera motions, and reflective and refractive materials",
            "Achieved a score of 75"
        ],
        github: null,
        image: CornellBoxEngine
    },

    {
        title: "Exploration of Machine Learning Techniques",
        summary: "Explored a variety of machine learning techniques and their applications to different datasets",
        technologies: [
            "Python",
            "Scikit-learn",
            "Pandas",
            "Matplotlib",
            "Numpy"
        ],
        details: [
            "Explored and compared regression techniques such as linear regression, neural networks and bayesian linear regression",
            "Explored and compared classification techniques such as decision trees, random forests and support machines on a PCA-reduced dataset",
            "Explored and compared clustering techniques such as k-means and Gaussian mixture models using metrics such as silhouette score and rand index",
            "Explored and compared hidden markov models for COVID-19 death prediction",
            "Achieved a score of 86"
        ],
        github: null,
        image: MachineLearning
    },

    {
        title: "Optimising Lattice-Boltzmann for Isambard 3",
        summary: "Optimised two implementations of Lattice Boltzmann algorithms for the Isambard 3 supercomputer",
        technologies: [
            "C",
            "OpenMP",
            "MPI"
        ],
        details: [
            "Optimised an implementation of Lattice-Boltzmann using serialisation, vectorisation and OpenMP parallelisation",
            "Achieved a speedup of 136x from skeleton to optimised version on 144 cores of Isambard 3",
            "Optimised a second implementation of Lattice-Boltzmann using serialisation, vectorisation and MPI parallelisation",
            "Achieved a speedup of 551x from serially optimised to MPI parallelised version on 576 cores across 4 nodes of Isambard 3",
            "Achieved a score of 66"
        ],
        github:null,
        image: HighPerformanceComputing
    }
];

export default projects;