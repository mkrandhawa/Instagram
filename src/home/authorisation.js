import React, { useEffect, useState, useContext} from 'react';
import HomePage from './homePage';
import { UserContext } from '../context/userContext';
import LoginPage from '../login/loginPage';


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
        <>
            {isLogged ? (
                <HomePage />
            ) : (
                <LoginPage />
            )}
        </>
    )



}

