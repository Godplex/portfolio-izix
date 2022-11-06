import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ProjectsItem } from "./ProjectsItem";
import decoder from "../../assets/portfolio/Decoder.png";
import hangman from "../../assets/portfolio/Hagman.png";
import comic from "../../assets/portfolio/JDComics.png";
import izix from "../../assets/portfolio/IZ1X.png";
import hotel from "../../assets/portfolio/MyHotel.jpg";
import AluraGeek from "../../assets/portfolio/AluraGeek.png";
import { ProjectsButtonItem } from "./ProjectsButtonItem";
import { useState } from "react";

export const Projects = () => {

    const projects = [
        {
            img: comic,
            title: "JDComics",
            description: "Web e-commerce de cómics y figuras de acción desarrollado en PHP y JavaScript",
            repository: "https://gitlab.com/keideriz1x/TiendaComic",
            demo: "",
            type: "Web-Development",
        },
        {
            img: izix,
            title: "IZ1X",
            description: "Web e-commerce de videojuegos desarrollado en PHP y JavaScript",
            repository: "https://gitlab.com/keideriz1x/Games",
            demo: "",
            type: "Web-Development",
        },
        {
            img: hotel,
            title: "My Hotel",
            description: "Aplicación de hotel desarrollada en Android Studio y NodeJS",
            repository: "https://gitlab.com/keideriz1x/MyHotel",
            demo: "",
            type: "App-Development",
        },
        {
            img: decoder,
            title: "Encriptador de texto",
            description: "Encriptador de texto desarrollado en React.",
            repository: "https://github.com/Godplex/decoder-izix",
            demo: "https://godplex.github.io/decoder-izix/",
            type: "Web-Development",
        },
        {
            img: hangman,
            title: "Juego de ahorcado",
            description: "Juego de ahorcado desarrollado en React.",
            repository: "https://github.com/Godplex/hangman-izix",
            demo: "https://godplex.github.io/hangman-izix/",
            type: "Web-Development",
        },
        {
            img: AluraGeek,
            title: "AluraGeek",
            description: "Web e-commerce de cómics y figuras de acción desarrollado en React.",
            repository: "https://github.com/Godplex/alurageek-izix",
            demo: "https://godplex.github.io/alurageek-izix",
            type: "Web-Development",
        },
    ];

    const projectsButtonsItem = [
        {
            'id': 'All-Works',
            'name': 'Todos los trabajos',
        },
        {
            'id': 'Web-Development',
            'name': 'Desarrollo web',
        },
        {
            'id': 'App-Development',
            'name': 'Desarrollo de apps',
        }
    ];

    const [filteredProjects, setfilteredProjects] = useState(projects);
    const [activeIndex, setActiveIndex] = useState('All-Works');

    function show(id) {
        setActiveIndex(id);
        if (id !== 'All-Works') {
            const A = projects.filter(e => e.type === id);
            setfilteredProjects(A);
        } else {
            const A = projects;
            setfilteredProjects(A);
        }
    }

    return (
        <section className="d-flex flex-column justify-content-center align-items-center py-5 text-white" id="projects">
            <h2 className="text-center pb-4">Proyectos</h2>
            <div className="container px-3">
                <div className="text-center d-flex align-items-center">
                    <ul className="list-inline mx-auto">
                        {
                            projectsButtonsItem.map(item => (
                                <ProjectsButtonItem
                                    key={item.id}
                                    items={item}
                                    activeIndex={activeIndex}
                                    show={show}
                                />
                            ))
                        }
                    </ul>
                </div>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 576: 1, 768: 2, 992: 3 }}
                >
                    <Masonry>
                        {
                            filteredProjects.reverse().map(item => (
                                <ProjectsItem
                                    key={item.title}
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
