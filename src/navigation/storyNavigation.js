import React, { useContext } from "react";
import { UserContext } from '../context/userContext';

export default function StoryBar(){
    const {user} = useContext(UserContext);
    return(
        <>
        {user.following ?(
            <span>Helllo</span>
        ):(
            <span>Sono vuoto`</span>
        )
        }
        </>
    )
}