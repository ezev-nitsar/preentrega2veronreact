import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">SuperVirtual.com</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/category/1" >Ropa de Hombre</Nav.Link>
                        <Nav.Link href="/category/4">Ropa de Mujer</Nav.Link>
                        <Nav.Link href="/category/2">Joyas</Nav.Link>
                        <Nav.Link href="/category/3">Electrónica</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;