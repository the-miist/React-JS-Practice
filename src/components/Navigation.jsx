import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Navigation() {

  const navigate = useNavigate();
  const name="Divyesh";
  const surname= "Pithadiya";

    return(
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={()=>{
            navigate("/");
          }} >ITV shopping center</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link as={Link} to={`/home?name=${name}&surname=${surname}`}>Home</Nav.Link> */}
              <Nav.Link as={Link} to={`/home/${name}/${surname}`}>Home</Nav.Link>
              <Nav.Link onClick={()=>{
                navigate("/products")
              }}>Products</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}