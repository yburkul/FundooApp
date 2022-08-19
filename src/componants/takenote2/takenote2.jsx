import React from 'react'
import './takenote2.css'
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
import { InputBase } from '@mui/material';
import { useState } from 'react';
import { postNote } from '../../services/dataService';
import ColorPopper from '../colorpropper/color';

function Takenote2(props) {
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
        <div className='takeanotehead2'>
            <div className='takenote2'>
                <div className='note2' style={{ backgroundColor: userInput.color }}>
                    <div className='title'>
                        <InputBase id='noteTitle2' placeholder="Title" onChange={takingTitle} />
                        <PushPinOutlinedIcon id='pin' />
                    </div>
                    <div className='note-take2'>
                        <InputBase id='noteAtake2' placeholder="Take a note.." onChange={takingDescription} />
                    </div>
                    <div className='close'>
                        <div className='icon2'>
                            <AddAlertOutlinedIcon fontSize="small" />
                            <PersonAddAltOutlinedIcon fontSize="small" />
                            <div style={{ width: '18px', height: '21px' }}><ColorPopper listenToColorPopper={listenToColorPopper} action="create" /></div>
                            <ImageOutlinedIcon fontSize="small" />
                            <ArchiveOutlinedIcon fontSize="small" onClick={archivedNote} />
                            <MoreVertOutlinedIcon fontSize="small" />
                            <UndoIcon fontSize="small" id='undo' />
                            <RedoIcon fontSize="small" id='redo' />
                        </div>
                        <div className='closetext'>
                            <Button id='closebutton' onClick={closeTakeNoteTwo}>Close</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Takenote2