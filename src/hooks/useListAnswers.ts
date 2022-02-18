import {useEffect, useState} from "react";
import {useAuth} from "../hooks/useAuth";

import {database} from "../services/firebase";
import {ref, onValue} from "firebase/database";


type AnswerProps = Record<string , {
  answer: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  },
  likes: Record <string, {
    userId: string;
  }>
}>;

type Answer = {
  id: string;
  answer: string;
  nameUser: string;
  userId: string;
  avatarUser: string;
  likesCount: number;
  likeId: string | undefined;
};

export function useListAnswers(roomId: string, questionId: string) {
  const {user} = useAuth();
  const [answers, setAnswers] = useState<Answer[] | null>(null);

  useEffect(() => {
    const questionRef = ref(database, `rooms/${roomId}/questions/${questionId}`);

    const unsubscribe = onValue(questionRef, async question => {
      const dataQuestion = await question.val();
      
      const firebaseAnswer : AnswerProps= await dataQuestion?.answers ?? {} ;
      
      const listAnswers = Object.entries(firebaseAnswer).map(([key, value]) => (
        {
          id: key,
          answer: value.answer,
          nameUser: value.user.name,
          avatarUser: value.user.avatar,
          userId: value.user.id,
          likesCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(([key, value]) => value.userId === user?.id)?.[0],
        }
      ));

      setAnswers(listAnswers);
    })
    
    return () => {
      unsubscribe();
    }

  }, [roomId])

  return {answers}
}