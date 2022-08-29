import React from 'react'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import Button from '@mui/material/Button';
import { Box, InputBase, Paper } from '@mui/material';
import { useState } from 'react';
import { postNote } from '../../services/dataService';
import ColorPopper from '../colorpropper/color';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    TakeNoteHead2: {
        width: "100vw",
        height: "20vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        position: "relative",
        bottom: "30px",
    },
    TakeNote2: {
        width: "55%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    Note2: {
        width: "70%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    Title2: {
        width: "100%",
        height: "30%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        "& #noteTitle2": {
            position: "relative",
            left: "15px",
            fontSize: "16px",
            fontWeight: "400",
            opacity: "0.9",
        },
        "& #pin": {
            position: "relative",
            right: "15px",
            opacity: "0.8"
        }
    },
    Notetake2: {
        width: "100%",
        height: "30%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        "& #noteAtake2": {
            position: "relative",
            left: "15px",
            fontSize: "16px",
            fontWeight: "400",
            opacity: "0.9",
        }
    },
    Close: {
        width: "100%",
        height: "30%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    Icon2: {
        width: "75%",
        height: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        opacity: "0.6",
        "& #undo": {
            opacity: 0.6
        },
        "& #redo": {
            opacity: 0.6
        }
    },
    CloseText: {
        position: "relative",
        right: "40px",
        top: "5px",
        fontSize: "15px",
        fontWeight: 500,
        opacity: 0.9,
        "& #closebutton": {
            color: "#000",
            textTransform: "none",
            position: "relative",
            top: "3px"
        }
    },

    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        TakeNoteHead2: {
            width: "100vw",
            height: "30vh",
            display: "relative",
            right: "5px"
        },
        TakeNote2: {
            width: "100%",
            height: "100%",
        },
        Note2: {
            width: "82%",
            height: "100%",
        },
        Title2: {
            "& #noteTitle2": {
                position: "relative",
                left: "15px",
                fontSize: "14px",
                fontWeight: "400",
                opacity: "0.9",
            },
            "& #pin": {
                position: "relative",
                right: "15px",
                opacity: "0.8",
                fontSize: "20px",
            }
        },
        Notetake2: {
            width: "100%",
            "& #noteAtake2": {
                fontSize: "15px",
            },
        },
        Close: {
            width: "100%",
            height: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
        },
        Icon2: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            opacity: "0.6",
            "& #iconAlert": {
                fontSize: "18px",
            },
            "& #iconAdd": {
                fontSize: "18px",
            },
            "& #iconColor": {
                fontSize: "10px",
            },
            "& #iconImg": {
                fontSize: "18px",
            },
            "& #iconArchive": {
                fontSize: "18px",
            },
            "& #iconMore": {
                fontSize: "18px",
            },
            "& #undo": {
                fontSize: "18px",
            },
            "& #redo": {
                fontSize: "18px",
            }
        },
        CloseText: {
            width: "80%",
            position: "relative",
            right: "0px",
            top: "0px",
            display: "flex",
            flexDirection: "row",
            justifyContent: 'flex-end',
            "& #closebutton": {
                top: "0px",
            }
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :768px)']: {
        TakeNoteHead2: {
            width: "100vw",
            height: "22vh",
            display: "relative",
            right: "5px"
        },
        TakeNote2: {
            width: "100%",
            height: "100%",
        },
        Note2: {
            width: "82%",
            height: "100%",
        },
        Title2: {
            "& #noteTitle2": {
                position: "relative",
                left: "15px",
                fontSize: "14px",
                fontWeight: "400",
                opacity: "0.9",
            },
            "& #pin": {
                position: "relative",
                right: "15px",
                opacity: "0.8",
                fontSize: "20px",
            }
        },
        Notetake2: {
            width: "100%",
            "& #noteAtake2": {
                fontSize: "15px",
            },
        },
        Close: {
            width: "100%",
            height: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
        },
        Icon2: {
            width: "90%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            opacity: "0.8",
            "& #iconAlert": {
                fontSize: "18px",
            },
            "& #iconAdd": {
                fontSize: "18px",
            },
            "& #iconColor": {
                fontSize: "10px",
            },
            "& #iconImg": {
                fontSize: "18px",
            },
            "& #iconArchive": {
                fontSize: "18px",
            },
            "& #iconMore": {
                fontSize: "18px",
            },
            "& #undo": {
                fontSize: "18px",
            },
            "& #redo": {
                fontSize: "18px",
            }
        },
        CloseText: {
            width: "80%",
            position: "relative",
            right: "0px",
            top: "0px",
            display: "flex",
            flexDirection: "row",
            justifyContent: 'flex-end',
            "& #closebutton": {
                top: "0px",
            }
        },
    },
    ['@media only screen and (min-width :769px) and (max-width :1024px)']: {
        TakeNoteHead2: {
            width: "100vw",
            height: "20vh",
            display: "relative",
            right: "5px"
        },
        TakeNote2: {
            width: "90%",
            height: "100%",
        },
        Note2: {
            width: "80%",
            height: "100%",
        },
        Title2: {
            "& #noteTitle2": {
                position: "relative",
                left: "15px",
                fontSize: "14px",
                fontWeight: "400",
                opacity: "0.9",
            },
            "& #pin": {
                position: "relative",
                right: "15px",
                opacity: "0.8",
                fontSize: "20px",
            }
        },
        Notetake2: {
            width: "100%",
            "& #noteAtake2": {
                fontSize: "15px",
            },
        },
        Close: {
            width: "100%",
            height: "30%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
        },
        Icon2: {
            width: "95%",
            height: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            opacity: "0.8",
            "& #iconAlert": {
                fontSize: "18px",
            },
            "& #iconAdd": {
                fontSize: "18px",
            },
            "& #iconColor": {
                fontSize: "10px",
            },
            "& #iconImg": {
                fontSize: "18px",
            },
            "& #iconArchive": {
                fontSize: "18px",
            },
            "& #iconMore": {
                fontSize: "18px",
            },
            "& #undo": {
                fontSize: "18px",
            },
            "& #redo": {
                fontSize: "18px",
            }
        },
        CloseText: {
            width: "30%",
            position: "relative",
            right: "25px",
            top: "0px",
            display: "flex",
            flexDirection: "row",
            justifyContent: 'flex-end',
            "& #closebutton": {
                top: "0px",
            }
        },
    }
})

