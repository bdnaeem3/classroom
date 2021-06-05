import { Container, Row, Col } from 'reactstrap';
import LoginForm from '../components/forms/LoginForm';
import { Google, Facebook, Twitter } from '../icons';

const Login = () => {
  return (
    <Container className="mt-4 mb-5" fluid>
      <Row className="align-items-center">
        <Col xs="12" md="7">
          <img src="/images/login.png" alt="" className="w-100"/>
        </Col>

        <Col xs="12" md="5">
          <h1 className="mt-4 mt-md-0">Welcome Back :)</h1>
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