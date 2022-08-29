import React from 'react'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { register } from '../../services/userService';
import { Box, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const userPasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const userConfirmPasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastnameRegex = /^[A-Z]{1}[a-z]{2,}$/;

const useStyle = makeStyles({
    SignUpPage: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    SignUpContainer: {
        width: "55%",
        height: "90%",
        border: "1px solid #e0e0e0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center"
    },
    Container: {
        width: "90%",
        height: "87%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        top: "25px"
    },
    UserInfo: {
        width: "90%",
        height: "92%"
    },
    GoogleImgBox: {
        width: "20%",
        height: "5%"
    },
    googleImg: {
        width: "100%",
        height: "100%"
    },
    Text1: {
        width: "100%",
        height: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        fontSize: "medium",
        color: "#202124",
        fontFamily: ("Google Sans", "Noto Sans Myanmar UI", "arial", "sans-serif"),
        fontSize: "24px",
        fontWeight: "400",
        lineHeight: "1.3333"
    },
    UserNameBox: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        top: "7px",
    },
    FirstName: {
        "& #outlined-size-small": {
            width: "170px"
        }
    },
    LastName: {
        "& #outlined-size-small": {
            width: "170px"
        }
    },
    UserGmailBox: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        position: "relative",
        top: "25px",
        "& #UserGmail": {
            width: "378px"
        }
    },
    SmallText: {
        position: "relative",
        top: "25px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        fontSize: "13px",
        whiteSpace: "normal",
        opacity: 0.8,
        "& #small-text": {
            position: "relative",
            left: "10px"
        }
    },
    BlueText: {
        height: "40px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        top: "35px",
        fontSize: ".875rem",
        fontWeight: 500,
        color: "blue"
    },
    UserPasswordBox: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        top: "55px"
    },
    Password: {
        "& #outlined-size-small": {
            width: "170px"
        }
    },
    Confirm: {
        "& #outlined-size-small": {
            width: "170px"
        }
    },
    PasswordText: {
        display: "flex",
        flexDirection: "row",
        position: "relative",
        top: "55px",
        color: "#5f6368",
        fontSize: "12px",
        height: "30px",
        lineHeight: 1.4286,
        "& #Password-small-text": {
            width: "80%",
            position: "relative",
            left: "10px",
            marginTop: "4px",
            whiteSpace: "normal",
            display: "flex",
            flexDirection: "row",
            textAlign: "start"
        }
    },
    CheckBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        position: "relative",
        top: "65px",
        color: "#202124",
        lineHeight: 1.4286,
        textOverflow: "ellipsis",
        whiteSpace: "normal",
    },
    SignInButtonSection: {
        width: "100%",
        height: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        top: "100px",
        "& #sign-in-text": {
            textTransform: "none",
            fontSize: "14px",
            position: "relative",
            right: "5px",
            fontWeight: 500,
            color: "blue",
            fontSize: ".875rem"
        }
    },
    Logo: {
        width: "100%",
        height: "95%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        "& #account-img": {
            width: "240px",
            height: "250px",
            position: "relative",
            top: "52px"
        }
    },
    AccountText: {
        width: "230px",
        height: "50px",
        position: "relative",
        top: "60px",
        fontSize: "17px",
        fontWeight: "400",
        lineHeight: "1.5286",
        color: "#202124",
        fontFamily: ("roboto", "Noto Sans Myanmar UI", "arial", "sans-serif")
    },

    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        SignUpPage: {
            width: "100vw",
            height: "140vh"
        },
        SignUpContainer: {
            width: "100%",
            height: "100%",
            top: "0px",
            borderRadius: "0px",
        },
        Container: {
            width: "85%",
            height: "100%",
            top: "0px",
            justifyContent: "center"
        },
        UserInfo: {
            width: "100%",
            height: "95%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "none"
        },
        Logo: {
            display: "none"
        },
        GoogleImgBox: {
            width: "20%",
            height: "4%"
        },
        googleImg: {
            width: "100%",
            height: "100%"
        },
        Text1: {
            width: "70%",
            height: "10%",
            display: "flex",
            textAlign: "start",
            fontSize: "20px"
        },
        UserNameBox: {
            width: "100%",
            height: "17%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            top: "20px"
        },
        FirstName: {
            "& #outlined-size-small": {
                width: "170px"
            }
        },
        LastName: {
            "& #outlined-size-small": {
                width: "170px"
            }
        },
        UserGmailBox: {
            width: "100%",
            height: "10%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            position: "relative",
            top:"27px",
            "& #UserGmail": {
                width: "378px"
            }
        },  
        BlueText:{
            height: "40px",
            top:"20px"
        },
        UserPasswordBox:{
            width: "100%",
            height: "16%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            top:"35px"
        },
        PasswordText:{
            top:"35px"
        },
        CheckBox:{
            top: "45px",
            color: "#202124"
        },
        SignInButtonSection:{
            position: "relative",
            top:"70px"
        }
    },

    ['@media only screen and (min-width :481px) and (max-width :768px)']: {
        SignUpPage: {
            width: "100vw",
            height: "100vh"
        },
        SignUpContainer: {
            width: "100%",
            height: "100%",
            top: "0px",
            borderRadius: "0px",
            border: "0px"
        },
        Container: {
            width: "85%",
            height: "90%",
            top: "20px",
            justifyContent: "center"
        },
        UserInfo: {
            width: "100%",
            height: "95%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "none"
        },
        Logo: {
            display: "none"
        },
        GoogleImgBox: {
            width: "20%",
            height: "4%"
        },
        googleImg: {
            width: "100%",
            height: "100%"
        },
        Text1: {
            width: "70%",
            height: "10%",
            display: "flex",
            textAlign: "start",
            fontSize: "20px"
        },
        UserNameBox: {
            width: "100%",
            height: "17%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            top: "20px"
        },
        FirstName: {
            "& #outlined-size-small": {
                width: "170px"
            }
        },
        LastName: {
            "& #outlined-size-small": {
                width: "170px"
            }
        },
        UserGmailBox: {
            width: "100%",
            height: "10%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            position: "relative",
            top:"27px",
            "& #UserGmail": {
                width: "378px"
            }
        },  
        BlueText:{
            height: "40px",
            top:"20px"
        },
        UserPasswordBox:{
            width: "100%",
            height: "16%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            top:"35px"
        },
        PasswordText:{
            top:"35px"
        },
        CheckBox:{
            top: "45px",
            color: "#202124"
        },
        SignInButtonSection:{
            position: "relative",
            top:"70px"
        }
    },

    ['@media only screen and (min-width :769px) and (max-width :1024px)']: {
        SignUpPage: {
            width: "100vw",
            height: "100vh"
        },
        SignUpContainer: {
            width: "60%",
            height: "65%",
        },
        Container: {
            width: "90%",
            height: "90%",
            top: "25px",
            justifyContent: "center"
        },
        UserInfo: {
            width: "90%",
            height: "95%",
            justifyContent: "center"
        },
        Logo: {
            display: "none"
        },
        GoogleImgBox: {
            width: "20%",
            height: "5%"
        },
        googleImg: {
            width: "100%",
            height: "100%"
        },
        Text1: {
            width: "100%",
            height: "10%",
            fontSize: "26px"
        },
        UserNameBox: {
            width: "100%",
            height: "10%",
            top: "20px"
        },
        FirstName: {
            width: "48%",
            display: "flex",
            "& #outlined-size-small": {
                width: "150px"
            }
        },
        LastName: {
            width: "48%",
            display: "flex",
            "& #outlined-size-small": {
                width: "150px"
            }
        },
        UserPasswordBox:{
            width: "100%",
            height: "10%",
        },
        Password: {
            width: "48%",
            display: "flex",
            "& #outlined-size-small": {
                width: "150px"
            }
        },
        Confirm: {
            width: "48%",
            display: "flex",
            "& #outlined-size-small": {
                width: "150px"
            }
        },
        PasswordText:{
            top:"35px",
        },
        CheckBox:{
            top: "50px",
            color: "#202124"
        },
        SignInButtonSection:{
            position: "relative",
            top:"75px"
        }
    }
})

