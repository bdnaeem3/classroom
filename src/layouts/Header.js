import { Container } from 'reactstrap';
import { Bar } from '../icons';

const Header = () => {
  return (
    <Container className="mt-4" fluid>
      <div className="center-between">
        <div className="d-block d-md-none">
          <Bar/>
        </div>

        <a href="/" className="logo">
          <img src="/images/logo.png" alt=""/>
        </a>

        <div className="d-flex align-items-center">
          <p className="d-none d-md-block">Sara Merely</p>
          <img src="/images/avatar.png" alt="" className="avatar"/>
        </div>
      </div>
    </Container>
  )
}

export default Header;