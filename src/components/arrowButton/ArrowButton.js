
export const ArrowButton = ({ icon, onClick, position }) => {
    return (
        <button
            onClick={onClick}
            className={`${(position === 'start') ? 'prev-slick' : 'next-slick'}`}
        >
            <i className={`${icon} fa-xl text-danger`}></i>
        </button>
    )
}
