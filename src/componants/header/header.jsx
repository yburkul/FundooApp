import React from 'react'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ViewStreamSharpIcon from '@mui/icons-material/ViewStreamSharp';
import { Grid } from '@mui/material';

function Header(props) {
  const openMenu = () => {
    props.listenToHeader()
  }
  return (
    <Grid container className='keep-header'>
      <Grid item lg={2} md={2} sm={2} className='main-keep-name'>
        <div className='main-menu'>
          <MenuIcon onClick={openMenu} />
        </div>
        <div className='keep-logo'>
          <img id="keep-img" src="../../Assert/keep.png" />
        </div>
        <div className='keep-name'>
          <span>Keep</span>
        </div>
      </Grid>
      <Grid item lg={0.5} md={0.5} sm={0.5} className='blank-box1'></Grid>
      <Grid item lg={6} md={6} sm={6}className='search-box'>
        <SearchIcon id='search-icon' />
        <input id="text-search" placeholder="Search" name="search" />
      </Grid>
      <Grid item lg={1} md={1} sm={1} className='blank-box2'></Grid>
      <Grid item lg={1} md={1} sm={1} className='icon-bar'>
        <div className='refresh'>
          <RefreshIcon />
        </div>
        <div className='list-view'>
          <ViewStreamSharpIcon />
        </div>
        <div className='setting'>
          <SettingsIcon />
        </div>
      </Grid>
      <Grid item lg={0.5} md={0.5} sm={0.5} className='blank-box3'></Grid>
      <Grid item lg={1} md={1} sm={1}  className='login-logo'>
        <div className='apps'>
          <AppsRoundedIcon />
        </div>
        <div className='login-icon'>
          <AccountCircleIcon id='LoginIcon' />
        </div>
      </Grid>
    </Grid>
  )
}
export default Header