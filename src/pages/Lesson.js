import { useState } from 'react';
import { Container } from 'reactstrap';
import ReactPlayer from 'react-player/vimeo'
import Question from "../components/cards/Question"
import { Backward, Forward, History } from '../icons';

const Lesson = () => {
  const [ videoEnded, setVideoEnded ] = useState(false);
  const [ replay, setReply ] = useState(0)

  const videoEndedHandler = () => {
    setVideoEnded(true)
  }

  const videoReplayHanlder = () => {
    setVideoEnded(false)
    setReply(replay+1)
  }

  return (
    <>
      <ReactPlayer 
        url={`https://vimeo.com/41567201?${replay}`} 
        width="100%" 
        height="100vh" 
        style={{overflow: 'hidden'}} 
        onEnded={videoEndedHandler}
        config={{
          vimeo: {
            playerOptions: {
              autoplay: true
            }
          }
        }}
      />

      {
        videoEnded &&
        <div className="overlay">
          <Container fluid className="position-relative">
            <div className="question-helper-btn history-btn cursor-pointer" onClick={videoReplayHanlder}><History/></div>
            
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