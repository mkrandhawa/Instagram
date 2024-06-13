import React from "react";
import SignupForm from "./signupForm";
import Account from "../login/account";
import GetApp from "../login/getApp";

export default function SignUpCard(){
    return(
        <main className="loginCard signUpCard">
            <SignupForm />
            <Account question= 'Have an account?' text="Log in" path='/accounts/login'/>
            <GetApp />

        </main>
    )
}