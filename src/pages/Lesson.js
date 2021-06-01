import { useState } from 'react';
import { Container } from 'reactstrap';
import ReactPlayer from 'react-player/youtube'
import Question from "../components/cards/Question"
import { Backward, Forward, History } from '../icons';

const Lesson = () => {
  const [ videoEnded, setVideoEnded ] = useState(false);

  const videoEndedHandler = () => {
    setVideoEnded(true)
  }

  return (
    <>
      <ReactPlayer url='https://www.youtube.com/watch?v=pxl0rQ6TeXI&ab_channel=YRFYRFVerified' width="100%" height="100vh" style={{overflow: 'hidden'}} controls onEnded={videoEndedHandler}/>

      {
        videoEnded &&
        <div className="overlay">
          <Container fluid className="position-relative">
            <div className="question-helper-btn history-btn"><History/></div>
            
            <div className="question-wrapper" style={{minHeight: '100vh'}}>
              <div className="question-helper-btn backward-btn"><Backward/></div>
              <Question
                question="Who was the first Astronaut who to Space?"
                answers={["one", "two", "three", "four"]}
                rightAnswer={3}
              />
              <div className="question-helper-btn forward-btn"><Forward/></div>
            </div>
          </Container>
        </div>
      }
    </>
  )
}

export default Lesson;