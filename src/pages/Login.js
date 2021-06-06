import { Container, Row, Col } from 'reactstrap';
import LoginForm from '../components/forms/LoginForm';
import { Google, Facebook, Twitter } from '../icons';

const Login = () => {
  return (
    <Container className="mt-4 window-height" fluid>
      <div className="d-flex align-items-center flex-column flex-lg-row">
        <img src="/images/login.jpg" alt="" className="login-image"/>

        <div className="p-4" style={{
          background: "#ededed"
        }}>
          <h1 className="mt-4 mt-md-0">Welcome Back :)</h1>
          <p>To keep connected with us please login with your personal information by email address and password</p>
          <LoginForm/>
          <p className="mt-4">Or you can join with</p>
          <ul className="social">
            <li><a href="/"><Google/></a></li>
            <li><a href="/"><Facebook/></a></li>
            <li><a href="/"><Twitter/></a></li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Login;