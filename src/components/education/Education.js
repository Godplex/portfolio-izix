import { EducationItem } from './EducationItem';

export const Education = () => {
    return (
        <section className="d-flex flex-column justify-content-center align-items-center bg-primary text-white py-5" id="education">
            <div className="container px-5">
                <h2 className="text-center pb-4">Formación academica</h2>
                <div className="row px-3 d-flex justify-content-center">
                    <EducationItem />
                </div>
            </div>
        </section>
    )
}
