import React, { useState } from 'react'
import { ProjectsItem } from './ProjectsItem';
import { projectsData } from '../../data/projects/projectsData';
import { projectsButtons } from '../../data/projects/projectsButtons';
import { ProjectsButtons } from './ProjectsButtons';
import { ArrowButton } from '../arrowButton/ArrowButton';
import Slider from 'react-slick/lib/slider';

export const Projects = () => {

    const [filteredProject, setfilteredProject] = useState(projectsData);

    const [activeIndex, setActiveIndex] = useState('All-Works');

    function show(id) {
        setActiveIndex(id);
        if (id !== 'All-Works') {
            const A = projectsData.filter(e => e.type === id);
            setfilteredProject(A);
        } else {
            const A = projectsData;
            setfilteredProject(A);
        }
    };

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplaySpeed: 3000,
        cssEase: "linear",
        dotsClass: "slick-dots slick-thumb",
        customPaging: function (i) {
            return <div className="dot"></div>;
        },
        prevArrow: <ArrowButton icon={"fa-solid fa-angle-left"} position="start" color="text-danger" />,
        nextArrow: <ArrowButton icon={"fa-solid fa-angle-right"} position="end" color="text-danger" />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section className="d-flex flex-column justify-content-center align-items-center py-5 text-white" id="projects">
            <h2 className="text-center">Proyectos</h2>
            <div className="container px-5">
                <div className="text-center">
                    <ul className="list-inline mx-auto">
                        {
                            projectsButtons.map(item => (
                                <ProjectsButtons
                                    key={item.id}
                                    items={item}
                                    activeIndex={activeIndex}
                                    show={show}
                                />
                            ))
                        }
                    </ul>
                </div>
                <Slider {...settings}>
                {
                    filteredProject.map(item => (
                        <ProjectsItem
                            key={item.id}
                            {...item}
                        />
                    ))
                }
                </Slider>
            </div>
        </section>
    )
}
