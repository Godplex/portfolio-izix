import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { MenuItem } from "./MenuItem";

export const Menu = () => {

    const menuItems = [
        {
            id: 'home',
            name: 'Inicio',
        },
        {
            id: 'about',
            name: 'Sobre mí',
        },
        {
            id: 'skills',
            name: 'Habilidades',
        },
        {
            id: 'hobbies',
            name: 'Pasatiempos',
        },
        {
            id: 'education',
            name: 'Formación',
        },
        {
            id: 'projects',
            name: 'Proyectos',
        },
        {
            id: 'contact',
            name: 'Contacto',
        },
    ];

    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" className="fixed-top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} width="150" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-lg-auto text-center">
                        {
                            menuItems.map(item => (
                                <MenuItem
                                    key={item.id}
                                    {...item}
                                />
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
