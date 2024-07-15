import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import User from "./user";

export default function UserSuggestions(){

    const{user}= useContext(UserContext);

    const [users, setUsers] = useState([{}]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('http://localhost:4000/api/v1/users/all-users', {
            credentials: 'include',
        })
        .then(response=>response.json())
        .then(data => {
            console.log('i am data from usersuggestion', data);
            console.log(data.users)
            if (data.status === 'success'){
                setUsers(data.data.users);
                setLoading(false);
                console.log('this is users', data.data.users);
            }
        })
        .catch(error => console.error('Error:', error));
    }, [setUsers])
    


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
                    <span>{user.name}</span>
                </div>
            </div>
            <div className="switchText">
                <span>Switch</span>
            </div>
        </div>
        <div className="suggestionContainer">
            <div className="suggestionText">
                <span>Suggested for you</span>
            </div>
            <div className="seeAll">
                <span>See All</span>
            </div>
        </div>
        {loading ? (
                <p>Loading...</p>
            ) : (
                users.map((el, index) => (
                    <User key={index} user={el}/>

                ))
            )}
            
        </>

    )
}