import {SectionCreateRoomContent, FormCreateRoom, ButtonRoomWithPassword} from "./newRoom.style";
import lockImg from "../../assets/lock.svg";

import {Link, useNavigate} from "react-router-dom"
import {FormEvent, useState} from "react";
import {Toaster, toast} from "react-hot-toast";

import {HomeAndNewRoom} from "../../components/HomeAndNewRoom/HomeAndNewRoom";
import {Button} from "../../components/Button/Button";

import {database} from "../../services/firebase";
import {ref, push} from "firebase/database"

import {useAuth} from "../../hooks/useAuth";
import {useDate} from "../../hooks/useDate";



export function NewRoom() {
  const [titleRoom, setTitleRoom] = useState("");
  const [passwordRoom, setPasswordRoom] = useState("");
  const {user} = useAuth();
  const newRoomHref = useNavigate();
  const [withPassword, setWithPassword] = useState(false)


  async function createRoom(event: FormEvent) {
    event.preventDefault();

    if (titleRoom.trim() === "") {
      toast.error("Necessário um nome de sala valido.");
      return;
    }

    if(!user) {
      toast.error("Necessário esta logado para criar uma sala.");
      return;
    }

    const roomRef = ref(database, `rooms/`);

    if(titleRoom && passwordRoom) {

      if(passwordRoom.trim() === "") {
        toast.error("Necessário uma senha valida.");
        return;
      }

      const dataRoomWithPassword = {
        title: titleRoom,
        createdAt: useDate(),
        user: {
          id: user?.id,
          name: user?.name,
          avatar: user?.avatar,
        },
        password: passwordRoom,
      };

      const dataRoomResponse = await push(roomRef, dataRoomWithPassword)
      newRoomHref(`/room/${dataRoomResponse.key}`);

    } else {
        const dataRoom = {
          title: titleRoom,
          createdAt: useDate(),
          user: {
            id: user?.id,
            name: user?.name,
            avatar: user?.avatar,
          },
        };
    
        const dataRoomResponse = await push(roomRef, dataRoom);

        newRoomHref(`/room/${dataRoomResponse.key}`);
    }
    
  }

  function createRoomWithPassword() {
    
    withPassword === false ? setWithPassword(true) : setWithPassword(false)
  }

  return (
    <HomeAndNewRoom>
      <SectionCreateRoomContent aria-label="Criação de sala">
        <Toaster/>
        <h1>Crie uma nova sala</h1>
        <FormCreateRoom onSubmit={createRoom}>
          <input type="text" placeholder="Nome da sala" required onChange={event => setTitleRoom(event.target.value)} value={titleRoom} maxLength={20}/>
          
          {withPassword && <input type="password" placeholder="Digite a senha" required onChange={event => setPasswordRoom(event.target.value)} value={passwordRoom} maxLength={20}/>}
          <Button>Criar sala</Button>
        </FormCreateRoom>
        
        <ButtonRoomWithPassword onClick={createRoomWithPassword}>
          Cria sala com senha
          <img src={lockImg} alt="icone cadeado" />
        </ButtonRoomWithPassword>

        <p>Quer entrar em uma sala já existente? <Link to="/rooms">Clique aqui.</Link></p>
      </SectionCreateRoomContent>
    </HomeAndNewRoom>
  )
}
