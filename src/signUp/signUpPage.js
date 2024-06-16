import React from "react";
import Footer from "../login/footer";
// import Phones from '../login/phones';

import SignUpCard from "./signupCard";

export default function SignUpPage (){
    return(
        <>  
        <div className="container signupContainer">
            {/* <Phones /> */}
            <SignUpCard />

        </div>
            <Footer />
        
        </>
    )
}