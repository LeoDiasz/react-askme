import {DivContent, MainContent, HeaderContent} from "./homeAndRoom.styles";
import background from "../../assets/background.png";
import { LogoSite } from "../LogoSite/LogoSite";;

import {ReactNode} from "react";

type HomeAndNewRoomChildren = {
  children?: ReactNode;
}

export function HomeAndNewRoom({children}: HomeAndNewRoomChildren) {
  return (
    <DivContent>
      <HeaderContent >
          <div>
              <h1>Tire suas principais dúvidas</h1>
              <p>Compartilhe e tire suas principais dúvidas com nossa comunidade</p>
          </div>
          <img src={background} alt="background site"/>
      </HeaderContent>
      <MainContent>
        <article aria-label="Criação e login de sala">
          <div>
              <LogoSite isBig/>
          </div>
          {children}
         </article>
      </MainContent>
    </DivContent>
  )
}