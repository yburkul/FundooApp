import React from 'react'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushTwoTone from '@mui/icons-material/BrushTwoTone';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { Box, InputBase, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    TakeNoteHead: {
        width: "100vw",
        height: "6vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        position: "relative",
        bottom: "30px"
    },
    TakeNote: {
        width: "55%",
        height: "100%",
        display: "flex",
        justifyContent: "end",
        alignItems: "flex-end",
    },
    Note1: {
        width: "70%",
        height: "100%",
        backgroundColor: "#fff",
        borderColor: "#e0e0e0",
        borderRadius: 10,
        fontSize: "18px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",        
    },
    NoteTake:{
        width: "75%",
        fontWeight: "400",
        opacity: 0.9,
        display: "flex",
        alignItems: "flex-start",
        "& #note-take":{
            position: "relative",
            left:"15px"
        }
    },
    NoteCheckBox:{
        width: "6%",
        opacity: "0.5",
        display: "flex",
        alignItems: "center"
    },
    Brush:{
        width: "6%",
        opacity: "0.5",
        display: "flex",
        alignItems: "center"
    },
    TakenoteImage:{
        width: "6%",
        opacity: "0.5",
        display: "flex",
        alignItems: "center"
    },

    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        TakeNoteHead: {
            width: "100vw",
            height: "auto",
            display: "relative",
            right: "5px"
        },
        TakeNote: {
            width: "100%",
            height: "100%",
        },
        Note1: {
            width: "82%",
            height: "100%",
            justifyContent: "space-around",
        },
        NoteTake:{
            width: "50%",
            fontWeight: "400",
            opacity: 0.9,
        },
        NoteCheckBox:{
            width: "10%"
        },
        Brush:{
            width: "10%"
        },
        TakenoteImage:{
            width: "10%"
        },
    },

    ['@media only screen and (min-width :481px) and (max-width :768px)']: {
        TakeNoteHead: {
            width: "100vw",
            height: "auto",
        },
        TakeNote: {
            width: "100%",
            height: "100%",
        },
        Note1: {
            width: "82%",
            height: "100%",
            justifyContent: "space-around",
        },
        NoteTake:{
            width: "50%",
            fontWeight: "400",
            opacity: 0.9,
        },
        NoteCheckBox:{
            width: "10%"
        },
        Brush:{
            width: "10%"
        },
        TakenoteImage:{
            width: "10%"
        },
    },
    ['@media only screen and (min-width :769px) and (max-width :1024px)']: {
        TakeNoteHead: {
            width: "100vw",
            height: "5vh",
        },
        TakeNote: {
            width: "90%",
            height: "100%",
        },
        Note1: {
            width: "80%",
            height: "100%",
            justifyContent: "space-around",
        },
        NoteTake:{
            width: "70%",
            fontWeight: "400",
            opacity: 0.9,
        },
        NoteCheckBox:{
            width: "11%"
        },
        Brush:{
            width: "11%"
        },
        TakenoteImage:{
            width: "11%"
        },

    }
})

function TakeNote1(props) {
    const classes = useStyle()
    const openTakeNoteTwo = () => {
        props.listenToTakeNoteOne()
    }

    return (
        <Box className={classes.TakeNoteHead}>
            <Box className={classes.TakeNote}>
                <Paper elevation={3} className={classes.Note1}>
                    <Box className={classes.NoteTake} onClick={openTakeNoteTwo}>
                        <InputBase id='note-take' placeholder='Take a note..' />
                    </Box>
                    <Box className={classes.NoteCheckBox}>
                        <CheckBoxOutlinedIcon />
                    </Box>
                    <Box className={classes.Brush}>
                        <BrushTwoTone />
                    </Box>
                    <Box className={classes.TakenoteImage}>
                        <ImageOutlinedIcon />
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}
export default TakeNote1