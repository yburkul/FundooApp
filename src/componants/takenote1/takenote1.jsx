import React from 'react'
import './takenote1.css'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushTwoTone from '@mui/icons-material/BrushTwoTone';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { InputBase } from '@mui/material';

function TakeNote1(props) {
    const openTakeNoteTwo = () =>{
        props.listenToTakeNoteOne()

    }

  return (
    <div className='takenotehead' onClick={openTakeNoteTwo}>
        <div className='takenote'>
            <div className='note1'>
                <InputBase id='notetake' placeholder='Take a note..'/>
                <div className='checkbox'>
                    <CheckBoxOutlinedIcon/>
                </div>
                <div className='brush'>
                    <BrushTwoTone/>
                </div>
                <div className='takenoteimage'>
                    <ImageOutlinedIcon/>
                </div>
            </div>
        </div>
    </div>
  )
}
export default TakeNote1