import React  from "react";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import { Routes,Route } from "react-router-dom";
import ShowData from "./pages/ShowData";

function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/ShowData" element={<ShowData/>}/>


    </Routes>
  );
}

export default App;
