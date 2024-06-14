import React, {useState, useEffect} from 'react';
import Input from '../login/inputsFields';
import { Link } from 'react-router-dom';
import { regEx } from './regEx';

export default function SignupForm(){

    

    let [enabled, setEnabled] = useState(false);
    let [isHovered, setIsHovered] = useState(false);
    let [user, setUser] = useState({
        emailPhone:'',
        name:'',
        username:'',
        password:''
    })

    //Change the baackgrounf color
    const getBackgroundColor = () => {
        if (enabled) {
          return isHovered ? '#0000ff' : '#0066ff';
        }
        
      };
    
    //Handle the change in the inputs fields
    const handleChange = (event) =>{
        const {name, value } = event.target;
        setUser({...user, [name]: value});
        console.log(user)
        
    
    }

    
    useEffect(()=>{
        const isEmailPhone = user.emailPhone.length>=10 && (regEx.find(item=>item.name==='email').reg.test(user.emailPhone) || regEx.find(item=>item.name==='phone').reg.test(user.emailPhone));
        const isName = user.name.length>10;
        const isUsername = user.username.length>5;
        const isPassword = user.password.length>8 && regEx.find(item=>item.name==='password').reg.test(user.password);

        const isEnabled =(isEmailPhone&&isName&&isUsername&&isPassword);

        setEnabled(isEnabled);
         

    }, [user, enabled]);


    return(
        
            <div className="loginForm signupForm">
                <div className="logo logoSign"></div>
                 <div className="loginF"></div>
                 <div className='text'>    
                    <p >Sign up to see photos and videos from your friends.</p>
                </div>

                 <button className="login fb-button" disabled type="submit">
                        <span className="fbLogo whiteFbLogo"></span>
                        <Link to={'https://t.ly/JwzG1'} className='link' >
                            <span className='lg-facebook'>Log in with Facebook</span> 
                        </Link>
                </button>
                <div className="orLines">
                    <div className="line signLine"></div>
                    <div className="or">OR</div>
                    <div className="line signLine"></div>
                </div>

                <form className='form'>
                    <Input 
                        className="email"
                        type="text"
                        name="emailPhone"
                        placeholder="Mobile Number,  or Email"
                        autoCapitalize="off"
                        autoCorrect="off"
                        required 
                        value={user.email}
                        onChange={handleChange}
                        />
                    <Input 
                        className="name"
                        type="text"
                        name="name"
                        maxLength="50"
                        placeholder="Full Name"
                        autoCapitalize="off"
                        autoCorrect="off"
                        required 
                        value={user.name}
                        onChange={handleChange}
                        />
                    <Input 
                        className="uName"
                        type="text"
                        name="username"
                        placeholder="Username"
                        autoCapitalize="off"
                        autoCorrect="off"
                        required 
                        value={user.username}
                        onChange={handleChange}
                        />
                    <Input
                        className="pass"
                        type="password"
                        name="password"
                        placeholder="Password"
                        minLength ="8"
                        autoCapitalize="off"
                        autoCorrect="off"
                        required
                        value={user.password}
                        onChange={handleChange}
                        />

                    <div className='details'>
                        <div className='p1'>                    
                            <p>People who use our service may have uploaded your contact information to Instagram. <Link to={'https://www.facebook.com/help/instagram/261704639352628?hl=en'} className='link'>Learn More</Link></p>
                        </div>
                        <div className='p2'>
                            <p>By signing up, you agree to our <Link to= {'https://help.instagram.com/581066165581870/?locale=en_US&hl=en'} className='link'>Terms.</Link> Learn how we collect, use and share your data in our <Link to={'https://www.facebook.com/privacy/policy?hl=en'} className='link'>Privacy Policy</Link> and how we use cookies and similar technology in our <Link to={'https://www.instagram.com/legal/cookies/?hl=en'} className='link'>Cookies Policy.</Link> </p>
                        </div>
                    </div>

                   
                    <button 
                        className='login next' 
                        type='submit'
                        // style={{backgroundColor: enabled && 'rgb(0, 135, 217)'}}
                        onMouseEnter={()=>setIsHovered(true)}
                        onMouseLeave={()=>setIsHovered(false)}
                        style={{backgroundColor: getBackgroundColor()}}
                        disabled={!enabled}  
                    >   
                        Next
                    </button>
                </form>
                
            </div>
        
    )
}