import { Box, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { display } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { getNoteList } from '../../services/dataService'
import Drawer1 from '../Drawer/drawer'
import PrimarySearchAppBar from '../header/headerMui'
import TakeNote1 from '../takenote1/takenote1'
import Takenote2 from '../takenote2/takenote2'
import Takenote3 from '../takenote3/takenote3'

const useStyle = makeStyles({
    BoxNote3: {
        border: '0px solid red',
        width: '65vw',
        height: 'auto',
        margin: '100px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '0px',
        marginLeft: '350px'
    },

    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        BoxNote3: {
            // border: '1px solid blue',
            width: '80%',
            height: 'auto',
            margin: '60px',
            display: 'flex',
            flexDirection: 'row',
            //flexWrap: 'wrap',
            marginTop: '0px',
            // marginLeft: '320px'
            position: "relative",
            right: "0px"
        },
    },

    ['@media only screen and (min-width :481px) and (max-width :600px)']: {
        BoxNote3: {
            // border: '1px solid blue',
            width: '80%',
            height: 'auto',
            margin: '90px',
            display: 'flex',
            flexDirection: 'row',
            //flexWrap: 'wrap',
            marginTop: '0px',
            // marginLeft: '320px'
            position: "relative",
            right: "0px"
        },
    },
    ['@media only screen and (min-width :601px) and (max-width :768px)']: {
        BoxNote3: {
            // border: '1px solid blue',
            width: '80%',
            height: 'auto',
            margin: '100px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: '0px',
            marginLeft: '120px',
            position: "relative",
            right: "0px"
        },
    },
    ['@media only screen and (min-width :769px) and (max-width :1024px)']: {
        BoxNote3: {
            // border: '1px solid blue',
            width: '80%',
            height: 'auto',
            margin: '100px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: '0px',
            marginLeft: '130px',
            position: "relative",
            right: "0px",
        },
    }
})

function Dashboard(props) {
    const classes = useStyle()
    const [toggle, setToggle] = useState(false)
    const [noteList, setNoteList] = useState([])
    const [drawerToggle, setDrawerToggle] = useState(false)
    const [currentNoteOption, setCurrentNoteOption] = useState('Notes')

    const listenToDrawer = (noteOptionListener) => {
        setCurrentNoteOption(noteOptionListener)
    }

    const listenToTakeNoteOne = () => {
        setToggle(true)
    }
    const getNote = () => {
        getNoteList().then((response) => {
            let filterNotes = []
            if (currentNoteOption === 'Notes') {
                filterNotes = response.data.data.data.filter((notes) => {
                    if (notes.isArchived === false && notes.isDeleted === false) {
                        return notes
                    }
                })
            }
            else if (currentNoteOption === 'Archive') {
                filterNotes = response.data.data.data.filter((notes) => {
                    if (notes.isArchived === true && notes.isDeleted === false) {
                        return notes
                    }
                })
            }
            else if (currentNoteOption === 'Trash') {
                filterNotes = response.data.data.data.filter((notes) => {
                    if (notes.isArchived === false && notes.isDeleted === true) {
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

    useEffect(() => {
        autoRefresh()
    }, [currentNoteOption])

    const listenToHeader = () => {
        setDrawerToggle(!drawerToggle)
    }

    return (
        <Box>
            {/* <Header listenToHeader={listenToHeader}/> */}
            <PrimarySearchAppBar listenToHeader={listenToHeader} />
            <Drawer1 drawerToggle={drawerToggle} listenToDrawer={listenToDrawer} />
            <Box>
                {
                    toggle ? <Takenote2 listenToTakeNoteTwo={listenToTakeNoteTwo} autoRefresh={autoRefresh} /> : <TakeNote1 listenToTakeNoteOne={listenToTakeNoteOne} />
                }
            </Box>
            <Box className={classes.BoxNote3}
            >
                {
                    noteList.map((note) => (<Takenote3 note={note} autoRefresh={autoRefresh} />))
                }
            </Box>
        </Box>
    )
}
export default Dashboard