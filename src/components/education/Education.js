import { EducationItem } from './EducationItem';
import uDistrital from "../../assets/education/logo-udistrital.png";
import alura from "../../assets/education/logo-alura.png";

export const Education = () => {

    const educations = [
        {
            img: uDistrital,
            name: "Ingenieria en telematica",
            end: "En curso"
        },
        {
            img: uDistrital,
            name: "Tecnología en sistematización de datos",
            end: "Finalizado"
        },
        {
            img: alura,
            name: "Desarrollo Web",
            end: "Finalizado"
        },
    ];

    return (
        <section className="d-flex flex-column justify-content-center align-items-center bg-primary text-white py-5" id="education">
            <h2 className="text-center pb-4">Formación academica</h2>
            <div className="container px-4">
                <div className="row d-flex justify-content-center">
                    {
                        educations.map(item => (
                            <EducationItem
                                key={item.name}
                                {...item}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
