import { useState } from 'react';
import { Container } from 'reactstrap';
import ReactPlayer from 'react-player/vimeo'
import Question from "../components/cards/Question"
import { Backward, Forward, History } from '../icons';

const data = [
  {
    url: "https://vimeo.com/41567201",
    question:"Who was the first Astronaut who to Space?",
    answers:["one", "two", "three", "four"],
    rightAnswer:3
  }
]

const Lesson = () => {
  const [ videoEnded, setVideoEnded ] = useState(true);
  const [ replay, setReply ] = useState(0)

  const videoEndedHandler = () => {
    setVideoEnded(true)
  }

  const videoReplayHanlder = () => {
    setVideoEnded(false)
    setReply(replay+1)
  }

  return data.length > 0 
  ? data.slice(0,1).map((item, i)=> {
    return (
      <>
        <ReactPlayer 
        key={i}
          url={`${item.url}?${replay}`} 
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
                  question={item.question}
                  answers={item.answers}
                  rightAnswer={item.rightAnswer}
                />
                <div className="question-helper-btn forward-btn"><Forward/></div>
              </div>
            </Container>
          </div>
        }
      </>
    )
  })
  : "No questions found!"
}

export default Lesson;