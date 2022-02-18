import {useEffect, useState} from "react";

import { database } from "../services/firebase";
import {ref, onValue} from "firebase/database";

type RoomList = Record<string, {
  title: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  createdAt: string;
  questions: [] | null;
  password: string | null
}>

type Room = {
  id: string;
  nameRoom: string;
  nameUser: string;
  idUser: string;
  avatarUser: string;
  createdAt: string;
  questions: [] | null;
  password: string | null 
}


export function useListRooms() {
  const [listRooms, setListRooms] = useState<Room[] | null>(null);

  useEffect(() => {
    const roomsRef = ref(database, `/rooms`);

    const unsubscribe = onValue(roomsRef, async (rooms) => { 

      if(!rooms.exists()) {
        return;
      }

      const dataRooms : RoomList = await rooms.val();

      const listRooms = Object.entries(dataRooms);
    
      const listRoomsChanged = listRooms.map(([key, value]) => {
        return (
          {
            id: key,
            nameRoom: value.title,
            idUser: value.user.id,
            nameUser: value.user.name,
            avatarUser: value.user.avatar,
            createdAt: value.createdAt,
            questions: value.questions,
            password: value.password
          }
        )
      })

      setListRooms(listRoomsChanged);
      
    })

    return () => {
      unsubscribe();
    }

  }, [])

  return {listRooms};
}