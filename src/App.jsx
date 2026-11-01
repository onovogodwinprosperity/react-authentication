import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { SignUpPage } from "./SigInPage";
import { LogInPage } from "./LogInPage";
import { UserInfoPage } from "./UserInfoPage";
import { PrivateRoute } from "/PrivateRoute";


function App {
  return (
    <div className="page-container">
      <BrowserRouter>
        <Routes>
          <Route path="/log-in" element={<LoginPage/>} />
          <Route path="/sign-up" element={<SignUpPage/>}/>
          <Route element={<PrivateRoute redirectPath="log-in" isAllowed={false}/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
