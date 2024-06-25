// context/UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserProvider(props) {

    const initialUserState = {
        emailPhone: '',
        name: '',
        username: '',
        password: '',
        dob: {
            month: '',
            day: '',
            year: ''
        }
    };
   
    const [user, setUser] = useState(initialUserState);

    const resetUser = ()=>{
        setUser(initialUserState);
    }

    return (
        <UserContext.Provider value={{user, setUser , resetUser}}>
            {props.children}
        </UserContext.Provider>
    );
}
