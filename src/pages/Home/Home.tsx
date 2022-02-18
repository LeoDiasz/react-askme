import logoGoogle from "../../assets/google-icon.png";
import signImg from "../../assets/sign.svg";
import {SectionHomeContent, ButtonGoogle, DivSeparator, FormEnterInRoom} from "./home.styles";

import {Link, useNavigate} from "react-router-dom";
import {useState, FormEvent} from "react";
import {useAuth} from "../../hooks/useAuth";
import {Toaster, toast} from "react-hot-toast";

import {HomeAndNewRoom} from "../../components/HomeAndNewRoom/HomeAndNewRoom";
import {Button} from "../../components/Button/Button";

import {database} from "../../services/firebase";
import {ref, get} from "firebase/database";


export function Home() {
  const {user, signInWithGoogle} = useAuth();
  const [codeRoomInput, setCodeRoomInput] = useState("");
  
  const newRoomHref = useNavigate();
  const enterRoomHref = useNavigate();



  async function signInRoom() {
    if(!user) {
      try {
        await signInWithGoogle();
        
      } catch(err) {
        toast.error("Erro ao realizar login.", {duration: 3000,})
        return
      }
    }
   
    newRoomHref("/room/new")
   

  }

  async function enterInTheRoom(event: FormEvent) {
    event.preventDefault();
    
    const roomRef = ref(database, `rooms/${codeRoomInput}`);

    const dataRoom = await get(roomRef);

    if(!dataRoom.exists()) {
      toast.error("Essa sala não existe");
      return;
    }

    const roomValue = await dataRoom.val()

    if(roomValue.password) {
      enterRoomHref(`/room/enter/${roomRef.key}`)
      return
    }
    
    enterRoomHref(`/room/${roomRef.key}`);
  
  }

  return (
    <HomeAndNewRoom>
      <SectionHomeContent aria-label="Logar com google e entrar em sala">
        <Toaster />
        <ButtonGoogle onClick={signInRoom}>
          <img src={logoGoogle} alt="Logo Google" />
          Crie sua sala com o Google
        </ButtonGoogle>

        <DivSeparator className="separator"> Ou entre em uma sala</DivSeparator>
  
        <FormEnterInRoom onSubmit={enterInTheRoom}>
          <input type="text" placeholder="Digite o código da sala" required onChange={(event => setCodeRoomInput(event.target.value))} value={codeRoomInput} maxLength={25}/>

          <Button>
            <img src={signImg} alt="entrar imagem" />
            Entrar na sala
          </Button>
        </FormEnterInRoom>

        <Link to="/rooms">Ver salas existentes</Link>
      </SectionHomeContent>
    </HomeAndNewRoom>    
  )
}