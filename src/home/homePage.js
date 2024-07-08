import React from "react";
import SideBar from '../navigation/sideNavigation';
import StoryBar from "../navigation/storyNavigation";
import UserSuggestions from "../navigation/userSuggestions";



export default function HomePage(){
    return(
        <main className="homeMain">
            <SideBar />
            <div className="homePage">
                <div className="storyBar"> 
                    <StoryBar />
                </div>
                <div className="card">
                    <h1>Hello how are you</h1>
                </div>  
                <div className="suggestion">
                    <UserSuggestions />
                </div>
            </div>
        </main>
    )
}