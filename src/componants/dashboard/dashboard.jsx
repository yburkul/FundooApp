import { Grid } from '@mui/material'
import { display } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { getNoteList } from '../../services/dataService'
import Drawer1 from '../Drawer/drawer'
import Header from '../header/header'
import TakeNote1 from '../takenote1/takenote1'
import Takenote2 from '../takenote2/takenote2'
import Takenote3 from '../takenote3/takenote3'

function Dashboard(props) {
    const [toggle, setToggle] = useState(false)
    const [noteList, setNoteList] = useState([])
    const [drawerToggle, setDrawerToggle] = useState(false)
    const [currentNoteOption, setCurrentNoteOption] = useState('Notes')

    const listenToDrawer = (noteOptionListener) =>{
        setCurrentNoteOption(noteOptionListener)
    }

    const listenToTakeNoteOne = () => {
        setToggle(true)
    }
    const getNote = () => {
        getNoteList().then((response) =>{
            let filterNotes = []
            if(currentNoteOption === 'Notes'){
                filterNotes = response.data.data.data.filter((notes) =>{
                    if(notes.isArchived === false && notes.isDeleted === false){
                        return notes
                    }
                })
            }
            else if(currentNoteOption === 'Archive'){
                filterNotes = response.data.data.data.filter((notes) =>{
                    if(notes.isArchived === true && notes.isDeleted === false){
                        return notes
                    }
                })
            }
            else if(currentNoteOption === 'Trash'){
                filterNotes = response.data.data.data.filter((notes) =>{
                    if(notes.isArchived === false && notes.isDeleted === true){
                        return notes
                    }
                })
            }
            console.log(response)
            setNoteList(filterNotes)
        }).catch((error => console.log(error)))

    }
    const listenToTakeNoteTwo = () => {
        setToggle(false)
    }

    const autoRefresh = () => {
        getNote()
    }

    useEffect(() =>{
        autoRefresh()  
    }, [currentNoteOption])

    const listenToHeader = () =>{
        setDrawerToggle(!drawerToggle)
    }

  return (
    <div>
        <Header listenToHeader={listenToHeader}/>
        <Drawer1 drawerToggle={drawerToggle} listenToDrawer={listenToDrawer}/>
        <div>
            {
                toggle ? <Takenote2 listenToTakeNoteTwo = {listenToTakeNoteTwo} autoRefresh={autoRefresh}/> : <TakeNote1 listenToTakeNoteOne = {listenToTakeNoteOne}/>
            }
        </div>
        <Grid container spacing={1} style={{border:'0px solid red', width: '65vw', height: 'auto',margin:'100px', display:'flex', flexDirection:'row',
                     flexWrap:'wrap', marginTop: '0px', marginLeft: '310px'}}>
            {
               noteList.map((note) =>(<Grid item lg={3.4} md={3.4} sm={3.4}><Takenote3 note = {note} autoRefresh ={autoRefresh}/></Grid>))  
            }
        </Grid>
    </div>
  )
}
export default Dashboard