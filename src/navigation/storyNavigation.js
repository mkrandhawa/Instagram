import React, { useState, useEffect } from "react";
// import { UserContext } from '../context/userContext';

export default function StoryBar(){
    // const {user} = useContext(UserContext);

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
       
        {loading? (
            <p>Loading ... </p>
        ):(
            <div className="user storyUser">
                {users.map((el, index) => (
                    <div className="stories" key={index}>
                        <div className="profilePicture mainPicture">
                            <img src={`http://localhost:4000/${el.picture}`} alt="Profile" />
                        </div>
                        <div className="userName">
                            <div className="profile profileUser storyUsername ">
                                <span>{el.username}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        )}
       
        </>
    )
}