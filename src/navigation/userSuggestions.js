import React, { useEffect, useState } from "react";

export default function UserSuggestions(){

    const [users, setUsers] = useState([{}]);

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
                console.log('this is users', data.data.users);
            }
        })
        .catch(error => console.error('Error:', error));
    }, [setUsers])
    


    return(
        <>
            {users.map((el, index) => <p key={index}>
                {el.name}
            </p>)}
        </>

    )
}