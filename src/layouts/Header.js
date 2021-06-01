import { Container } from 'reactstrap';

const Header = () => {
  return (
    <Container className="mt-4" fluid>
      <div className="center-between">
        <a href="/" className="logo">
          <img src="/images/logo.png" alt=""/>
        </a>

        <div className="d-flex align-items-center">
          <p>Sara Merely</p>
          <img src="/images/avatar.png" alt="" className="avatar"/>
        </div>
      </div>
    </Container>
  )
}

export default Header;