import { useState } from 'react';
import { Container, Button } from 'reactstrap';
import ReactPlayer from 'react-player/vimeo'
import Question from "../components/cards/Question"
import { Backward, Forward, History } from '../icons';

const data = [
  {
    url: "https://vimeo.com/167254041",
    question:"Who was the first Astronaut who to Space?",
    answers:["one", "two", "three", "four"],
    coverImage: '/images/lesson.png',
    rightAnswer:3
  },
  {
    url: "https://vimeo.com/167254040",
    question:"Who was the first engineer?",
    answers:["one", "two", "three", "four"],
    coverImage: '/images/lesson.png',
    rightAnswer:3
  },
  {
    url: "https://vimeo.com/167254038",
    question:"Who was the first scientist?",
    answers:["one", "two", "three", "four"],
    coverImage: '/images/lesson.png',
    rightAnswer:3
  },
  {
    url: "https://vimeo.com/167254037",
    question:"Who was the first doctor?",
    answers:["one", "two", "three", "four"],
    coverImage: '/images/lesson.png',
    rightAnswer:3
  }
]

const Lesson = () => {
  const [ videoEnded, setVideoEnded ] = useState(false);
  const [ replay, setReply ] = useState(0)
  const [ questionNo, setQuestionNo ] = useState(1);
  const item = data[questionNo - 1]

  const videoEndedHandler = () => {
    setVideoEnded(true)
  }

  const videoReplayHanlder = () => {
    setVideoEnded(false)
    setReply(replay+1)
  }

  const backwardHandler = () => {
    setQuestionNo(questionNo + 1)
    setVideoEnded(false)
  }

  const forwardHandler = () => {
    setQuestionNo(questionNo + 1)
    setVideoEnded(false)
  }

  return data.length > 0 
  ? (
    <div>
      <ReactPlayer
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
            <div className="question-helper-btn history-btn cursor-pointer text-white" onClick={videoReplayHanlder}><History/></div>
            
            <div className="question-wrapper" style={{minHeight: '100vh'}}>
              <Button color="link" className="question-helper-btn backward-btn text-white" onClick={backwardHandler} disabled={questionNo === 1}><Backward/></Button>
              <Question
                question={item.question}
                answers={item.answers}
                rightAnswer={item.rightAnswer}
              />
              <Button color="link" className="question-helper-btn forward-btn text-white" onClick={forwardHandler} disabled={questionNo === data.length}>
                <Forward/>
              </Button>
            </div>
          </Container>
          {
            item.coverImage ? <img src={item.coverImage} alt="" className="video-cover"/> : ""
          }
        </div>
      }
    </div>
  )
  : "No questions found!"
}

export default Lesson;