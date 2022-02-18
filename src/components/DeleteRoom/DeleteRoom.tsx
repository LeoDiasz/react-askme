import {ButtonDelete} from "./deleteRoom.styles";

import { useAuth } from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {Toaster, toast} from "react-hot-toast";

import {remove, ref, get} from "firebase/database";
import {database} from "../../services/firebase";

type RoomProps = {
  roomId: string;
}

export function DeleteRoom({roomId} : RoomProps) {
  const {user} = useAuth();
  const roomListHref = useNavigate();

  async function removeTheRoom() {
    
    if(!user) {
      return;
    }

    const roomRef = ref(database, `rooms/${roomId}`);

    const dataRoom = await get(roomRef);

    if(!dataRoom.exists()) {
      return;
    }

    const roomUserId = await dataRoom.val().user.id;

    if(user.id !== roomUserId) {
      return
    }
    
    try {
      await remove(roomRef);
      roomListHref("/rooms");
    } catch(err) {
      toast.error("Não foi possivel excluir a sala")
    }
  }

  return (
    <>
      <Toaster/>
      <ButtonDelete onClick={removeTheRoom}>
        Encerrar sala
      </ButtonDelete>
    </>
  )
}