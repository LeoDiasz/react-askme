import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {AuthProvider} from "./contexts/authContext";
import { GlobalStyle } from "./styles/global";

import {Home} from "./pages/Home/Home";
import {NewRoom} from "./pages/NewRoom/NewRoom";
import {Room} from "./pages/Room/Room";
import { RoomExists } from "./pages/RoomExists/RoomExists";
import { EnterRoomWithPassword } from "./pages/EnterRoomWithPassword/EnterRoomWithPassword";

export function App() {

  return (
      <>
        <GlobalStyle/>
        <Router>
          <AuthProvider>
            <Routes>   
                <Route path="/" element={<Home/>}/>
                <Route path="/room/new" element={<NewRoom/>}/>
                <Route path="/room/:id" element={<Room/>} />
                <Route path="/rooms" element={<RoomExists/>}/>
                <Route path={"room/enter/:id"} element={<EnterRoomWithPassword/>}/>
            </Routes>
          </AuthProvider>
        </Router>
      </>    
  )
}