function Signup() {

    const classes = useStyle()

    const [userInputName, setUserInputName] = React.useState({ firstName: "", lastName: "", email: "", password: "", service: "advance" })
    const [regexObject, setRegexObject] = React.useState({
        firstNameBorder: false, firstNameHelper: "",
        lastNameBorder: false, lastNameHelper: "", emailBorder: false, emailHelper: "", userPasswordBorder: false, userPasswordHelper: "", userConfirmPasswordBorder: false, userConfirmPasswordHelper: ""
    })

    const takeUserFirstNameInput = (event) => {
        setUserInputName(prevState => ({
            ...prevState,
            firstName: event.target.value
        }))
        console.log(event.target.value)
    }

    const takeUserLastNameInput = (event) => {
        setUserInputName(prevState => ({
            ...prevState,
            lastName: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeUserEmailInput = (event) => {
        setUserInputName(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeUserPasswordInput = (event) => {
        setUserInputName(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeUserConfirmPasswordInput = (event) => {
        setUserInputName(prevState => ({
            ...prevState,
            userConfirmPassword: event.target.value
        }))
        console.log(event.target.value)
    }

    const submit = () => {
        let firstnameTest = firstnameRegex.test(userInputName.firstName)
        let lastnameTest = lastnameRegex.test(userInputName.lastName)
        let emailTest = emailRegex.test(userInputName.email)
        let userPasswordTest = userPasswordRegex.test(userInputName.password)
        let userConfirmPasswordTest = userConfirmPasswordRegex.test(userInputName.userConfirmPassword)

        if (firstnameTest === false) {
            setRegexObject(prevState => ({
                ...prevState,
                firstNameBorder: true,
                firstNameHelper: "Enter Correct First Name"
            }))
        }
        else if (firstnameTest === true) {
            setRegexObject(prevState => ({
                ...prevState,
                firstNameBorder: false,
                firstNameHelper: ""
            }))
        }

        if (lastnameTest === false) {
            setRegexObject(prevState => ({
                ...prevState,
                lastNameBorder: true,
                lastNameHelper: "Enter Correct Last Name"
            }))
        }
        else if (lastnameTest === true) {
            setRegexObject(prevState => ({
                ...prevState,
                lastNameBorder: false,
                lastNameHelper: ""
            }))
        }

        if (emailTest === false) {
            setRegexObject(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Enter Correct Email"
            }))
        }
        else if (emailTest === true) {
            setRegexObject(prevState => ({
                ...prevState,
                emailBorder: false,
                emailHelper: ""
            }))
        }

        if (userPasswordTest === false) {
            setRegexObject(prevState => ({
                ...prevState,
                userPasswordBorder: true,
                userPasswordHelper: "Enter Correct Password"
            }))
        }
        else if (userPasswordTest === true) {
            setRegexObject(prevState => ({
                ...prevState,
                userPasswordBorder: false,
                userPasswordHelper: ""
            }))
        }

        if (userConfirmPasswordTest === false) {
            setRegexObject(prevState => ({
                ...prevState,
                userConfirmPasswordBorder: true,
                userConfirmPasswordHelper: "Enter Correct Password"
            }))
        }
        else if (userConfirmPasswordTest === true) {
            setRegexObject(prevState => ({
                ...prevState,
                userConfirmPasswordBorder: false,
                userConfirmPasswordHelper: ""
            }))
        }

        if (firstnameTest === true && lastnameTest === true && emailTest === true && userPasswordTest === true) {

            register(userInputName).then((response) => {
                console.log(response)
                // localStorage.setItem("token", response.data.id)
            }).catch((error) => { console.log(error) })
            console.log("Registration is succesfull")
        }
    }

    return (
        <Box className={classes.SignUpPage}>
            <Paper className={classes.SignUpContainer}>
                <Box className={classes.Container}>
                    <Box className={classes.UserInfo}>
                        <Box className={classes.GoogleImgBox}>
                            <img className={classes.googleImg} src="../../Assert/GoogleLogo.png" />
                        </Box>
                        <Box className={classes.Text1}>
                            <span>Create your Google Account</span>
                        </Box>
                        <Box className={classes.UserNameBox}>
                            <Box className={classes.FirstName}>
                                <TextField label="First name" id="outlined-size-small" size="small" fullWidth="true"
                                    onChange={takeUserFirstNameInput} error={regexObject.firstNameBorder} helperText={regexObject.firstNameHelper} />
                            </Box>
                            <Box className={classes.LastName}>
                                <TextField label="Last name" id="outlined-size-small" size="small" fullWidth="true"
                                    onChange={takeUserLastNameInput} error={regexObject.lastNameBorder} helperText={regexObject.lastNameHelper} />
                            </Box>
                        </Box>
                        <Box className={classes.UserGmailBox}>
                            <TextField label="User name" id="UserGmail" size="small" fullWidth="true"
                                onChange={takeUserEmailInput} error={regexObject.emailBorder} helperText={regexObject.emailHelper} />
                        </Box>
                        <Box className={classes.SmallText}>
                            <a id='small-text'>You can use letters,numbers & periods</a>
                        </Box>
                        <Box className={classes.BlueText}>
                            <a>Use my current email address instead</a>
                        </Box>
                        <Box className={classes.UserPasswordBox}>
                            <Box className={classes.Password}>
                                <TextField label="Password" id="outlined-size-small" size="small" fullWidth="true"
                                    onChange={takeUserPasswordInput} error={regexObject.userPasswordBorder} helperText={regexObject.userPasswordHelper} />
                            </Box>
                            <Box className={classes.Confirm}>
                                <TextField label="Confirm" id="outlined-size-small" size="small" fullWidth="true"
                                    onChange={takeUserConfirmPasswordInput} error={regexObject.userConfirmPasswordBorder} helperText={regexObject.userConfirmPasswordHelper} />
                            </Box>
                        </Box>
                        <Box className={classes.PasswordText}>
                            <span id='Password-small-text'>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                        </Box>
                        <Box className={classes.CheckBox}>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Show password" />
                        </Box>
                        <Box className={classes.SignInButtonSection}>
                            <Box className={classes.SignInAccount}>
                                <Button variant="text" id='sign-in-text'>Sign in instead</Button>
                            </Box>
                            <Box className={classes.Nextsignup}>
                                <Button variant="contained" onClick={submit}>Next</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.Logo}>
                        <img id='account-img' src='../../Assert/account.svg' />
                        <Box className={classes.AccountText}>
                            <a>One account. All of Google working for you.</a>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}
export default Signup