import {DivRoomContent, SectionNewQuestion, DivRoomInfoText, FormNewQuestion, DivFormFooter, SectionListQuestions, DivLoginUser, DivHeaderMain, DivUserSignOut} from "./room.style"

import {useAuth} from "../../hooks/useAuth";
import {useNavigate, useParams} from "react-router-dom";
import {FormEvent, useState} from "react";
import {Toaster, toast} from "react-hot-toast";

import {useRoom} from "../../hooks/useRoom";
import {useDate} from "../../hooks/useDate";

import {database} from "../../services/firebase";
import {ref, push} from "firebase/database";

import {Button} from "../../components/Button/Button";
import {CopyRoom} from "../../components/CopyRoom/CopyRoom"
import { Question } from "../../components/Question/Question";
import {LogoSite} from "../../components/LogoSite/LogoSite";
import {DeleteRoom} from "../../components/DeleteRoom/DeleteRoom";


type RoomParamsId = {
  id: string;
}

export function Room() {
  const {user, signInWithGoogle, signOut}  = useAuth();
  const {id : roomId} = useParams<RoomParamsId>() ;

  const [showButtonSignOut, setShowButtonSignOut] = useState(false);
  const [newTextQuestion, setNewTextQuestion] = useState("");
  const {titleRoom, questions, room} = useRoom(roomId as string);

  
  const listRoomsHref = useNavigate();

  async function signUserWithGoogle() {
    try {
      await signInWithGoogle();
    } catch(err) {
      toast.error("Erro ao fazer login.");
    }
  }
  
  function changeButtonSignOut() {
    showButtonSignOut ? setShowButtonSignOut(false) : setShowButtonSignOut(true)
  }
  async function createQuestion(event: FormEvent) {
    event.preventDefault();

    if(newTextQuestion.trim() === "") {
      toast.error("Precisa de uma questão valida.");
      return;
    }

    if(!user) {
      toast.error("Necessário esta logado para cadastrar questão.");
      return;
    }
    
    const questionRef = ref(database, `/rooms/${roomId}/questions`);

    const question = {
      question: newTextQuestion,
      user: user,
      createdAt: useDate(),
    }
    
    try {
      await push(questionRef, question);
    } catch(err) {
      toast.error("Não foi possivel cadastrar a questão.");
    }

    setNewTextQuestion("");

  }

  function redirectInListRooms() {

    listRoomsHref("/rooms")
  }
  

  return (
     <DivRoomContent>
        <Toaster/>
        <header>
          <LogoSite/>
          <div>
            <CopyRoom code={roomId as string}/>
            {user && user.id === room?.user.id && <DeleteRoom roomId={roomId as string}/>}
            {user && <DivUserSignOut>
              <div>
                <img onClick={changeButtonSignOut} src={user?.avatar && user.avatar} alt="Avatar user" />
              </div>
              {showButtonSignOut && <button onClick={signOut}>Sair</button>}
            </DivUserSignOut>}
          </div>
        </header>

        <main>
          <SectionNewQuestion aria-label="Criar nova pergunta">
            <DivHeaderMain>
              <DivRoomInfoText>
                <h1>{titleRoom}</h1>
                <span>{questions && questions.length === 0 ? `Sem perguntas`: questions.length > 1 ? `${questions.length} Perguntas`: `${questions.length} Pergunta` }</span>
              </DivRoomInfoText>
              <div>
                <button onClick={redirectInListRooms}>Ver salas</button>
              </div>
            </DivHeaderMain>

            <FormNewQuestion onSubmit={createQuestion}>
              <textarea placeholder="O que você quer perguntar?" required onChange={event => setNewTextQuestion(event.target.value)} value={newTextQuestion} maxLength={250}/>
              
              {user && <DivFormFooter>
                <div>
                  <img src={user?.avatar} alt="" />
                  <span>{user?.name}</span>
                </div>

                <Button>Enviar pergunta</Button>
              </DivFormFooter>}

            </FormNewQuestion>

            {!user && <DivLoginUser>
              <p>Para enviar uma pergunta, <button onClick={signUserWithGoogle}>faça seu login.</button></p>
            </DivLoginUser>}
          </SectionNewQuestion>
          
          <SectionListQuestions aria-label="Listagem de perguntas e respostas">
              <ul>
                {questions.map(question => (
                  <Question key={question.id} questionProps={{...question, roomId: roomId as string}} />
                ))}
              </ul>
          </SectionListQuestions>
        </main>
     </DivRoomContent>
  )
}