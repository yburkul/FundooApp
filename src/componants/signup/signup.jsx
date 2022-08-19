import React from 'react'
import './signup.css'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { register } from '../../services/userService';
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const userPasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const userConfirmPasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastnameRegex = /^[A-Z]{1}[a-z]{2,}$/;

function Signup() {
    const [userInputName, setUserInputName] = React.useState({firstName: "", lastName: "", email: "", password: "", service:"advance"})
    const [regexObject, setRegexObject] = React.useState({firstNameBorder: false, firstNameHelper: "",
    lastNameBorder: false, lastNameHelper: "", emailBorder: false, emailHelper: "", userPasswordBorder: false, userPasswordHelper: "", userConfirmPasswordBorder: false, userConfirmPasswordHelper: "" })

    const takeUserFirstNameInput = (event) =>{
        setUserInputName(prevState => ({ ...prevState,
            firstName: event.target.value
        }))
        console.log(event.target.value)
    }

    const takeUserLastNameInput = (event) =>{
        setUserInputName(prevState => ({ ...prevState,
            lastName: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeUserEmailInput = (event) =>{
        setUserInputName(prevState => ({ ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeUserPasswordInput = (event) =>{
        setUserInputName(prevState => ({ ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeUserConfirmPasswordInput = (event) =>{
        setUserInputName(prevState => ({ ...prevState,
            userConfirmPassword: event.target.value
        }))
        console.log(event.target.value)
    }

    const submit = () =>{
        let firstnameTest = firstnameRegex.test(userInputName.firstName)
        let lastnameTest = lastnameRegex.test(userInputName.lastName)
        let emailTest = emailRegex.test(userInputName.email)
        let userPasswordTest = userPasswordRegex.test(userInputName.password)
        let userConfirmPasswordTest = userConfirmPasswordRegex.test(userInputName.userConfirmPassword)

        if(firstnameTest === false){
            setRegexObject(prevState => ({ ...prevState,
                firstNameBorder: true,
                firstNameHelper: "Enter Correct First Name"
            }))
        }
        else if(firstnameTest === true){
            setRegexObject(prevState => ({ ...prevState,
                firstNameBorder: false,
                firstNameHelper: ""
            }))
        }

        if(lastnameTest === false){
            setRegexObject(prevState => ({ ...prevState,
                lastNameBorder: true,
                lastNameHelper: "Enter Correct Last Name"
            }))
        }
        else if(lastnameTest === true){
            setRegexObject(prevState => ({ ...prevState,
                lastNameBorder: false,
                lastNameHelper: ""
            }))
        }

        if(emailTest === false){
            setRegexObject(prevState => ({ ...prevState,
                emailBorder: true,
                emailHelper: "Enter Correct Email"
            }))
        }
        else if(emailTest === true){
            setRegexObject(prevState => ({ ...prevState,
                emailBorder: false,
                emailHelper: ""
            }))
        }

        if(userPasswordTest === false){
            setRegexObject(prevState => ({ ...prevState,
                userPasswordBorder: true,
                userPasswordHelper: "Enter Correct Password"
            }))
        }
        else if(userPasswordTest === true){
            setRegexObject(prevState => ({ ...prevState,
                userPasswordBorder: false,
                userPasswordHelper: ""
            }))
        }

        if(userConfirmPasswordTest === false){
            setRegexObject(prevState => ({ ...prevState,
                userConfirmPasswordBorder: true,
                userConfirmPasswordHelper: "Enter Correct Password"
            }))
        }
        else if(userConfirmPasswordTest === true){
            setRegexObject(prevState => ({ ...prevState,
                userConfirmPasswordBorder: false,
                userConfirmPasswordHelper: ""
            }))
        }

        if(firstnameTest === true && lastnameTest === true && emailTest === true && userPasswordTest === true){

            register(userInputName).then((response) => {console.log(response) 
                // localStorage.setItem("token", response.data.id)
            }).catch((error) => {console.log(error)})
            console.log("Registration is succesfull")
        }
    }
    
  return (
    <div className='Sign-up-Page'>
        <div className='Signup-Container'>
            <div className='Container'>
                <div className='User-info'>
                    <div className="Google-img-box">
                        <img id='google-img' src="../../Assert/GoogleLogo.png"/>
                    </div>
                    <div className="Text1">
                        <span>Create your Google Account</span>
                    </div>
                    <div className="UserName-Box">
                        <div className='FirstName'>
                            <TextField label="First name" id="outlined-size-small" size="small" fullWidth="true"
                            onChange={takeUserFirstNameInput} error={regexObject.firstNameBorder} helperText={regexObject.firstNameHelper}/>
                        </div>
                        <div className='LastName'>
                            <TextField label="Last name" id="outlined-size-small" size="small" fullWidth="true"
                            onChange={takeUserLastNameInput} error={regexObject.lastNameBorder} helperText={regexObject.lastNameHelper}/>
                        </div>
                    </div>
                    <div className='User-gmail'>
                        <TextField label="User name" id="UserGmail" size="small" fullWidth="true"
                        onChange={takeUserEmailInput} error={regexObject.emailBorder} helperText={regexObject.emailHelper}/>
                    </div>
                    <div className='smallText'>
                        <a id='small-text'>You can use letters,numbers & periods</a>
                    </div> 
                    <div className='blue-text'>
                        <a>Use my current email address instead</a>
                    </div>
                    <div className="UserPassword-Box">
                        <div className='Password'>
                            <TextField label="Password" id="outlined-size-small" size="small" fullWidth="true"
                            onChange={takeUserPasswordInput} error={regexObject.userPasswordBorder} helperText={regexObject.userPasswordHelper}/>
                        </div>
                        <div className='Confirm'>
                            <TextField label="Confirm" id="outlined-size-small" size="small" fullWidth="true"
                            onChange={takeUserConfirmPasswordInput} error={regexObject.userConfirmPasswordBorder} helperText={regexObject.userConfirmPasswordHelper}/>
                        </div>
                    </div>
                    <div className='Password-text'>
                        <span id='Password-small-text'>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                    </div>
                    <div className='check-box'>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Show password" />
                    </div>
                    <div className="sign-in-button-section">
                        <div className="sign-in-account">
                            <Button variant="text" id='sign-in-text'>Sign in instead</Button>
                        </div>
                        <div className="Next-sign-up">
                            <Button variant="contained" onClick={submit}>Next</Button>
                        </div>
                    </div>
                </div>
                <div className='Logo'>
                        <img id='account-img' src='../../Assert/account.svg'/>
                    <div className='account-text'>
                        <a>One account. All of Google working for you.</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Signup