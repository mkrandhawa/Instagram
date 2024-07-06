import React, { useEffect, useState, useContext} from 'react';
import SideBar from '../navigation/sideNavigation';
import { UserContext } from '../context/userContext';


export default function CheckAuthorization (){

    const[isLogged, setIsLogged] = useState(false);
    const { setUser } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/api/v1/users/home', {
            credentials: 'include',
        })
        .then(response => response.json())
        .then(data => {
            console.log('i am data', data);
            console.log('i am data status', data.status);

            if (data.status === 'success') {
                setIsLogged(true);
                setUser(data.data.freshUser);

            } else {
                setIsLogged(false);
            }
        })
        .catch(error => console.error('Error:', error));
    }, [setUser, setIsLogged]);
    

    return(
        <div>
            {isLogged ? (
                <SideBar />
            ) : (
                <h1>Sei brutto</h1>
            )}
        </div>
    )



}

