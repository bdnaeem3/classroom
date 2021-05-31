import { Container, Row, Col } from 'reactstrap';

const Banner = () => {
  return (
    <Container className="mt-4">
      <div className="banner">
        <Row className="align-items-center">
          <Col xs="4">
            <div className="banner__content py-4">
              <h1>Select Course</h1>
              <p className="my-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              <a href="/">Get Started {'>'}</a>
            </div>
          </Col>
          <Col xs="8">
            <img src="/images/banner.png" alt="" className="banner-image"/>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Banner;