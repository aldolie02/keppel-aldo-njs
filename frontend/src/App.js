import {BrowserRouter, Routes, Route} from "react-router-dom"

import ListCandidates from "./component/panel/ListCandidates.jsx";
import ListTeams from "./component/panel/ListTeams.jsx";

import Register from "./component/Register.jsx";
import RegisterSuccess from "./component/RegisterSuccess.jsx";

import Login from "./component/Login.jsx";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/panel/candidates" element={<ListCandidates/>}></Route>
        <Route path="/panel/teams" element={<ListTeams/>}></Route>

        <Route path="/register" element={<Register/>}></Route>
        <Route path="/register-success" element={<RegisterSuccess/>}></Route>

        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
