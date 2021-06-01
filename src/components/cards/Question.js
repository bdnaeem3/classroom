import { useState } from 'react';
import { Row, Col, Button } from 'reactstrap';

const Question = props => {
  const { question, answers, rightAnswer } = props;
  const [ markedAnswer, setMarkedAnswer ] = useState('');
  const [ isCorrect, setIsCorrect ] = useState(false)

  const checkAnswerHandler = index => {
    setMarkedAnswer(index);
    if (index === rightAnswer) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div className="question">
      <h1 className="mb-4">{question}</h1>
      <Row>
        {
          answers.map((answer,i)=>{
            return (
              <Col xs="12" sm="6" className="center" key={i}>
                <Button onClick={()=>checkAnswerHandler(i)} color={markedAnswer === i ? isCorrect ? 'success' : 'danger' : 'primary'}>{answer}</Button>
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}

export default Question;