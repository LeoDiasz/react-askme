import {DivContent, SectionListRooms, DivListRoom, DivTextsSection, DivHeaderMain, DivUserSignOut} from "./roomExists.styles";

import {RoomInList} from "../../components/RoomInList/RoomInList";
import {LogoSite} from "../../components/LogoSite/LogoSite";

import {useAuth} from "../../hooks/useAuth";
import {useListRooms} from "../../hooks/useListRooms";
import { useNavigate } from "react-router-dom";
import {Toaster, toast} from "react-hot-toast";

export function RoomExists() { 
  const {user, signOut, signInWithGoogle} = useAuth();
  const {listRooms} = useListRooms();
  const newRoomHref = useNavigate();
  
  async function redirectInNewRoom() {
    if(!user) {
      try {
        await signInWithGoogle()
      } catch(err) {
        toast.error("Necessário se loga para criar sala");
        return
      }
    }
    newRoomHref("/room/new")
  }


  return (
    <DivContent>
      <header>
        <Toaster/>
        <LogoSite/>
        {user &&<DivUserSignOut>
          <div>
            <p>{user?.name}</p>
            <img src={user?.avatar && user.avatar} alt="Avatar user" />
          </div>
          <button onClick={signOut}>Sair</button>
        </DivUserSignOut>}

      </header>

      <main>
        <SectionListRooms aria-label="Listar salas existentes">
          <DivHeaderMain>
            <DivTextsSection>
              <h1>Salas existentes</h1>
              <span>{listRooms && listRooms.length > 1 ? `${listRooms.length} salas` : listRooms?.length == 1 ? `${listRooms.length} sala` : `Sem sala`  }</span>
            </DivTextsSection>
            <div>
              <button onClick={redirectInNewRoom}>Criar sala</button>
            </div>
          </DivHeaderMain>

          <DivListRoom>
            <ul>
              {listRooms && listRooms.map(room => (
                <RoomInList key={room.id} room={room}/>
              ))}
            </ul>
          </DivListRoom>
        </SectionListRooms>
      </main>
    </DivContent>
  )
}