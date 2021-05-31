import { Container, Row, Col } from 'reactstrap';
import LoginForm from '../components/forms/LoginForm';
import { Google, Facebook, Twitter } from '../icons';

const Login = () => {
  return (
    <Container className="mt-4 mb-5">
      <Row className="align-items-center">
        <Col xs="6">
          <img src="/images/login.png" alt=""/>
        </Col>

        <Col xs="6">
          <h1>Welcome Back :)</h1>
          <p>To keep connected with us please login with your personal information by email address and password</p>
          <LoginForm/>
          <p className="mt-4">Or you can join with</p>
          <ul className="social">
            <li><a href="/"><Google/></a></li>
            <li><a href="/"><Facebook/></a></li>
            <li><a href="/"><Twitter/></a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Login;