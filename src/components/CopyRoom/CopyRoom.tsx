import copyIcon from "../../assets/copy.svg";
import { ButtonCopy } from "./copyRoom.styles";

type CopyRoomProps = {
  code: string;
}

export function CopyRoom({code}: CopyRoomProps) {

  async function getCopyRoom() {
    await navigator.clipboard.writeText(code);
  }

  return (
    <ButtonCopy onClick={getCopyRoom}>
      <div>
        <img src={copyIcon} alt="" />
      </div>
      <span>{code}</span>
    </ButtonCopy> 
  )
};