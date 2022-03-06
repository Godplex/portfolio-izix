import profile from '../../assets/profile.png';
import { SocialNetworks } from '../socialNetworks/SocialNetworks';
import logo from '../../assets/logo.png';

export const Home = () => {
    return (
        <section className="pt-5 mt-5 d-flex flex-column justify-content-center align-items-center">
            <div className="container py-5 px-4">
                <div className="row d-flex align-items-center">
                    <div className="col-md-9 order-last order-md-first">
                        <h1 className="py-3">
                            Hola, mi nombre es Julián Rincón y soy desarrollador web y móvil
                        </h1>
                        <p className="fs-4">
                            Soy estudiante de tecnología en sistematización de datos y desarrollador web y móvil, actualmente estoy participando en el programa Oracle ONE en Alura Latam.
                        </p>
                        <SocialNetworks/>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center order-first order-md-last">
                        <img src={profile} alt='profile' className="img-fluid rounded-circle"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
