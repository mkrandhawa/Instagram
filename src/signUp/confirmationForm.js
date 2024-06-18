import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Input from '../login/inputsFields';



export default function ConfirmationForm(){

    let [code, setCode] = useState('');

    let [enabled, setEnabled] = useState(false);

    let [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();


    const getBackgroundColor = () => {
        if (enabled) {
          return isHovered ? '#0000ff' : '#0066ff';
        }
        
    };

    const handleClick = ()=>{
        navigate('/')
    }


    const handleChange = (event)=>{
        setCode(event.target.value)
    }

    const handleGoBack = (event) =>{
        event.preventDefault();
        navigate('/accounts/signup/birthday')
    }

    useEffect(()=>{
        console.log('i am code', code)
      
        code && code.length >= 6 ? setEnabled(true) :setEnabled(false)


        
    }, [code, enabled])


    
    return(
        <main className="confirmation">
            <div className="card">
                <div className="confirmWrapper">
                <div className="emailPicture"></div>
                <div>
                    <p className="instruction cInstructions">Enter confirmation code.</p>
                </div>
                <div className="confirmCode">
                    <p>Enter the confirmation code that we sent to cghghcjjc@gmail.com. <Link to={'/accounts/signup/confirmation'} className='link resendCode'> Resend Code.</Link></p>
                </div>
                </div>

                <div className="form confirmationForm">
                    
                    <form method="POST">
                        <Input 
                            className='email codeInput'
                            type="text"
                            name="code"
                            placeholder="Confirmation code"
                            autoCapitalize="off"
                            autoCorrect="off"
                            required 
                            value={code}
                            onChange={handleChange}

                        />

                        <button 
                            className='login next bnext cNext' 
                            type='submit'
                            onMouseEnter={()=>setIsHovered(true)}
                            onMouseLeave={()=>setIsHovered(false)}
                            style={{backgroundColor: getBackgroundColor()}}
                            disabled={!enabled}  
                            onClick={handleClick}
                            
                        >   
                            Next
                        </button>

                    </form>

                    <div>
                        <button 
                            type="button" 
                            className="goBack cBack"
                            onClick={handleGoBack}
                            >
                                Go Back
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}