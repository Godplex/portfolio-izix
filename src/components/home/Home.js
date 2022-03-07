import profile from '../../assets/profile.png';
import { SocialNetworks } from '../socialNetworks/SocialNetworks';

export const Home = () => {
    return (
        <section className="pt-5 d-flex flex-column justify-content-center align-items-center text-white" id="home">
            <div className="container py-5 my-5 px-4">
                <div className="row d-flex align-items-center">
                    <div className="col-md-9 order-last order-md-first text-md-start text-center">
                        <h1 className="py-3 display-4 fw-bolder">
                            Hola, soy Julián Rincón
                        </h1>
                        <p className="fs-2">
                            Desarrollador web y móvil
                        </p>
                        <SocialNetworks />
                    </div>
                    <div className="col-md-3 d-flex justify-content-center order-first order-md-last">
                        <img src={profile} alt='profile' className="img-fluid rounded-circle" />
                    </div>
                </div>
            </div>
        </section>
    )
}
