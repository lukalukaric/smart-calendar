import { Badge, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';

const style = {
  padding: '5%',
};

function UnknownPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Container style={style}>
        <h1><Badge>404</Badge></h1>
        <h1>This page does not exist.</h1>
        <p>Is there a typo in the URL?</p>
        <Button variant="link" onClick={() => navigate('/')}>Go back</Button>
      </Container>
    </>
  );
}
export default UnknownPage;
