import { Container, Col } from 'reactstrap';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Banner from '../layouts/Banner';
import Course from '../components/cards/Course';

const HomePage = () => {
  return (
    <>
      <Banner/>
      <Container className="mt-4" fluid>
        <div style={{margin: "0 -15px"}}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{1:1, 319: 2, 767: 3, 1023: 4, 1199: 5}}
          >
            <Masonry>
              <Col>
                <Course
                  image="/images/courses/1.png"
                  title="Kamla"
                  desc="16 Kelas"
                  url="/"
                  style={{height: 120}}
                />
              </Col>

              <Col>
                <Course
                  image="/images/courses/3.png"
                  title="Amla"
                  desc="96 Kelas"
                  url="/"
                  style={{height: 180}}
                />
              </Col>

              <Col>
                <Course
                  image="/images/courses/1.png"
                  title="Kamla"
                  desc="16 Kelas"
                  url="/"
                  style={{height: 120}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/2.png"
                  title="Kamla 1"
                  desc="166 Kelas"
                  url="/"
                  style={{height: 160}}
                />
              </Col>

              <Col>
                <Course
                  image="/images/courses/3.png"
                  title="Amla"
                  desc="96 Kelas"
                  url="/"
                  style={{height: 180}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/1.png"
                  title="Kamla"
                  desc="16 Kelas"
                  url="/"
                  style={{height: 120}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/2.png"
                  title="Kamla 1"
                  desc="166 Kelas"
                  url="/"
                  style={{height: 160}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/2.png"
                  title="Kamla 1"
                  desc="166 Kelas"
                  url="/"
                  style={{height: 160}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/2.png"
                  title="Kamla 1"
                  desc="166 Kelas"
                  url="/"
                  style={{height: 160}}
                />
              </Col>

              <Col>
                <Course
                  image="/images/courses/3.png"
                  title="Amla"
                  desc="96 Kelas"
                  url="/"
                  style={{height: 180}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/1.png"
                  title="Kamla"
                  desc="16 Kelas"
                  url="/"
                  style={{height: 120}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/2.png"
                  title="Kamla 1"
                  desc="166 Kelas"
                  url="/"
                  style={{height: 160}}
                />
              </Col>

              <Col>
                <Course
                  image="/images/courses/3.png"
                  title="Amla"
                  desc="96 Kelas"
                  url="/"
                  style={{height: 180}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/1.png"
                  title="Kamla"
                  desc="16 Kelas"
                  url="/"
                  style={{height: 120}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/2.png"
                  title="Kamla 1"
                  desc="166 Kelas"
                  url="/"
                  style={{height: 160}}
                />
              </Col>

              <Col>
                <Course
                  image="/images/courses/3.png"
                  title="Amla"
                  desc="96 Kelas"
                  url="/"
                  style={{height: 180}}
                />
              </Col>

              <Col>
                <Course
                  image="/images/courses/3.png"
                  title="Amla"
                  desc="96 Kelas"
                  url="/"
                  style={{height: 180}}
                />
              </Col>

              <Col>
                <Course
                  image="/images/courses/3.png"
                  title="Amla"
                  desc="96 Kelas"
                  url="/"
                  style={{height: 180}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/1.png"
                  title="Kamla"
                  desc="16 Kelas"
                  url="/"
                  style={{height: 120}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/2.png"
                  title="Kamla 1"
                  desc="166 Kelas"
                  url="/"
                  style={{height: 160}}
                />
              </Col>

              <Col>
                <Course
                  image="/images/courses/3.png"
                  title="Amla"
                  desc="96 Kelas"
                  url="/"
                  style={{height: 180}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/1.png"
                  title="Kamla"
                  desc="16 Kelas"
                  url="/"
                  style={{height: 120}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/2.png"
                  title="Kamla 1"
                  desc="166 Kelas"
                  url="/"
                  style={{height: 160}}
                />
              </Col>

              <Col>
                <Course
                  image="/images/courses/3.png"
                  title="Amla"
                  desc="96 Kelas"
                  url="/"
                  style={{height: 180}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/1.png"
                  title="Kamla"
                  desc="16 Kelas"
                  url="/"
                  style={{height: 120}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/2.png"
                  title="Kamla 1"
                  desc="166 Kelas"
                  url="/"
                  style={{height: 160}}
                />
              </Col>

              <Col>
                <Course
                  image="/images/courses/3.png"
                  title="Amla"
                  desc="96 Kelas"
                  url="/"
                  style={{height: 180}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/1.png"
                  title="Kamla"
                  desc="16 Kelas"
                  url="/"
                  style={{height: 120}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/1.png"
                  title="Kamla"
                  desc="16 Kelas"
                  url="/"
                  style={{height: 120}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/2.png"
                  title="Kamla 1"
                  desc="166 Kelas"
                  url="/"
                  style={{height: 160}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/1.png"
                  title="Kamla"
                  desc="16 Kelas"
                  url="/"
                  style={{height: 120}}
                />
              </Col>
              
              <Col>
                <Course
                  image="/images/courses/2.png"
                  title="Kamla 1"
                  desc="166 Kelas"
                  url="/"
                  style={{height: 160}}
                />
              </Col>

              <Col>
                <Course
                  image="/images/courses/3.png"
                  title="Amla"
                  desc="96 Kelas"
                  url="/"
                  style={{height: 180}}
                />
              </Col>
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Container>
    </>
  )
};

export default HomePage;
