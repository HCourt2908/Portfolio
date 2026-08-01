import "./ProjectDetails.css";

function ProjectDetails({ project, onBack }) {

    return (

            <section className="project-details">

                <h1>{project.title}</h1>

                <p>{project.summary}</p>

                {project.image && (
                    <img src={project.image} alt={project.title} />
                )}

               <h3>Project Details</h3>

               <ul>
                    {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
               </ul>

                {project.youtube && (
                    <iframe 
                        src={project.youtube}
                        title={project.title}
                        allowFullScreen
                    />
                )}

                <div className="project-buttons">

                {project.github && (
                    <button onClick={() => window.open(project.github, '_blank', 'noopener, noreferrer')}>
                        View GitHub
                    </button>
                )}

                <button onClick={onBack}>
                    ← Back
                </button>
                
                </div>

            </section>


    );

}

export default ProjectDetails;