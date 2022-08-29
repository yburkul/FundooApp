import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { login } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import { makeStyles } from '@mui/styles'
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyle = makeStyles({
    SignInPage: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    SignInContainer: {
        width: "35%",
        height: "80%",
        border: "1px solid #e0e0e0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    SignContainer: {
        width: "82%",
        height: "82%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
    },
    GoogleLogoImg: {
        width: "100%",
        height: "7%",
        "& #img-google": {
            width: "20%",
            height: "100%",
        }
    },
    SignText: {
        width: "100%",
        height: "12%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#202124",
        fontFamily: ("Google Sans", "Noto Sans Myanmar UI", "arial", "sans-serif"),
        fontSize: "24px",
        lineHeight: "1.3333",
        fontWeight: "400"
    },
    SignAccountText: {
        width: "100%",
        height: "12%",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        fontSize: "18px",
        color: "#202124",
        fontFamily: ("roboto", "Noto Sans Myanmar UI", "arial", "sans-serif"),
        fontWeight: "400",
        lineHeight: 1.5,
    },
    UserName: {
        width: "100%",
        '& a': {
            display: "flex",
            justifyContent: "start",
            position: "relative",
            left: "3px",
            top: "3px",
            color: "#1a73e8",
            fontWeight: "500",
        }
    },
    UserPassword: {
        width: "100%",
        position: "relative",
        top: "10px",
        '& a': {
            display: "flex",
            justifyContent: "start",
            position: "relative",
            left: "3px",
            top: "3px",
            color: "#1a73e8",
            fontWeight: "500",
        }
    },
    MiddleText: {
        width: "100%",
        height: "4%",
        position: "relative",
        top: "25px",
        left: "3px",
        whiteSpace: "normal",
        display: "flex",
        justifyContent: "flex-start",
        color: "#5f6368",
        fontSize: "14px",
        lineHeight: "1.4286",
        fontFamily: ("roboto", "Noto Sans Myanmar UI", "arial", "sans-serif"),
    },
    MiddleText1: {
        width: "100%",
        height: "5%",
        position: "relative",
        top: "25px",
        left: "3px",
        fontSize: "15px",
        whiteSpace: "normal",
        display: "flex",
        justifyContent: "flex-start",
        fontWeight: "500",
        letterSpacing: ".25px",
        color: "#1a73e8",
        fontWeight: "500",
    },
    ButtonSection: {
        width: "100%",
        height: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        top: "55px",
        "& #create-account-text": {
            textTransform: "none",
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: ("Google Sans", "Roboto", "Arial", "sans-serif")
        }
    },

    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        SignInPage: {
            width: "100vw",
            height: "110vh"
        },
        SignInContainer: {
            width: "100%",
            height: "100%"
        },
        SignContainer: {
            width: "85%",
            height: "90%"
        },
        GoogleLogoImg: {
            width: "100%",
            height: "7%",
            "& #img-google": {
                width: "20%",
                height: "100%",
            }
        },
        SignText: {
            width: "50%",
            height: "12%"
        },
        SignAccountText: {
            width: "80%"
        },
        UserName: {
            width: "100%"
        },
        UserPassword: {
            width: "100%",
            position: "relative",
            top: "10px"
        },
        MiddleText: {
            width: "100%",
            height: "6%",
            textAlign: "start"
        },
        MiddleText1: {
            width: "100%",
            top: "35px"
        },
        ButtonSection: {
            width: "100%",
            height: "10%"
        }
    },

    ['@media only screen and (min-width :481px) and (max-width :768px)']: {
        SignInPage: {
            width: "100vw",
            height: "100vh"
        },
        SignInContainer: {
            width: "100%",
            height: "100%"
        },
        SignContainer: {
            width: "80%",
            height: "90%"
        },
        GoogleLogoImg: {
            width: "100%",
            height: "4%",
            "& #img-google": {
                width: "20%",
                height: "100%",
            }
        },
        SignText: {
            width: "50%",
            height: "10%"
        },
        SignAccountText: {
            width: "100%",
            height: "8%"

        },
        UserName: {
            width: "100%",
        },
        UserPassword: {
            width: "100%",
            position: "relative",
            top: "10px"
        },
        MiddleText: {
            width: "100%",
            height: "6%",
            textAlign: "start",
            top: "40px",
            left: "5px"
        },
        MiddleText1: {
            width: "100%",
            top: "25px",
        },
        ButtonSection: {
            width: "100%",
            height: "10%"
        }
    },

    ['@media only screen and (min-width :769px) and (max-width :1024px)']: {
        SignInPage: {
            width: "100vw",
            height: "100vh"
        },
        SignInContainer: {
            width: "60%",
            height: "60%",
            border: "1px solid #e0e0e0"
        },
        SignContainer: {
            width: "85%",
            height: "90%"
        },
        GoogleLogoImg: {
            width: "100%",
            height: "5%",
            "& #img-google": {
                width: "20%",
                height: "100%",
            }
        },
        SignText: {
            width: "100%",
            height: "12%"
        },
        SignAccountText: {
            width: "100%",
            height: "10%"

        },
        UserName: {
            width: "100%",
        },
        UserPassword: {
            width: "100%",
            position: "relative",
            top: "10px"
        },
        MiddleText: {
            width: "100%",
            height: "6%",
            textAlign: "start",
            top: "40px",
            left: "5px"
        },
        MiddleText1: {
            width: "100%",
            top: "25px",
        },
        ButtonSection: {
            width: "100%",
            height: "10%"
        }
    }
})

