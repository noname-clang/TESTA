import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './index.css'
import NabBarzinha from './NavBar'
import HomePage from './Home'
export default function Routees()  {
    return(
        <BrowserRouter> 
            <Routes>    
                <Route element = {<NabBarzinha/>}  path="/"  exact   />
                <Route element = {<HomePage/>}  path="/HOME"   />
            </Routes>
        </BrowserRouter>
    )
 }
                                                                                                                                                                                                                                       