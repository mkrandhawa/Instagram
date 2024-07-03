import React, { useEffect, useState} from 'react';
import SideBar from '../navigation/sideNavigation';

export default function CheckAuthorization (){

    const[isLogged, setIsLogged] = useState(false);

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
            } else {
                setIsLogged(false);
            }
        })
        .catch(error => console.error('Error:', error));
    }, [setIsLogged]);
    

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

