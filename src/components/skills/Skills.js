import Slider from 'react-slick/lib/slider';
import { settingSlick } from '../../utils/settingSlick';
import { SkillsItem } from './SkillsItem';

export const Skills = () => {

    const skills = [
        {
            name: "HTML5",
            icon: "fa-brands fa-html5"
        },
        {
            name: "JavaScript",
            icon: "fa-brands fa-js"
        },
        {
            name: "PHP",
            icon: "fa-brands fa-php"
        },
        {
            name: "Node JS",
            icon: "fa-brands fa-node"
        },
        {
            name: "React",
            icon: "fa-brands fa-react"
        },
        {
            name: "CSS",
            icon: "fa-brands fa-css3"
        },
        {
            name: "Git",
            icon: "fa-brands fa-git-alt"
        },
        {
            name: "Bootstrap",
            icon: "fa-brands fa-bootstrap"
        },
        {
            name: "Java",
            icon: "fa-brands fa-java"
        },
        {
            name: "Android",
            icon: "fa-brands fa-android"
        },
        {
            name: "SASS",
            icon: "fa-brands fa-sass"
        },
    ];

    return (
        <section className="d-flex flex-column justify-content-center align-items-center py-5 text-white" id="skills">
            <h2 className="text-center">Habilidades</h2>
            <div className="container px-5">
                <Slider {...settingSlick}>
                    {
                        skills.map(item => (
                            <SkillsItem
                                key={item.name}
                                {...item}
                            />
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}
