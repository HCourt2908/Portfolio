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

                {project.github && (
                    <a href={project.github}>
                        View GitHub
                    </a>
                )}

                <button onClick={onBack}>
                    ← Back
                </button>

            </section>


    );

}

export default ProjectDetails;