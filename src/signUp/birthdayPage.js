import React from "react";
import Footer from "../login/footer";
import BirthdayCard from "./birthdayCard";

export default function BirthdayPage (){
    return(
        <>  
        <div className="container birthdayContainer">
            <BirthdayCard />
        </div>
            <Footer />
        
        </>
    )
}