function Takenote2(props) {
    const classes = useStyle()
    const [userInput, setUserInput] = useState({ title: '', description: '', color: '', isArchived: false })

    const closeTakeNoteTwo = () => {
        props.listenToTakeNoteTwo()
        console.log(userInput)
        postNote(userInput).then((response) => {
            console.log(response)
            props.autoRefresh()
        }).catch((error => console.log(error)))
    }

    const takingTitle = (event) => {
        setUserInput(previousState => ({
            ...previousState,
            title: event.target.value
        }))
        console.log(event.target.value)
    }

    const takingDescription = (event) => {
        setUserInput(previousState => ({
            ...previousState,
            description: event.target.value
        }))
        console.log(event.target.value)
    }

    const listenToColorPopper = (colour) => {
        setUserInput(prevState => ({
            ...prevState,
            color: colour
        }))
    }

    const archivedNote = () => {
        setUserInput(prevState => ({
            ...prevState,
            isArchived: true
        }))
        console.log("Note Archived")
    }

    return (
        <Box className={classes.TakeNoteHead2}>
            <Box className={classes.TakeNote2}>
                <Paper className={classes.Note2} style={{ backgroundColor: userInput.color }} elevation={3}>
                    <Box className={classes.Title2}>
                        <InputBase id='noteTitle2' placeholder="Title" onChange={takingTitle} />
                        <PushPinOutlinedIcon id='pin' />
                    </Box>
                    <Box className={classes.Notetake2}>
                        <InputBase id='noteAtake2' placeholder="Take a note.." onChange={takingDescription} />
                    </Box>
                    <Box className={classes.Close}>
                        <Box className={classes.Icon2}>
                            <AddAlertOutlinedIcon fontSize="small" id='iconAlert' />
                            <PersonAddAltOutlinedIcon fontSize="small" id='iconAdd' />
                            <Box style={{ width: '18px', height: '21px' }} id='iconColor'>
                                <ColorPopper listenToColorPopper={listenToColorPopper} action="create" />
                            </Box>
                            <ImageOutlinedIcon fontSize="small" id='iconImg' />
                            <ArchiveOutlinedIcon fontSize="small" id='iconArchive' onClick={archivedNote} />
                            <MoreVertOutlinedIcon fontSize="small" id='iconMore' />
                            <UndoIcon fontSize="small" id='undo' />
                            <RedoIcon fontSize="small" id='redo' />
                        </Box>
                        <Box className={classes.CloseText}>
                            <Button id='closebutton' onClick={closeTakeNoteTwo}>Close</Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}
export default Takenote2