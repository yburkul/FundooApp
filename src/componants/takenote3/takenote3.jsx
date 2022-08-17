import React from 'react'
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
import {archiveNotes, deleteNotes} from '../../services/dataService'
import DeleteOutlineOutlined from '@mui/icons-material/DeleteOutlineOutlined';

function Takenote3(props) {
    const listenToColorUpdate=()=>{
        props.autoRefresh()
    }
    const updateArchive = (id) => {
        let archiveObj = {noteIdList: [id], isArchived: true}
        archiveNotes(archiveObj).then((response) =>{
            console.log(response)
            props.autoRefresh()
        }).catch((error => console.log(error)))
    }

    const deleteNote = (id) => {
        let deleteObj = {noteIdList: [id], isDeleted: true}
        deleteNotes(deleteObj).then((response) =>{
            console.log(response)
            props.autoRefresh()
        }).catch((error => console.log(error)))
    }

  return (
    <div className='takenote3'>
        <div className='Note-Box' style={{backgroundColor:props.note.color}}>
            <div className='title3'>
                <InputBase id='noteTitle3' placeholder={props.note.title}/>
                <PushPinOutlinedIcon id='pin3'/>
            </div>
            <div className='TakeNote3'>
                <InputBase id='noteAtake3' placeholder={props.note.description}/>
            </div>
            <div className='icon3'>
                <AddAlertOutlinedIcon fontSize="small"/>
                <PersonAddAltOutlinedIcon fontSize="small"/>
                <div style={{width:'18px', height:'21px'}}>
                    <ColorPopper id={props.note.id} action="update" 
                    listenToColorUpdate={listenToColorUpdate} autoRefresh={props.autoRefresh}/>
                </div>
                <DeleteOutlineOutlined fontSize="small" onClick={() => deleteNote(props.note.id)}/>
                <ArchiveOutlinedIcon fontSize="small" onClick={() => updateArchive(props.note.id)}/>
                <MoreVertOutlinedIcon fontSize="small"/>
            </div>
        </div>  
    </div>
  )
}
export default Takenote3