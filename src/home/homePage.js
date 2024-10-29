import React from "react";
import SideBar from '../navigation/sideNavigation';
import StoryBar from "../navigation/storyNavigation";
import UserSuggestions from "../navigation/userSuggestions";
import UserCard from "./card";

export default function HomePage(){


    return(
        <main className="homeMain">
            <SideBar />
            <div className="homePage">
                <div className="homeContainer">
                    <div className="storyBar"> 
                        <StoryBar />
                    </div>

                    <UserCard />
                </div>
            
                <div className="suggestion">
                    <UserSuggestions />
                </div>

                
            </div>
        </main>
    )
}