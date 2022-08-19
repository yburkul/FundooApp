import React, { useState } from 'react'
import './takenote3.css'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { InputBase } from '@mui/material';
import ColorPopper from '../colorpropper/color';
import { archiveNotes, deleteNotes, updateNotes } from '../../services/dataService'
import DeleteOutlineOutlined from '@mui/icons-material/DeleteOutlineOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';


function Takenote3(props) {
    const [userInput, setUserInput] = useState({ noteId: '', title: '', description: '', color: '', isArchived: false  })
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
        border: '1px solid grey',
        borderRadius: 3,
        backgroundColor: userInput.color,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = (userInputs) => {
        setOpen(true);
        setUserInput({ noteId: userInputs.id, title: userInputs.title, description: userInputs.description})
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
        <div className='takenote3'>
            <div className='Note-Box' style={{ backgroundColor: props.note.color }}>
                <div className='title-pin-des'>
                    <div className='title3' onClick={() => handleOpen(props.note)}>
                        <InputBase className='note-title3' id='noteTitle3' defaultValue={props.note.title} />
                    </div>
                    <div className='pinIcon'><PushPinOutlinedIcon id='pin3' /></div>
                    <div className='TakeNote3' onClick={() => handleOpen(props.note)}>
                        <InputBase id='noteAtake3' defaultValue={props.note.description} />
                    </div>
                </div>
                <div className='icon3'>
                    <AddAlertOutlinedIcon fontSize="small" />
                    <PersonAddAltOutlinedIcon fontSize="small" />
                    <div style={{ width: '18px', height: '21px' }}>
                        <ColorPopper id={props.note.id} action="update"
                            listenToColorUpdate={listenToColorUpdate} autoRefresh={props.autoRefresh} />
                    </div>
                    <DeleteOutlineOutlined fontSize="small" onClick={() => deleteNote(props.note.id)} />
                    <ArchiveOutlinedIcon fontSize="small" onClick={() => updateArchive(props.note.id)} />
                    <MoreVertOutlinedIcon fontSize="small" />
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='takeanotehead2-3'style={{ backgroundColor: props.note.color }}>
                        <div className='takenote2-3'>
                            <div className='note2-3'>
                                <div className='title2-3'>
                                    <InputBase id='noteTitle2-3' defaultValue={userInput.title} onChange={takingTitle} />
                                    <PushPinOutlinedIcon id='pin2-3' />
                                </div>
                                <div className='note-take2-3'>
                                    <InputBase id='noteAtake2-3' defaultValue={userInput.description} onChange={takingDescription} />
                                </div>
                                <div className='close2-3'>
                                    <div className='icon2-3'>
                                        <AddAlertOutlinedIcon fontSize="small" />
                                        <PersonAddAltOutlinedIcon fontSize="small" />
                                        <div style={{ width: '18px', height: '21px' }}>
                                            <ColorPopper  id={props.note.id} action="update" listenToColorUpdate={listenToColorUpdate}
                                             autoRefresh={props.autoRefresh}/>
                                        </div>
                                        <DeleteOutlineOutlined fontSize="small" onClick={() => deleteNote(props.note.id)} />
                                        <ArchiveOutlinedIcon fontSize="small" onClick={() => updateArchive(props.note.id)}/>
                                        <MoreVertOutlinedIcon fontSize="small" />
                                        <UndoIcon fontSize="small" id='undo2-3' />
                                        <RedoIcon fontSize="small" id='redo2-3' />
                                    </div>
                                    <div className='closetext2-3'>
                                        <Button id='closebutton2-3' onClick={saveupdate}>Close</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
export default Takenote3