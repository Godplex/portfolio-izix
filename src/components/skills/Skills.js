import React from 'react'
import { SkillsItem } from './SkillsItem'

export const Skills = () => {
    return (
        <section className="d-flex flex-column justify-content-center align-items-center py-5">
            <div className="container">
                <h3 className="text-center">Habilidades</h3>
                <div className="row d-flex align-items-center justify-content-center px-3">
                    <SkillsItem />
                </div>
            </div>
        </section>
    )
}
