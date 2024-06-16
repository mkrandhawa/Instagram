import React from "react";
import BirthdayInfo from "./birthdayForm";
import Account from "../login/account";
import GetApp from "../login/getApp";


export default function BirthdayCard(){
    return(
        <main className="birthdayCard">
            <BirthdayInfo />
            <Account question= 'Have an account?' text="Log in" path='/accounts/login' />
            <GetApp />
            
        </main>
    )
}