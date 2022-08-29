import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import MoreVertOutlined from '@mui/icons-material/MoreVertOutlined';
import { makeStyles } from '@mui/styles';
import { connect } from 'react-redux';

const useStyle = makeStyles({
  KeepBox: {
    width: "8%",
  },
  MainBox: {
    width: "100%",
  },

  ['@media only screen and (min-width :320px) and (max-width :480px)']: {
    KeepBox: {
      width: "60%"
    },
    MainBox: {
      width: "100%",
    },
  },
  ['@media only screen and (min-width :481px) and (max-width :600px)']: {
    MainBox: {
      width: "100%",
    },
    KeepBox: {
      width: "60%"
    },
  },
  ['@media only screen and (min-width :601px) and (max-width :768px)']: {
    MainBox: {
      width: "100%",
    },
    KeepBox: {
      width: "20%"
    },
    IconsBox33: {
      width: "30%",
      position: 'relative',
      left: "30px"
    },
    IconsBox2: {
      width: "20%",
      position: 'relative',
      left: "20px"
    },
  },
  ['@media only screen and (min-width :769px) and (max-width :900px)']: {
    MainBox: {
      width: "100%",
    },
    KeepBox: {
      width: "10%"
    },
    IconsBox33: {
      width: "20%",
    },
    IconsBox2: {
      width: "10%",
    },
    iconSerach: {
      position: 'relative',
      left: "270px"
    },
  },
  ['@media only screen and (min-width :901px) and (max-width :1200px)']: {
    KeepBox: {
      width: "80%",
    },
    IconsBox33: {
      width: "30%",
    },
    IconsBox2: {
      width: "10%"
    },
    SearchInputBox: {
      width: "400px",
      height: "45px",
    },
  }
})

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f1f3f4',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  borderRadius: '10px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0.6,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '75ch', height: '4ch'
    },
  },
}));

function PrimarySearchAppBar(props) {
  const classes = useStyle()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const openMenu = () => {
    props.listenToHeader()
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <SearchIcon />
          </Badge>
        </IconButton>
        <p>Search</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
        >
          <Badge color="error">
            <RefreshIcon />
          </Badge>
        </IconButton>
        <p>Refresh</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
        >
          <Badge color="error">
            <ViewAgendaOutlinedIcon />
          </Badge>
        </IconButton>
        <p>View</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
        >
          <Badge color="error">
            <SettingsOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Setting</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
        >
          <Badge color="error">
            <AppsRoundedIcon />
          </Badge>
        </IconButton>
        <p>Apps</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box className={classes.MainBox} sx={{ flexGrow: 1, backgroundColor: 'white' }}>
      <AppBar position="static" sx={{ backgroundColor: 'white' }} color='default'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
            <MenuIcon onClick={openMenu} />
          </IconButton>
          <Box
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1, border: '0px solid black' }}
          >
            <img src="../../Assert/keep.png" style={{ width: '40px' }} />
          </Box>
          <Typography
            className={classes.KeepBox}
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'flex', sm: 'flex', md: "flex", lg: 'block' }, color: '#5f6368', fontSize: '21px' }}
          >
            {props.title}
          </Typography>
          <Box sx={{ flexGrow: 0.3, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon className={classes.iconSerach} sx={{ display: { xs: 'none', md: 'block', sm: 'flex', lg: 'block' } }} />
            </SearchIconWrapper>
            <StyledInputBase
              className={classes.SearchInputBox}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}
            />
          </Search>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex' } }} />
          <Box className={classes.IconsBox33} sx={{ display: { xs: 'none', md: 'flex', sm: 'flex', lg: 'flex' }, opacity: 0.6, justifyContent: 'space-between' }} >
            <IconButton size="large" color="inherit">
              <RefreshIcon />
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
            >
              <ViewAgendaOutlinedIcon />
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
            >
              <SettingsOutlinedIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0.1, display: { xs: 'none', md: 'flex', sm: 'flex', lg: 'flex' } }} />
          <Box className={classes.IconsBox2} sx={{ display: { xs: 'none', md: 'flex', sm: 'flex', lg: 'flex' }, opacity: 0.6, justifyContent: 'space-around' }} >
            <IconButton
              size="large"
              color="inherit"
            >
              <AppsRoundedIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <img src="https://lh3.googleusercontent.com/ogw/AOh-ky3nMMd-NGkAmO0aDT1DR1P9H4nIOIKqIEoseb2A=s32-c-mo" style={{ borderRadius: 50 }} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none', lg: 'none', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    title: state.drawerReducer.title
  }
}
export default connect(mapStateToProps)(PrimarySearchAppBar);