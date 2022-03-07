import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";

export const Menu = () => {

    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" className="fixed-top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} width="150" alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-lg-auto text-center">
                        <Nav.Link href="#home">Sobre mí</Nav.Link>
                        <Nav.Link href="#skills">Habilidades</Nav.Link>
                        <Nav.Link href="#hobbies">Pasatiempos</Nav.Link>
                        <Nav.Link href="#education">Formación</Nav.Link>
                        <Nav.Link href="#projects">Proyectos</Nav.Link>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
