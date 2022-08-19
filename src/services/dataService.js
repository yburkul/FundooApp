import axios from "axios";

const headerconfig = {
    headers: {Authorization: localStorage.getItem('token')}
}

export const getNoteList = () =>{
    let response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', headerconfig)
    return response
}

export const postNote = (noteObj) =>{
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes', 
    noteObj, headerconfig)
    return response
}

export const changesColorNotes = (noteObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes', 
    noteObj, headerconfig)
    return response
}

export const archiveNotes = (noteObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes', 
    noteObj, headerconfig)
    return response
}

export const deleteNotes = (noteObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes', 
    noteObj, headerconfig)
    return response
}

export const updateNotes = (noteObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes', 
    noteObj, headerconfig)
    return response
}