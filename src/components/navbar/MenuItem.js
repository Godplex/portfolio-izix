import { Nav } from "react-bootstrap";

export const MenuItem = ({ id, name }) => {
    return (
        <Nav.Link href={`#${id}`} data-to-scrollspy-id={id}>{name}</Nav.Link>
    )
}
