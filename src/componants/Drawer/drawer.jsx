import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LightbulbOutlined from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  marginTop: 66,
  borderRight: '1px solid white' ,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: 66,
    borderRight: '1px solid white' ,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Drawer1(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const selectNotes = (noteOption) => {
    props.listenToDrawer(noteOption)
  }

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <Drawer variant="permanent" open={props.drawerToggle}>
        <List sx={{padding: '0px', display:'flex'}}>
            <ListItem button onClick={() => selectNotes('Notes')} 
            sx={{ display: 'flex',justifyContent: 'space-between',borderRadius: '0 25px 25px 0', '&:hover': {backgroundColor: '#feefc3'}}}>
                <ListItemIcon
                  sx={{
                    border: '0px solid blue',
                    marginLeft: '5px',
                    height: '30px'
                  }}
                >
                  <LightbulbOutlined/>
                </ListItemIcon>
                <ListItemText primary='Notes' sx={{border: '0px solid red', font:'14px', fontWeight:'500'}}/>
            </ListItem>
        </List>
        <List sx={{padding: '0px', display:'flex'}}>
            <ListItem button  onClick={() => selectNotes('Remainder')} 
            sx={{ display: 'flex', justifyContent: 'space-between',borderRadius: '0 25px 25px 0','&:hover': {backgroundColor: '#feefc3'}}}>
                <ListItemIcon
                  sx={{
                    border: '0px solid blue',
                    marginLeft: '5px',
                    height: '30px'
                  }}
                >
                  <NotificationsOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Remainder' sx={{border: '0px solid red', font:'14px', fontWeight:'500'}}/>
            </ListItem>
        </List>
        <List sx={{padding: '0px', display:'flex'}}>
            <ListItem button onClick={() => selectNotes('Edit')} 
            sx={{ display: 'flex', justifyContent: 'space-between',borderRadius: '0 25px 25px 0', '&:hover': {backgroundColor: '#feefc3'}}}>
                <ListItemIcon
                  sx={{
                    border: '0px solid blue',
                    marginLeft: '5px',
                    height: '30px'
                  }}
                >
                  <ModeEditOutlineOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Edit labels' sx={{border: '0px solid red', font:'14px', fontWeight:'500'}}/>
            </ListItem>
        </List>
        <List sx={{padding: '0px', display:'flex'}}>
            <ListItem button onClick={() => selectNotes('Archive')} 
            sx={{ display: 'flex', justifyContent: 'space-between',borderRadius: '0 25px 25px 0', '&:hover': {backgroundColor: '#feefc3'}}}>
                <ListItemIcon
                  sx={{
                    border: '0px solid blue',
                    marginLeft: '5px',
                    height: '30px'
                  }}
                >
                  <ArchiveOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Archive' sx={{border: '0px solid red', font:'14px', fontWeight:'500'}}/>
            </ListItem>
        </List>
        <List sx={{padding: '0px', display:'flex'}}>
            <ListItem button onClick={() => selectNotes('Trash')} 
            sx={{ display: 'flex', justifyContent: 'space-between',borderRadius: '0 25px 25px 0', '&:hover': {backgroundColor: '#feefc3'}}}>
                <ListItemIcon
                  sx={{
                    border: '0px solid blue',
                    marginLeft: '5px',
                    height: '30px'
                  }}
                >
                  <DeleteOutlineOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Trash' sx={{border: '0px solid red', font:'14px', fontWeight:'500'}}/>
            </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}