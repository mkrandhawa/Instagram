import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './login/loginPage';
import SignUpPage from "./signUp/signUpPage";
import BirthdayPage from "./signUp/birthdayPage";
import ConfirmationPage from "./signUp/confirmationPage";
import UserProvider from "./context/userContext";



export default function App(){
    return(
        <>
        <UserProvider>
        <BrowserRouter>
            <Routes>
                <Route exact path='/accounts/login' element={<LoginPage />} />
                
                <Route exact path='/accounts/signup' element={<SignUpPage />} />

                 <Route exact path='/accounts/signup/birthday' element={<BirthdayPage />} />

                 <Route exact path='/accounts/signup/confirmation' element={<ConfirmationPage />} />

                <Route exact path='/' element={<LoginPage />} />

                    
            </Routes>
        </BrowserRouter>
        </UserProvider>
        
        </>
    )
}