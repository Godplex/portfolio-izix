
export const ProjectsButtonItem = ({ items, activeIndex, show }) => {
    const { id, name } = items;

    const className = (activeIndex === id) ? 'btn btn-danger rounded' : 'btn btn-outline-danger rounded';

    return (
        <li className="select-cat list-inline-item p-2">
            <button onClick={() => { show(id) }} className={className}>
                {name}
            </button>
        </li>
    )
}
