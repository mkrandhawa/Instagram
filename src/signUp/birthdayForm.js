import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Select from "./select";
import { Months, Years, Days} from "./options";
import { UserContext } from "../context/userContext";

export default function BirthdayInfo(){

    const { user, setUser} = useContext(UserContext);
    
    let [enabled, setEnabled] = useState(false);
    let [isHovered, setIsHovered] = useState(false);


    const navigate = useNavigate();

    const getBackgroundColor = () => {
        if (enabled) {
          return isHovered ? '#0000ff' : '#0066ff';
        }
        
    };

    const handleClick = (event)=>{
        event.preventDefault();
        navigate('/accounts/signup/confirmation')
    }

    const handleChange = (event) =>{
        const {name, value } = event.target;
        setUser({...user, dob: {...user.dob, [name]: value}});
       
    }


    const handleGoBack = (event) =>{
        event.preventDefault();
        navigate('/accounts/signup')
    }

    useEffect(() => {
        console.log('dov',user.dob)
        if (user.dob.year) {
            const currentYear = new Date().getFullYear();
            const userAge = currentYear - parseInt(user.dob.year, 10);
            
            setEnabled(userAge >= 18);
        }
    }, [user.dob, setEnabled]);

  



    return(
        <main className="birthday">
            <div className="birthdayForm">
                <div className="wrapper">
                    <div className="birthdayPicture"></div>

                    <div>    
                        <p className="instruction">Add your date of birth</p>
                    </div>
                    <div> 
                        <p className="info">This won't be part of your public profile.</p>
                        <button type="button" className="reason">
                            <span>Why do I need to provide my date of birth?</span>
                            
                            </button>   
                    </div>

                    <form className='form'>
                        <div className="dropdown">
                        <Select 
                            title='Month:'
                            options={Months}
                            name='month'
                            onChange={handleChange}
                            value={user.dob.month}

                        />
                        <Select 
                            title='Day:'
                            options={Days}
                            name='day'
                            onChange={handleChange}
                            value={user.dob.day}

                        />
                        <Select 
                            title='Year:'
                            options={Years}
                            name='year'
                            onChange={handleChange}
                            value={user.dob.year}
                        />
                        </div>                                                   
                        

                        <div>
                            <div className="dropdownDates"></div>
                            <div className='p3'>                    
                                <p>You need to enter the date you were born on</p>
                            </div>
                        </div>
                        

                        <div className='formInfo'>
                            <div className='p2 p4'>
                                <p>Use your own date of birth, even if this account is for a business, pet or something else
                                </p>
                            </div>
                        </div>

                        <button 
                            className='login next bnext' 
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
                            className="goBack"
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