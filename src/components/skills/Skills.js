import { SkillsItem } from './SkillsItem';

export const Skills = () => {

    return (
        <section className="d-flex flex-column justify-content-center align-items-center py-5 text-white" id="skills">
            <h2 className="text-center">Habilidades</h2>
            <div className="container px-5">
                <SkillsItem />
            </div>
        </section>
    )
}
