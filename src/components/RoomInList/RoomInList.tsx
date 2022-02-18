import lockImg from "../../assets/lock.svg";
import unLockImg from "../../assets/unlock.svg";

import {DivUser, DivRoomInfo, ListRoom, DivRoomPrivate, ButtonContent, FormPassword} from "./roomInList.styles";

import {Toaster, toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {useState, FormEvent} from "react";
import {useAuth} from "../../hooks/useAuth";

type RoomProps = {
  room: {
    id: string;
    nameRoom: string;
    nameUser: string;
    avatarUser: string;
    idUser: string;
    createdAt: string;
    questions: [] | null;
    password?: string | null;
  }
};

export function RoomInList({room}: RoomProps) {
  const roomHref = useNavigate();
  const {user} = useAuth()
  const [roomPassword, setRoomPassword] = useState(false);
  const [password, setPassword] = useState("");

  
  async function enterInRoomWithPassword(event: FormEvent) {
    event.preventDefault();
  
    if(password != room.password) {
      toast.error("Senha invalida", {duration: 2000});
      setPassword("");
      setRoomPassword(false);
      return;
    } else {
      roomHref(`/room/${room.id}`);
    }

  };

  async function enterInRoom() {
    if(room.idUser !== user?.id)  {
      if (room.password) {
        setRoomPassword(true);
        return;
      }
    }

    roomHref(`/room/${room.id}`);
  }

  return (
    <ListRoom>
      <Toaster/>
      <ButtonContent disabled={roomPassword} onClick={enterInRoom}>
        <DivUser>
          <img src={room.avatarUser && room.avatarUser  } alt={`user ${room.nameUser}`} />
          <div>
            <p>{room.nameRoom}</p>
            <span>{room.nameUser}</span>
          </div>
        </DivUser>

        <DivRoomInfo>
          <p>Perguntas: {room.questions ? Object.entries(room.questions as []).length : "0"}</p>
          <p>Data criada: {room.createdAt}</p>
        </DivRoomInfo>

        <DivRoomPrivate>
          {roomPassword && 
            <FormPassword onSubmit={enterInRoomWithPassword}>
              <input type="password" placeholder="Digite a senha" onChange={event => setPassword(event.target.value)} value={password} maxLength={20}/>
            </FormPassword>
          }

          {room.password ? <img src={lockImg} alt=" Lock Logo" />  : <img src={unLockImg} alt="Unlock logo" />} 
        </DivRoomPrivate>
      </ButtonContent>
    </ListRoom>
    
  )

}