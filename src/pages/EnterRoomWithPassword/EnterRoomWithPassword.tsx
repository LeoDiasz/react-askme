import signImg from "../../assets/sign.svg";
import {FormEnterInRoom, SectionContent} from "./enterRoomWithPassword.styles";

import {HomeAndNewRoom} from "../../components/HomeAndNewRoom/HomeAndNewRoom";
import {Button} from "../../components/Button/Button";

import {FormEvent, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {Toaster, toast} from "react-hot-toast";
import {useRoom} from "../../hooks/useRoom";

import {database} from "../../services/firebase";
import {ref, get} from "firebase/database";


type RoomParamsId = {
  id: string;
}

export function EnterRoomWithPassword() {
  const [password, setPassword] = useState("");
  const {id : roomId} = useParams<RoomParamsId>();
  const {titleRoom} = useRoom(roomId as string);
  const enterRoomHref = useNavigate();
  

  
  async function enterWithPassword(event: FormEvent) {
    event.preventDefault();
    
    const roomRef = ref(database, `rooms/${roomId}`);

    const dataRoom = await get(roomRef);

    const roomValue = await dataRoom.val();


    if(roomValue?.password != password ) {
      toast.error("Senha invalida");

      setPassword("");
      return;
    }
    
    enterRoomHref(`/room/${roomRef.key}`);
  
  }

  return (
    <HomeAndNewRoom>
      <SectionContent>
        <FormEnterInRoom onSubmit={enterWithPassword}>
            <Toaster/>
            {titleRoom && <h1>sala {titleRoom}</h1>}
            <input type="password" placeholder="Digite a senha da sala" required onChange={(event => setPassword(event.target.value))} value={password} maxLength={25}/>
            <Button>
              <img src={signImg} alt="entrar imagem" />
              Entrar na sala
            </Button>
          </FormEnterInRoom>
          <Link to="/">voltar</Link>
      </SectionContent>
    </HomeAndNewRoom>
  )
}