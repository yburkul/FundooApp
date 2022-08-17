import React from 'react'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ViewStreamSharpIcon from '@mui/icons-material/ViewStreamSharp';

function Header(props) {
  const openMenu = () =>{
    props.listenToHeader()
  }
  return (
    <div className='keep-header'>
        <div className='main-keep-name'>
            <div className='main-menu'>
              <MenuIcon onClick = {openMenu}/>
            </div>
            <div className='keep-logo'>
               <img id="keep-img" src="../../Assert/keep.png"/>
            </div>
            <div className='keep-name'>
              <span>Keep</span>
            </div>
        </div>
        <div className='blank-box1'></div>
        <div className='search-box'>
            <SearchIcon id='search-icon'/>
            <input id="text-search" placeholder="Search" name="search"/>
        </div>
        <div className='blank-box2'></div>
        <div className='icon-bar'>
            <div className='refresh'>
              <RefreshIcon/>
            </div>
            <div className='list-view'>
              <ViewStreamSharpIcon/>
            </div>
            <div className='setting'>
              <SettingsIcon/>
            </div>
        </div>
        <div className='blank-box3'></div>
        <div className='login-logo'>
            <div className='apps'>
              <AppsRoundedIcon/>
            </div>
            <div className='login-icon'>
              <AccountCircleIcon id='LoginIcon'/>
            </div>
        </div>
    </div>
  )
}
export default Header