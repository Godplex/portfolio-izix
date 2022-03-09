
export const EducationItem = ({ img, name, end }) => {

    return (
        <div className="col-md-4 px-2 py-1 d-flex align-items-strench">
            <div className="card p-2 border-dark w-100">
                <div className="card-body">
                    <div className="text-center">
                        <img src={img} className="img-fluid w-75 rounded" alt={name} />
                    </div>
                    <p className="pt-3 h5">{name}</p>
                    <p className="pt-3 text-muted h5">{end}</p>
                </div>
            </div>
        </div>
    )
}
