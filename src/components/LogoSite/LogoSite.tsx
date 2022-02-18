import logoImg from "../../assets/logo.png";
import {Logo, Button} from "./logoSite.styles";

import {useNavigate} from "react-router-dom";


type LogoProps = {
  isBig?:  boolean;
};

export function LogoSite({isBig = false}  : LogoProps) {
  const homeHref = useNavigate()

  return (
    <Button  onClick={() => homeHref("/")}>
      <Logo isBig={isBig} src={logoImg} alt="Logo site" />
    </Button>
  )
};