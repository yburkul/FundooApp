import axios from "axios";

export const login = (loginObj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login", loginObj)
    return response
}

export const register = (registerObj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp", registerObj)
    return response
}