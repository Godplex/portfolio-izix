import uDistrital from "../../assets/logo-udistrital.png";
import alura from "../../assets/logo-alura.png";

export const EducationItem = () => {

    return (
        <>
            <div className="col-md-4 px-2 py-1 d-flex align-items-strench">
                <div className="card px-2 border-dark w-100">
                    <div className="card-body">
                        <img src={uDistrital} className="img-fluid w-100" alt="Universidad Distrital Francisco Jose de Caldas" />
                        <p className="pt-3 h5">Tecnología en sistematización de datos</p>
                        <p className="pt-3 text-muted h5">En curso</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 px-2 py-1 d-flex align-items-strench">
                <div className="card px-2 border-dark w-100">
                    <div className="card-body">
                        <img src={alura} className="img-fluid w-100" alt="Alura Latam" />
                        <p className="pt-3 h5">Desarrollador Web</p>
                        <p className="pt-3 text-muted h5">En curso</p>
                    </div>
                </div>
            </div>
        </>
    )
}
