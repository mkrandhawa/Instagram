import React from "react";
import Footer from "../login/footer";
import ConfirmationCard from "./confirmationCard";

export default function ConfirmationPage (){
    return(
        <>  
        <div className="container confirmationContainer ">
            <ConfirmationCard />

        </div>
            <Footer />
        
        </>
    )
}