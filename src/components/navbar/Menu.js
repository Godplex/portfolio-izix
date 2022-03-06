import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";

export const Menu = () => {

    return (
        <Navbar collapseOnSelect bg="light" expand="lg" className="fixed-top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} width="150" alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-lg-auto text-center">
                        <Nav.Link href="#home">Sobre mí</Nav.Link>
                        <Nav.Link href="#home">Habilidades</Nav.Link>
                        <Nav.Link href="#home">Pasatiempos</Nav.Link>
                        <Nav.Link href="#home">Formación</Nav.Link>
                        <Nav.Link href="#home">Proyectos</Nav.Link>
                        <Nav.Link href="#home" className="fw-bold">julian1918@hotmail.es</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
