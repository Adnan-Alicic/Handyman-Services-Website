import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/Signup";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {/*<Route path="/" element={<Layout />}>*/}
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            {/*</Route>*/}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
