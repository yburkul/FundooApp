import React, { useState } from 'react'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { InputBase, Paper } from '@mui/material';
import ColorPopper from '../colorpropper/color';
import { archiveNotes, deleteNotes, updateNotes } from '../../services/dataService'
import DeleteOutlineOutlined from '@mui/icons-material/DeleteOutlineOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    TakeNote3: {
        width: "18vw",
        height: "20vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    NoteBox3: {
        width: "95%",
        height: "95%",
        display: "flex",
        flexDirection: "column",
    },
    TitlePinDes: {
        width: "100%",
        height: "62%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center"
    },
    Title3: {
        width: "80%",
        height: "50%",
        display: "flex",
        flexDirection: "row",
        "& #noteTitle-3": {
            position: "relative",
            left: "15px",
            top: "10px",
            fontSize: "16px",
            fontWeight: 400,
            opacity: 0.9
        },
    },
    Notetitle3: {
        width: "100%",
        height: "100%",
        display: "flex",
    },
    pinIcon: {
        width: "20%",
        height: "50%",
        display: "flex",
        "& #pin3": {
            position: "relative",
            left: "5px",
            top: "8px",
            opacity: 0.6
        }
    },
    TakeANote3: {
        width: "100%",
        height: "50%",
        display: "flex",
        alignItems: "center",
        "& #noteAtake3": {
            position: "relative",
            left: "15px",
            fontSize: "16px",
            fontWeight: 400,
            opacity: 0.9,
        }
    },
    Icon3: {
        width: "100%",
        height: "30%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        opacity: 0.6
    },

    Takeanotehead3: {
        width: "100%",
        height: "100%",
        backgroundColor: "aliceblue",
        borderRadius: 10
    },
    Takenote3: {
        width: "100%",
        height: "100%",
    },
    note3: {
        height: "30%",
    },
    title3: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        "& #noteTitle2-3": {
            position: "relative",
            left: "15px",
            fontSize: "16px",
            fontWeight: 400,
            opacity: 0.9
        },
        "& #pin2-3": {
            position: "relative",
            right: "15px",
            opacity: 0.8
        }
    },
    notetake3: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        "& #noteAtake2-3": {
            position: "relative",
            left: "15px",
            fontSize: "16px",
            fontWeight: 400,
            opacity: 0.9
        }
    },
    closebt3: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    iconBt3: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        opacity: 0.6,
        "& #undo2-3": {
            opacity: 0.6
        },
        "& #redo2-3": {
            opacity: 0.6
        }
    },
    closetext3: {
        fontSize: "15px",
        fontWeight: 500,
        opacity: 0.9,
        "& #closebutton2-3": {
            color: "#000",
            textTransform: "none"
        }
    },

    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        TakeNote3: {
            width: "100%",
            height: "25vh",
        },
        NoteBox3: {
            width: "100%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
        },

        Takeanotehead3: {
            width: "58%",
            height: "80%",
            backgroundColor: "aliceblue",
            borderRadius: 10,
            transform: 'translate(35%, 50%)',
        },
        Takenote3: {
            width: "100%",
            height: "100%",
        },

    },
    ['@media only screen and (min-width :481px) and (max-width :768px)']: {
        TakeNote3: {
            width: "100%",
            height: "20vh",
        },
        NoteBox3: {
            width: "100%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
        },
        Takeanotehead3: {
            width: "85%",
            height: "95%",
            backgroundColor: "aliceblue",
            borderRadius: 10,
            transform: 'translate(5%, 50%)',
        },
        Takenote3: {
            width: "100%",
            height: "100%",
        },

    },
    ['@media only screen and (min-width :769px) and (max-width :1024px)']: {
        TakeNote3: {
            width: "32vw",
            height: "15vh",
        },
        Takeanotehead3: {
            width: "100%",
            height: "100%",
            backgroundColor: "aliceblue",
            borderRadius: 10,
            transform: 'translate(5%, 5%)',
        },
    }
})

