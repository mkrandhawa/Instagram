import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Input from "./inputsFields";

export function LoginForm() {

  const navigate = useNavigate();

  let [enabled, setEnabled] = useState(false);
  let [isHovered, setIsHovered] = useState(false);

  const [user, setUser]= useState({
    username:'',
    password: ''
  });


  //Change the background color
  const getBackgroundColor = () => {
    if (enabled) {
      return isHovered ? '#0000ff' : '#0066ff';
    }
    
  };

  const handleChange = (event) =>{
    const {name, value} = event.target;

    setUser({...user, [name]: value})
  }

  

  //POST FUNCTION --> Post sent to check the user details
  async function postData(url, user) {
    const response = await fetch(url, {
      method: "POST", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer", 
      body: JSON.stringify(user), 
    });
    return response.json();
  }



  const handleClick = (event)=>{
    event.preventDefault();

    console.log('i have been clicked');
        event.preventDefault();

        postData("http://localhost:4000/api/v1/users/login", { user })
        .then((response) => {
          console.log(response)
          console.log('im insied posr')
          if(response.status === 'success'){
            console.log(user); // JSON data parsed by `data.json()` call
            navigate('/home')
          }else{
            console.error('Login error' , response.message)
          }
           
          })
          .catch(error => console.error('Error:', error));

  }

  useEffect(()=>{
    console.log(user);
    user.username && user.password.length>8 ? setEnabled(true) : setEnabled(false);

  }, [user, setEnabled]);





    return (
      <div className="loginForm">
        <div className="logo"></div>
        <div className="loginF">
          <form onSubmit={handleClick}>
            <Input
              className="username"
              type="text"
              name="username"
              placeholder="Phone number, username or email address"
              maxLength={75}
              autoCapitalize="off"
              autoCorrect="off"
              required
              onChange= {handleChange}
            />
            <Input
              className="password"
              type="password"
              name="password"
              placeholder="Password"
              autoCapitalize="off"
              autoCorrect="off"
              required
              onChange= {handleChange}
            />
            <button 
            className="login"  
            type="submit"
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            style={{backgroundColor: getBackgroundColor()}}
            disabled={!enabled}
            >
              Log in
            </button>
            <div className="orLines">
              <div className="line"></div>
              <div className="or">OR</div>
              <div className="line"></div>
            </div>
            <div className="forgotten">
              <button className="facebookButton" type="button">
                <span className="fbLogo"></span>
                <span>Log in with Facebook</span>
              </button>
              <a
                className="forgotLink"
                href="https://www.instagram.com/accounts/password/reset/"
              >
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
  