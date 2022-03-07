import about from "../../assets/about.png";

export const About = () => {
    return (
        <section className="d-flex flex-column justify-content-center align-items-center bg-primary text-white" id="about">
            <div className="container px-4 py-5">
                <h2 className="text-center pb-4">Sobre mí</h2>
                <p className="h5">
                    Mi nombre es Julián Rincón, tengo 22 años y soy de Bogotá, Colombia.
                </p>
                <p className="h5">
                    Soy estudiante en proceso de grado de tecnología sistematización de datos en la
                    Universidad Distrital Francisco José de Caldas, comprometido con los
                    proyectos que se propone, desarrollandolos con dedicación,con gran interés por el desarrollo de software y 
                    el diseño frontend, con capacidad de aprender y aplicando los conocimientos en el 
                    campo profesional.
                </p>
                <p className="h5">
                    Me gusta trabajar en equipo, soy responsable, organizado, proactivo y con un buen manejo de relaciones interpersonales.
                </p>
            </div>
        </section>
    )
}
