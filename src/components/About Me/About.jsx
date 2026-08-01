import "./About.css";

function About({ onBack }) {

    return (
        <section className="about">

            <h1>About Me</h1>

            <p>
                I am henry.
            </p>


            <button className = "scroll-button" onClick={onBack}>
                ↑
            </button>


        </section>
    );

}

export default About;