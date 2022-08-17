import React from "react";
import './signin.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { login } from "../../services/userService";
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signin() {
    const [userInput, setUserInput] = React.useState({email: "", password: ""})
    const [regexObj, setRegexObj] = React.useState({emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: ""})

    const takeUserName = (event) =>{
        setUserInput(prevState => ({ ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }

    const takePassword = (event) =>{
        setUserInput(prevState => ({ ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }

    const submit = () =>{
        let emailTest = emailRegex.test(userInput.email)
        let passwordTest = passwordRegex.test(userInput.password)

        if(emailTest === false){
            setRegexObj(prevState => ({ ...prevState,
                emailBorder: true,
                emailHelper: "Enter correct email"
            }))
        }
        else if(emailTest === true)
        {
            setRegexObj(prevState => ({ ...prevState,
                emailBorder: false,
                emailHelper: ""
            }))
        }

        if(passwordTest === false){
            setRegexObj(prevState => ({ ...prevState,
                passwordBorder: true,
                passwordHelper: "Enter correct password"
            }))
        }
        else if(passwordTest === true)
        {
            setRegexObj(prevState => ({ ...prevState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }

        if(emailTest === true && passwordTest === true){

            login(userInput).then((response) => {console.log(response); 
                localStorage.setItem("token", response.data.id)
            }).catch((error) => {console.log(error)})
            console.log("log in succesfull")
        }  
    }
    
    return(
        <div className="Sign-in-Page">
            <div className="Signin-Container">
                <div className="Containe">
                    <div className="Google-img">
                        <img id="img-google" src="../../Assert/GoogleLogo.png"/>
                    </div>
                    <div className="Text-1">
                        <h1>Sign in</h1>
                    </div>
                    <div className="Text2">
                        <span>Use your Google Account</span>
                    </div>
                    <div className="UserName">
                        <TextField id="outlined-basic" label="Email or Phone" variant="outlined" 
                        onChange={takeUserName} error={regexObj.emailBorder} helperText={regexObj.emailHelper} />
                        <a>Forget email?</a>
                    </div>
                    <div className="UserPassword">
                        <TextField id="outlined-basic-password" label="Password" variant="outlined" 
                        onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} />
                        <a>Forget Password?</a>
                    </div>
                    <div className="middle-text">
                        <a>Not your computer? Use Guest mode to sign in privately.</a>
                    </div>
                    <div className="middletext">
                        <a>Learn more</a>
                    </div>
                    <div className="button-section">
                        <div className="create-account">
                            <Button variant="text" id="create-account-text" >Create account</Button>
                        </div>
                        <div className="Next">
                            <Button variant="contained" onClick={submit}>Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signin