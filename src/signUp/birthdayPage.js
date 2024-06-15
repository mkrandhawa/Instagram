import React from "react";
import Footer from "../login/footer";
import Phones from '../login/phones';
import BirthdayCard from "./birthdayCard";

export default function BirthdayPage (){
    return(
        <>  
        <div className="container birthdayContainer">
            <Phones />
            <BirthdayCard />
        </div>
            <Footer />
        
        </>
    )
}