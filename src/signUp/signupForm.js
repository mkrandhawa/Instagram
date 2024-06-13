import React from 'react';
import Input from '../login/inputsFields';
import { Link } from 'react-router-dom';


export default function SignupForm(){

  
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
                        type="email"
                        name="email"
                        placeholder="Mobile Number,  or Email"
                        autoCapitalize="off"
                        autoCorrect="off"
                        required 
                        />
                    <Input 
                        className="name"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        autoCapitalize="off"
                        autoCorrect="off"
                        required 
                        />
                    <Input 
                        className="uName"
                        type="text"
                        name="username"
                        placeholder="Username"
                        autoCapitalize="off"
                        autoCorrect="off"
                        required 
                        />
                    <Input
                        className="pass"
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoCapitalize="off"
                        autoCorrect="off"
                        required
                        />

                    <div className='details'>
                        <div className='p1'>                    
                            <p>People who use our service may have uploaded your contact information to Instagram. <Link to={'https://www.facebook.com/help/instagram/261704639352628?hl=en'} className='link'>Learn More</Link></p>
                        </div>
                        <div className='p2'>
                            <p>By signing up, you agree to our <Link to= {'https://help.instagram.com/581066165581870/?locale=en_US&hl=en'} className='link'>Terms.</Link> Learn how we collect, use and share your data in our <Link to={'https://www.facebook.com/privacy/policy?hl=en'} className='link'>Privacy Policy</Link> and how we use cookies and similar technology in our <Link to={'https://www.instagram.com/legal/cookies/?hl=en'} className='link'>Cookies Policy.</Link> </p>
                        </div>
                    </div>
                   
                    <button className='login next' disabled type='submit'>Next</button>
                </form>
                
            </div>
        
    )
}