import {useState} from "react";

export function useAnswerClick() {
  const [clickAnswer, setClickAnswer] = useState(false);

  function handleClickInAnswer() {  
    clickAnswer === false ? setClickAnswer(true) : setClickAnswer(false);
    
  }

  return {handleClickInAnswer, clickAnswer, setClickAnswer};
}