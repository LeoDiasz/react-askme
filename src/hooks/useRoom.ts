import { useEffect, useState} from "react";
import { useAuth } from "./useAuth";

import {database} from "../services/firebase";
import {ref, onValue} from "firebase/database";

type GetQuestionProps = Record<string, {
  id: string;
  question: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  },
  likes: Record<string, {
    userId: string;
  }>,
  answers: Record<string, {
    answer: string;
  }>
}>;

type Question = {
  id: string;
  question: string;
  user: {
    id: string;
    name: string;
    avatar: string
  },
  likesCount: number;
  likeId: string | undefined;
  answersCount: number;
};

type RoomProps = {
  id: string;
  title: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  },
  questions: [] | null; 
};

export function useRoom(roomId: string) {
  const {user}  = useAuth();
  const [titleRoom, setTitleRoom] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [room, setRoom] = useState<RoomProps>();

  useEffect(() => {
    const roomRef = ref(database, `rooms/${roomId}`);

    const unsubscribe = onValue(roomRef, async room => {
      if(!room.exists()) {
        return
      }

      const dataRoom = await room.val();

      const listQuestions: GetQuestionProps = await dataRoom?.questions ?? {};

      const listQuestionsChanged = Object.entries(listQuestions).map( ([key, value]) => (
          {
            id: key,
            question: value.question,
            user: {
              id: value.user.id,
              name: value.user.name,
              avatar: value.user.avatar,
            },
            likesCount: Object.values(value.likes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(([key, value]) => value.userId === user?.id)?.[0],
            answersCount: Object.values(value.answers ?? {}).length
          }
      ));

      setQuestions(listQuestionsChanged);
      setTitleRoom(dataRoom.title);
      setRoom(dataRoom);
    })
    
    return () => {
      unsubscribe()
    }
  }, [roomId, user]);

  return {titleRoom, questions, room};
}