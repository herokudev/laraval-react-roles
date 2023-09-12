import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Notification from "./components/Notification";
import Home from "./components/Home";
import Profile from "./components/Profile/Profile";
import Bitacoras from "./components/Bitacoras/Bitacoras";
import Roles from "./components/Roles/Roles";
import RolesNew from "./components/Roles/RolesNew";
import Usuarios from "./components/Usuarios/Usuarios";
import UsuariosNew from "./components/Usuarios/UsuariosNew";
import Enlaces from "./components/Enlaces/Enlaces";
import EnlacesNew from "./components/Enlaces/EnlacesNew";

function App() {

  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/nouser"
                element={<Notification message="No valid Login" />}
              />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              
              <Route path="/roles" element={<Roles />} />
              <Route path="/roles/create" element={<RolesNew />} />
              
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/usuarios/create" element={<UsuariosNew />} />

              <Route path="/enlaces" element={<Enlaces />} />              
              <Route path="/enlaces/create" element={<EnlacesNew />} />              

              <Route path="/bitacoras" element={<Bitacoras />} />
              
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
