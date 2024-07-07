import React from "react";
import SideBar from '../navigation/sideNavigation';
import StoryBar from "../navigation/storyNavigation";



export default function HomePage(){
    return(
        <main className="homeMain">
            <SideBar />
            <div className="homePage">
                <div>
                    <StoryBar />
                </div>
                <div>
                    <h1>Hello how are you</h1>
                </div>  
            </div>
        </main>
    )
}