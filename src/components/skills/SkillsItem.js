
export const SkillsItem = ({ name, icon }) => {

    return (
        <div className="px-2 d-flex">
            <div className="card px-2 pt-5 border-danger mt-4 w-100 cardHover">
                <div className="card-body">
                    <i className={`${icon} fa-3x text-danger iconHover`}></i>
                    <p className="pt-3 h5 text-nowrap">{name}</p>
                </div>
            </div>
        </div>
    )
}
