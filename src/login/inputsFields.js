import React from "react";
// import 

export default function Input (props){
    const{className, type, name, placeholder, maxLength, autoCapitalize, autoCorrect, required }= props;

    // let [user, setUser] = useState({})

    // const handleChange = () =>{

    // }

    return (
        <input
            className={className}
            type={type}
            name={name}
            placeholder={placeholder}
            maxLength={maxLength}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            required={required}
            // onChange={handleChange}
            />
    );
       
}