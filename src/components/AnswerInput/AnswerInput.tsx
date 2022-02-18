import {Button} from "../../components/Button/Button";
import {FormAnswer} from "./answerInput.styles";

import {useState, FormEvent} from "react";
import {useAuth} from "../../hooks/useAuth";
import {Toaster, toast} from "react-hot-toast";

import {database} from "../../services/firebase";
import {ref, push} from "firebase/database";

type QuestionProps = {
  questionId: string;
  roomId: string;
};

export function AnswerInput({questionId, roomId} : QuestionProps) {
  const {user} = useAuth();
  const [answer, setAnswer] = useState("");

  async function createAnswer(event: FormEvent){
    event.preventDefault();

    if(answer.trim() === "") {
      toast.error("Necessário uma resposta valida.");
      return;
    }
    
    if(!user) {
      toast.error("Necessário estar logado");
      return;
    }

    const questionRef = ref(database, `rooms/${roomId}/questions/${questionId}/answers`);

    const dataAnswer = {
      answer: answer,
        user: {
          id: user?.id,
          name: user?.name,
          avatar: user?.avatar,
        }
    }

    try {
        await push(questionRef, dataAnswer)
    } catch(err) {
      toast.error("Não foi possivel criar a resposta.");
    } finally {
      setAnswer("");
    }

  };

  return (
    <>
      <Toaster/>
      <FormAnswer onSubmit={createAnswer} >
        <input type="text" placeholder="Digite uma resposta" onChange={event => setAnswer(event.target.value)} value={answer} required maxLength={250}/>

        <Button>Responder</Button>
      </FormAnswer>
    </>
  )

};