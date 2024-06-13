import React from "react";
import Footer from "../login/footer";
import SignUpCard from "./signupCard";

export default function SignUpPage (){
    return(
        <>  
        <div className="container signupContainer">
            <SignUpCard />

        </div>
            <Footer />
        
        </>
    )
}