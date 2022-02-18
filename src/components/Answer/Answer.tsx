import { ButtonsRoom } from "../ButtonsRoom/ButtonsRoom";
import {SectionQuestion, DivUser, ListQuestion} from "./answer.styles";

type Answer = {
  answer: { 
    id: string;
    answer: string;
    nameUser: string;
    avatarUser: string;
    userId: string;
    questionId: string;
    roomId: string;
    likeId: string | undefined;
    likesCount: number;
  }
};

export function Answer( {answer} : Answer) {
  return (
    <ListQuestion>
      <SectionQuestion>
        <p>{answer.answer}</p>
        <div>
          <DivUser>
            <img src={answer.avatarUser} alt={`User image ${answer.nameUser}`} />
            <span>{answer.nameUser}</span>
          </DivUser>
          <ButtonsRoom roomId={answer.roomId} answerId={answer.id} questionId={answer.questionId} likeId={answer.likeId} likesCount={answer.likesCount} userId={answer.userId}/>
        </div>
      </SectionQuestion>
    </ListQuestion>
  )
};