import {SectionQuestion, DivUser, ListQuestion, SectionAnswer} from "./question.styles";

import {AnswerInput} from "../AnswerInput/AnswerInput";
import {Answer} from "../Answer/Answer";
import {ButtonsRoom} from "../ButtonsRoom/ButtonsRoom";

import {useListAnswers} from "../../hooks/useListAnswers";
import {useAnswerClick} from "../../hooks/useAnswerClick";


type QuestionProps = {
    questionProps: {
      roomId: string;
      id: string;
      question: string;
      user: {
        id: string;
        name: string;
        avatar: string;
      };
      likeId: string | undefined;
      likesCount: number;
      answersCount: number;
    }
};


export function Question({questionProps}: QuestionProps) {
  const {clickAnswer, handleClickInAnswer} = useAnswerClick()
  const {answers} = useListAnswers(questionProps.roomId, questionProps.id);
  
  return (
    <ListQuestion>
      <SectionQuestion>
        <p>{questionProps.question}</p>
        <div>
          <DivUser>
            <img src={questionProps.user.avatar} alt={`User image ${name}`} />
            <span>{questionProps.user.name}</span>
          </DivUser>
          <ButtonsRoom handleClickInAnswer={handleClickInAnswer} roomId={questionProps.roomId} questionId={questionProps.id} clickAnswer={clickAnswer} likesCount={questionProps.likesCount} likeId={questionProps.likeId} answersCount={questionProps.answersCount} userId={questionProps.user.id}/>
        </div>
      </SectionQuestion>
      {clickAnswer ? <SectionAnswer>

        <AnswerInput roomId={questionProps.roomId} questionId={questionProps.id}/>
        {answers?.map(answer => (
          <Answer key={answer.id} answer={{...answer, roomId: questionProps.roomId, questionId: questionProps.id}}/>
        ))}
        
      </SectionAnswer> : ""}
    </ListQuestion>
  )
};