function Signin() {
    const classes = useStyle()
    const navigate = useNavigate()
    const [userInput, setUserInput] = React.useState({ email: "", password: "" })
    const [regexObj, setRegexObj] = React.useState({ emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })

    const takeUserName = (event) => {
        setUserInput(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    const takePassword = (event) => {
        setUserInput(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }

    const submit = () => {
        let emailTest = emailRegex.test(userInput.email)
        let passwordTest = passwordRegex.test(userInput.password)

        if (emailTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Enter correct email"
            }))
        }
        else if (emailTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: false,
                emailHelper: ""
            }))
        }

        if (passwordTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "Enter correct password"
            }))
        }
        else if (passwordTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }

        if (emailTest === true && passwordTest === true) {

            login(userInput).then((response) => {
                console.log(response);
                localStorage.setItem("token", response.data.id)
                navigate('/dashboard')
            }).catch((error) => { console.log(error) })
            console.log("log in succesfull")
        }
    }

    const newAccount = () => {
        navigate('/signup')
    }

    return (
        <Box className={classes.SignInPage}>
            <Paper className={classes.SignInContainer} sx={{ borderRadius: 2 }}>
                <Box className={classes.SignContainer}>
                    <Box className={classes.GoogleLogoImg}>
                        <img id="img-google" src="../../Assert/GoogleLogo.png" />
                    </Box>
                    <Box className={classes.SignText}>
                        <span>Sign in</span>
                    </Box>
                    <Box className={classes.SignAccountText}>
                        <span>Use your Google Account</span>
                    </Box>
                    <Box className={classes.UserName}>
                        <TextField id="outlined-basic" label="Email or Phone" variant="outlined" fullWidth="true"
                            onChange={takeUserName} error={regexObj.emailBorder} helperText={regexObj.emailHelper} />
                        <a>Forgot email?</a>
                    </Box>
                    <Box className={classes.UserPassword}>
                        <TextField type="password" id="outlined-basic-password" label="Password" variant="outlined" fullWidth="true"
                            onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} />
                        <a>Forgot Password?</a>
                    </Box>
                    <Box className={classes.MiddleText}>
                        <a>Not your computer? Use Guest mode to sign in privately.</a>
                    </Box>
                    <Box className={classes.MiddleText1}>
                        <a>Learn more</a>
                    </Box>
                    <Box className={classes.ButtonSection}>
                        <Box className={classes.createAccount}>
                            <Button variant="text" id="create-account-text" onClick={newAccount}>Create account</Button>
                        </Box>
                        <Box className={classes.Next}>
                            <Button variant="contained" onClick={submit}>Next</Button>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}
export default Signin