import MonsterHunterImage from "../assets/monster-hunter-planner.png";
import ProjectAsphyxia from "../assets/project-asphyxia.png";
import NonogramSolver from "../assets/nonogram-solver.png";

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
            "Personally designed the game map from scratch, using premade asset packs to create a customised and cohesive linear experience"
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
        title: "poo",
        summary: "poo",
        technologies: [
            "poo"
        ],
    }
];

export default projects;