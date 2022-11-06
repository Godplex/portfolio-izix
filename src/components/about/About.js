import cv from "../../assets/cv/cv.pdf";

export const About = () => {
    return (
        <section className="d-flex flex-column justify-content-center align-items-center bg-primary text-white" id="about">
            <div className="container px-4 py-5">
                <h2 className="text-center pb-4">Sobre mí</h2>
                <p className="h5 text-md-start text-center">
                    Mi nombre es Julián Rincón, tengo 23 años y soy de Bogotá, Colombia.
                </p>
                <p className="h5 text-md-start text-center">
                    Soy estudiante  de séptimo semestre de Ingeniería en
                    Telemática en la Universidad Distrital Francisco José de
                    Caldas, comprometido con los proyectos que se propone, desarrollandolos con dedicación,con gran interés por el desarrollo de software y
                    el diseño frontend, con capacidad de aprender y aplicando los conocimientos en el
                    campo profesional.
                </p>
                <p className="h5 text-md-start text-center">
                    Me gusta trabajar en equipo, soy responsable, organizado, proactivo y con un buen manejo de relaciones interpersonales.
                </p>
                <div className="text-md-start text-center">
                    <a className="btn btn-outline-danger btn-lg px-5 py-2 mt-4" href={cv} target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-download fa-lg"></i> <span className="h5"> Descargar CV</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
