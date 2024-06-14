import React from "react";



export default function Input (props){
    const{className, type, name, placeholder, maxLength, autoCapitalize, autoCorrect, required, onChange, minLength}= props;

    

    return (
        <>
        <input
            className={className}
            type={type}
            name={name}
            placeholder={placeholder}
            maxLength={maxLength}
            minLength={minLength}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            required={required}
            onChange={onChange}
            />
        </>
    );
       
}