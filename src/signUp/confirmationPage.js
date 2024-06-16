import React from "react";
import Footer from "../login/footer";
import ConfirmationCard from "./confirmationCard";

export default function SignUpPage (){
    return(
        <>  
        <div className="container confirmationContainer ">
            {/* <Phones /> */}
            <ConfirmationCard />

        </div>
            <Footer />
        
        </>
    )
}