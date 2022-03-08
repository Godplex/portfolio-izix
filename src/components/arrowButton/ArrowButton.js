
export const ArrowButton = ({ icon, onClick, position, color }) => {
    return (
        <button
            onClick={onClick}
            className={`${(position == 'start') ? 'prev-slick' : 'next-slick'}`}
        >
            <i className={`${icon} fa-xl ${color}`}></i>
        </button>
    )
}
