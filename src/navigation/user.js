import React from 'react';

export default function User({user}){
    

    return(
        <>
            <div className="user">
                <div className="profilePicture mainPicture"> 
                    <img src={`http://localhost:4000/${user.picture}`} alt="Profile" />
                </div>
                <div className="userDetails">
                    <div className="profile profileUser">
                        <span>{user.username}</span>
                    </div>
                    <div className="profile profileName">
                        <span>Suggested for you</span>
                    </div>
                    
                </div>
                <div className="switchText">
                    <span>Follow</span>
                </div>
            </div>
           
        </>
    )

}