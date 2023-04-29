import Spinner from 'react-bootstrap/Spinner';
import Container from "react-bootstrap/Container";

export function Loader() {
  return (
    <Container className="app-loader">
      <Spinner  variant="primary" animation="border"/>
    </Container>
  )
}
