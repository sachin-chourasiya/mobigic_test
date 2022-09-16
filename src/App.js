import React  from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Login from './component/Login/Login';
import Signin from "./component/Signin/Signin";
import User from './component/User/User';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/Signin" element={<Signin/>} />
        <Route exact path="/User" element={<User/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
