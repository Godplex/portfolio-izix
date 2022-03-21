import profile from '../../assets/profile.png';
import { SocialNetworkItem } from '../socialNetworks/SocialNetworkItem';
import TypeWriterEffect from 'react-typewriter-effect';

export const Home = () => {

    const socialNetworks = [
        {
            name: 'GitHub',
            icon: 'fa-brands fa-github',
            link: 'https://github.com/Godplex'
        },
        {
            name: 'GitLab',
            icon: 'fa-brands fa-gitlab',
            link: 'https://gitlab.com/keideriz1x'
        },
        {
            name: 'LinkedIn',
            icon: 'fa-brands fa-linkedin',
            link: 'https://www.linkedin.com/in/izix'
        },
    ];

    return (
        <section className="pt-5 d-flex flex-column justify-content-center align-items-center text-white" id="home">
            <div className="container py-5 my-5 px-4">
                <div className="row d-flex align-items-center">
                    <div className="col-md-9 order-last order-md-first text-md-start text-center">
                        <TypeWriterEffect
                            textStyle={{
                                fontSize: "4rem",
                                fontWeight: "bold",
                            }}
                            text="Hola, soy Julián Rincón."
                            cursorColor="#FFFFFF"
                            typeSpeed={70}
                            hideCursorAfterText={true}
                        />
                        <p className="fs-2">
                            Desarrollador web y móvil
                        </p>
                        <ul className="list-inline text-center d-md-flex align-items-md-center">
                            {
                                socialNetworks.map(item => (
                                    <SocialNetworkItem
                                        key={item.name}
                                        {...item}
                                    />
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center order-first order-md-last">
                        <img src={profile} alt='profile' className="img-fluid rounded-circle" />
                    </div>
                </div>
            </div>
        </section>
    )
}
