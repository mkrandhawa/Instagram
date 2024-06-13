import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from './login/loginPage';
import SignUpPage from "./signUp/signUpPage";


export default function App(){
    return(
        <>
            <Routes>
                <Route exact path='/accounts/login' element={<LoginPage />} />
                
                <Route exact path='/accounts/signup' element={<SignUpPage />} />

                <Route exact path='/' element={<h1>Hello</h1>} />

                    
            </Routes>
        
        </>
    )
}