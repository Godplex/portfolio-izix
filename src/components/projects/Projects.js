import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ProjectsItem } from "./ProjectsItem";
import decoder from "../../assets/portfolio/Decoder.png";
import hangman from "../../assets/portfolio/Hagman.png";
import comic from "../../assets/portfolio/JDComics.png";
import izix from "../../assets/portfolio/IZ1X.png";
import hotel from "../../assets/portfolio/MyHotel.jpg";

export const Projects = () => {

    const projects = [
        {
            img: decoder,
            title: "Encriptador de texto",
            description: "Encriptador de texto desarrollado en HTML y JavaScript",
            repository: "https://github.com/Godplex/decoder-izix",
            demo: "https://godplex.github.io/decoder-izix/",
        },
        {
            img: comic,
            title: "JDComics",
            description: "Web e-commerce de cómics y figuras de acción desarrollado en PHP y JavaScript",
            repository: "https://gitlab.com/keideriz1x/TiendaComic",
            demo: "",
        },
        {
            img: hangman,
            title: "Juego de ahorcado",
            description: "Juego de ahorcado desarrollado en HTML y JavaScript",
            repository: "https://github.com/Godplex/hangman-izix",
            demo: "https://godplex.github.io/hangman-izix/",
        },
        {
            img: izix,
            title: "IZ1X",
            description: "Web e-commerce de videojuegos desarrollado en PHP y JavaScript",
            repository: "https://gitlab.com/keideriz1x/Games",
            demo: "",
        },
        {
            img: hotel,
            title: "My Hotel",
            description: "Aplicación de hotel desarrollada en Android Studio y NodeJS",
            repository: "https://gitlab.com/keideriz1x/MyHotel",
            demo: "",
        },
    ];

    return (
        <section className="d-flex flex-column justify-content-center align-items-center py-5 text-white" id="projects">
            <div className="container px-4">
                <h2 className="text-center pb-4">Proyectos</h2>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 540: 1, 720: 2, 960: 3 }}
                >
                    <Masonry>
                        {
                            projects.map(item => (
                                <ProjectsItem
                                    key={item.name}
                                    {...item}
                                />
                            ))
                        }
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </section>
    )
}