function Takenote3(props) {
    const classes = useStyle()

    const [userInput, setUserInput] = useState({ noteId: '', title: '', description: '', color: '', isArchived: false })
    const listenToColorUpdate = () => {
        props.autoRefresh()
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 160,
        borderRadius: 3,
        backgroundColor: userInput.color,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = (userInputs) => {
        setOpen(true);
        setUserInput({ noteId: userInputs.id, title: userInputs.title, description: userInputs.description })
    }
    const handleClose = () => setOpen(false);

    const updateArchive = (id) => {
        let archiveObj = { noteIdList: [id], isArchived: true }
        archiveNotes(archiveObj).then((response) => {
            console.log(response)
            props.autoRefresh()
        }).catch((error => console.log(error)))
    }

    const deleteNote = (id) => {
        let deleteObj = { noteIdList: [id], isDeleted: true }
        deleteNotes(deleteObj).then((response) => {
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

    const saveupdate = () => {
        updateNotes(userInput).then((response) => {
            console.log(response)
            props.autoRefresh()
        }).catch((error => console.log(error)))
        setOpen(false);
    }

    return (
        <Box className={classes.TakeNote3}>
            <Paper elevation={2} className={classes.NoteBox3} style={{ backgroundColor: props.note.color }}>
                <Box className={classes.TitlePinDes}>
                    <Box className={classes.Title3} onClick={() => handleOpen(props.note)}>
                        <span className={classes.Notetitle3} id='noteTitle-3'>{props.note.title}</span>
                    </Box>
                    <Box className={classes.pinIcon}><PushPinOutlinedIcon id='pin3' /></Box>
                    <Box className={classes.TakeANote3} onClick={() => handleOpen(props.note)}>
                        <span id='noteAtake3'>{props.note.description}</span>
                    </Box>
                </Box>
                <Box className={classes.Icon3}>
                    <AddAlertOutlinedIcon fontSize="small" />
                    <PersonAddAltOutlinedIcon fontSize="small" />
                    <Box style={{ width: '18px', height: '21px' }}>
                        <ColorPopper id={props.note.id} action="update"
                            listenToColorUpdate={listenToColorUpdate} autoRefresh={props.autoRefresh} />
                    </Box>
                    <DeleteOutlineOutlined fontSize="small" onClick={() => deleteNote(props.note.id)} />
                    <ArchiveOutlinedIcon fontSize="small" onClick={() => updateArchive(props.note.id)} />
                    <MoreVertOutlinedIcon fontSize="small" />
                </Box>
            </Paper>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box className={classes.Takeanotehead3} style={{ backgroundColor: props.note.color }}>
                        <Box className={classes.Takenote3}>
                            <Box className={classes.note3}>
                                <Box className={classes.title3}>
                                    <InputBase id='noteTitle2-3' defaultValue={userInput.title} onChange={takingTitle} />
                                    <PushPinOutlinedIcon id='pin2-3' />
                                </Box>
                                <Box className={classes.notetake3}>
                                    <InputBase id='noteAtake2-3' defaultValue={userInput.description} onChange={takingDescription} />
                                </Box>
                                <Box className={classes.closebt3}>
                                    <Box className={classes.iconBt3}>
                                        <AddAlertOutlinedIcon fontSize="small" />
                                        <PersonAddAltOutlinedIcon fontSize="small" />
                                        <Box style={{ width: '18px', height: '21px' }}>
                                            <ColorPopper id={props.note.id} action="update" listenToColorUpdate={listenToColorUpdate}
                                                autoRefresh={props.autoRefresh} />
                                        </Box>
                                        <DeleteOutlineOutlined fontSize="small" onClick={() => deleteNote(props.note.id)} />
                                        <ArchiveOutlinedIcon fontSize="small" onClick={() => updateArchive(props.note.id)} />
                                        <MoreVertOutlinedIcon fontSize="small" />
                                        <UndoIcon fontSize="small" id='undo2-3' />
                                        <RedoIcon fontSize="small" id='redo2-3' />
                                    </Box>
                                    <Box className={classes.closetext3}>
                                        <Button id='closebutton2-3' onClick={saveupdate}>Close</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}
export default Takenote3