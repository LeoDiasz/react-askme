import {createContext, ReactNode, useState, useEffect} from "react";
import {GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from "firebase/auth";
import {auth} from "../services/firebase";


type authContextChildren = {
  children: ReactNode;
};

type ContextProps  = {
  signInWithGoogle:  () => Promise<void>;
  signOut: () => void;
  user: User | null;
};

type User =  {
  id: string;
  name: string;
  avatar: string;
};

export const AuthContext = createContext({} as ContextProps);

export function AuthProvider({children}: authContextChildren) {
  const [user, setUser] = useState<User | null >(null);

  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser({id: user.uid, name: user.displayName as string, avatar: user.photoURL as string})
      }
      
    })
    
    return () => {
      unsubscribe()
    }

  }, []);


  async function signInWithGoogle() {
    const googleProvider = new GoogleAuthProvider();
 
    const {user: {uid, photoURL , displayName}} = await signInWithPopup(auth, googleProvider);
    
    setUser({id: uid , name: displayName as string, avatar:  photoURL as string});
    
  }

  function signOut() {
    setUser(null)
  }
  
  return (
    <AuthContext.Provider value={{signInWithGoogle, user, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}