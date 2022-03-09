import Slider from 'react-slick/lib/slider';
import { settingSlick } from '../../utils/settingSlick';
import { HobbiesItem } from './HobbiesItem'

export const Hobbies = () => {

    const hobbies = [
        {
            name: "Musica",
            icon: "fa-solid fa-music"
        },
        {
            name: "Series",
            icon: "fa-solid fa-tv"
        },
        {
            name: "Videojuegos",
            icon: "fa-solid fa-gamepad"
        },
    ];

    return (
        <section className="d-flex flex-column justify-content-center align-items-center py-5 text-white" id="hobbies">
            <h2 className="text-center">Pasatiempos</h2>
            <div className="container px-5">
                <Slider {...settingSlick}>
                    {
                        hobbies.map(item => (
                            <HobbiesItem
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
