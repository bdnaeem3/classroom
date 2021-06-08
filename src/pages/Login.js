import { Container } from 'reactstrap';
import LoginForm from '../components/forms/LoginForm';
import { Google, Facebook, Twitter } from '../icons';

const Login = () => {
  return (
    <Container fluid>
      <div className="d-flex align-items-center justify-content-end login-page" style={{
        background: `URL('/images/login.jpg')no-repeat top center/cover`
      }}>
        <div className="p-4 login-content">
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