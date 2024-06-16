import React from "react";
import ConfirmationForm from "./confirmationForm";
import Account from "../login/account";
import GetApp from "../login/getApp";

export default function ConfirmationCard(){
    return(
        <main className="confirmationCard">
            <ConfirmationForm />
            <Account question= 'Have an account?' text="Log in" path='/accounts/login'/>
            <GetApp />

        </main>
    )
}