import React from "react";
import {useNavigate} from 'react-router-dom';

function Account(props) {
  const {question, text, path} = props;
  const navigate = useNavigate();

  const handleSignIn= () =>{
    navigate(path)

  }
  return (
    <div className="signUp">
      <span className="account">
          <>
            <p>{question}</p>
            <span className="sign" onClick={handleSignIn}>
              {text}
            </span>
          </>
        
      </span>
    </div>
  );
}

export default Account;
