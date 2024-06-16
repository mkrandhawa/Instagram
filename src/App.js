import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from './login/loginPage';
import SignUpPage from "./signUp/signUpPage";
import BirthdayPage from "./signUp/birthdayPage";
import ConirmationPage from "./signUp/confirmationPage";

export default function App(){
    return(
        <>
            <Routes>
                <Route exact path='/accounts/login' element={<LoginPage />} />
                
                <Route exact path='/accounts/signup' element={<SignUpPage />} />

                 <Route exact path='/accounts/signup/birthday' element={<BirthdayPage />} />

                 <Route exact path='/accounts/signup/confirmation' element={<ConirmationPage />} />

                <Route exact path='/' element={<LoginPage />} />

                    
            </Routes>
        
        </>
    )
}