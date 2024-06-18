// context/UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserProvider(props) {
    // const [dob, setDob] = useState({
    //     month: '',
    //     day: '',
    //     year: ''
    // });

   
    const [user, setUser] = useState({
        emailPhone: '',
        name: '',
        username: '',
        password: '',
        dob: {
            month: '',
            day: '',
            year: ''
            }
        
    });

    return (
        <UserContext.Provider value={{user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
}
