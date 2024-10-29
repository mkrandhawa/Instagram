import React, {useContext} from "react";
import { UserContext } from "../context/userContext";

export default function UserCard(){
    const {user} = useContext(UserContext);
    return(
        <>
            <div className="userDetails userCard">
                <div className="userHeader">
                    <div className="profilePicture mainPicture">
                        <img src={`http://localhost:4000/${user.picture}`} alt="Profile" />
                    </div>
                    <div className="user_name">
                        <span>{user.username}</span>
                    </div>

                    <div className="threeDots">
                        <span>...</span>
                    </div>
                </div>
               

                <div className="mainContent">
                    
                </div>


                    
            </div>
        </>
    )
}