import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
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
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import NotesIcon from '@mui/icons-material/Notes';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import WorkIcon from '@mui/icons-material/Work';
import ClassIcon from '@mui/icons-material/Class';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MapIcon from '@mui/icons-material/Map';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Notes from './Notes';
import PPTs from './PPTs'
import CampusMap from './CampusMap';
import CampusEvents from './CampusEvents';
import CampusNews from './CampusNews';
import JobBoard from "./JobBoard";
import LibraryResources from "./LibraryResources";
import StudentDirectory from "./StudentDirectory";
import StudyGroups from "./StudyGroups";
import TutoringServices from "./TutoringServices";
import { Dialog, DialogActions, DialogContent, Button, DialogTitle, DialogContentText } from '@mui/material';
import Draggable from 'react-draggable';
import Paper from '@mui/material/Paper';



const drawerWidth = 240;


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}


function Dashboard(props) {


  const [access, setAccess] = useState(false);
  const [profileClick, setProfileClick] = useState(false);
  const [myAccount, setMyAccount] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  function handleOpenNotification(){
    setNotificationOpen(true);
  }
  function handleCloseNotification(){
    setNotificationOpen(false);
  }

  function handleOpenMyAccount() {
    setMyAccount(true);
  }
  function handleCloseMyAccount() {
    setMyAccount(false);
  }
  function handleOpenProfileDialog() {

    setProfileClick(true)
  }
  function handleCloseProfileDialog() {

    setProfileClick(false)
  }

  const navigate = useNavigate();



  useEffect(() => {
    fetch(`http://${process.env.REACT_APP_API_URL}/api/protected`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
      .then(response => {
        if (!response.ok) {
          navigate("/login")
          throw new Error('Network response was not ok');

        }
        return response.json();
      })
      .then(data => {
        setAccess(data.message);
      })
      .catch(error => {
        console.error(error);
      });
  },);



  function handleLogOut() {

    fetch(`http://${process.env.REACT_APP_API_URL}/api/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        setAccess(false);
        navigate('/login')

      })
      .catch(error => {
        console.error(error);
      });

  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

      <MenuItem onClick={handleOpenProfileDialog}>Profile</MenuItem>
      {/*here we added the dialog */}


      <Dialog
        open={profileClick}
        onClose={handleCloseProfileDialog}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Hello 👋 {localStorage.getItem('username')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Welcome to the CollegeGig.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseProfileDialog}>
            Close
          </Button>

        </DialogActions>
      </Dialog>
      {/*here we close the dialog */}
      <MenuItem onClick={handleOpenMyAccount}>My account</MenuItem>
      

      <Dialog
       
        open={myAccount}
        onClose={handleCloseMyAccount}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"My Account"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          This is your account, here you can change your password
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseMyAccount}>
            Close
          </Button>
          
        </DialogActions>
      </Dialog>


      <MenuItem onClick={handleLogOut}>Logout</MenuItem>
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


      <MenuItem onClick={handleOpenNotification}>
        <IconButton
          size="large"
          aria-label="show 1 new notifications"
          color="inherit"
        >
          <Badge badgeContent={1} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <Dialog open={notificationOpen} onClose={handleCloseNotification}>
        <DialogTitle>version 1.2.0 released</DialogTitle>
      </Dialog>


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

      <MenuItem onClick={handleLogOut}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LogoutIcon />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  //handleside bar click function
  const [accessComponent, setAccessComponent] = useState(<Notes userId={localStorage.getItem('userId')} token={localStorage.getItem('authToken')} username={localStorage.getItem('username')} />);



  function handleNotesClick() {

    setAccessComponent(<Notes userId={localStorage.getItem('userId')} token={localStorage.getItem('authToken')} username={localStorage.getItem('username')} />)
    handleDrawerClose()
  }
  function handlePPTsClick() {

    setAccessComponent(<PPTs />)
    handleDrawerClose()

  }

  function handleLibraryResources() {
    setAccessComponent(<LibraryResources />)
    handleDrawerClose()
  }
  function handleStudyGroups() {
    setAccessComponent(<StudyGroups />)
    handleDrawerClose()
  }
  function handleCampusEvents() {
    setAccessComponent(<CampusEvents />)
    handleDrawerClose()
  }
  function handleJobBoard() {
    setAccessComponent(<JobBoard />)
    handleDrawerClose()
  }
  function handleTutoringServices() {
    setAccessComponent(<TutoringServices />)
    handleDrawerClose()
  }
  function handleCampusNews() {
    setAccessComponent(<CampusNews />)
    handleDrawerClose()
  }
  function handleStudentDirectory() {
    setAccessComponent(<StudentDirectory />)
    handleDrawerClose()
  }
  function handleCampusMap() {
    setAccessComponent(<CampusMap />)
    handleDrawerClose()
  }

  const iconData = [
    {
      icon: <NotesIcon />,
      text: 'Notes',
      onClick: handleNotesClick
    },
    {
      icon: <DocumentScannerIcon />,
      text: 'PPTs',
      onClick: handlePPTsClick
    },
    {
      icon: <LocalLibraryIcon />,
      text: 'Library resources',
      onClick: handleLibraryResources
    },
    {
      icon: <GroupIcon />,
      text: 'Study groups',
      onClick: handleStudyGroups
    },
    {
      icon: <EventIcon />,
      text: 'Campus events',
      onClick: handleCampusEvents
    },
    {
      icon: <WorkIcon />,
      text: 'Job board',
      onClick: handleJobBoard
    },
    {
      icon: <ClassIcon />,
      text: 'Tutoring services',
      onClick: handleTutoringServices
    },
    {
      icon: <NewspaperIcon />,
      text: 'Campus news',
      onClick: handleCampusNews
    },
    {
      icon: <AccessibilityIcon />,
      text: 'Student directory',
      onClick: handleStudentDirectory
    },
    {
      icon: <MapIcon />,
      text: 'Campus map',
      onClick: handleCampusMap
    },

  ];



  return (

    <div>
      {access ?
        <div>
          <div>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={handleDrawerOpen}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                  >
                    CollegeGig
                  </Typography>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                    <IconButton onClick={handleOpenNotification}
                      size="large"
                      aria-label="show 1 new notifications"
                      color="inherit"
                    >
                      <Badge badgeContent={1} color="error">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"

                    >
                      <AccountCircle />
                    </IconButton>
                    {/*Here we'll render the user name */}
                    <MenuItem onClick={handleProfileMenuOpen}>{localStorage.getItem('username')}</MenuItem>
                  </Box>
                  <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
              <Drawer
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                  },
                }}
                variant="persistent"
                anchor="left"
                open={open}
              >
                <DrawerHeader>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </DrawerHeader>
                <Divider />


                <List>
                  {iconData.map((data, index) => (
                    <ListItemButton key={data.text} onClick={data.onClick}>
                      <ListItemIcon >
                        {data.icon}
                      </ListItemIcon>
                      <ListItemText primary={data.text} />

                    </ListItemButton>

                  ))}

                </List>

              </Drawer>



              {renderMobileMenu}
              {renderMenu}
            </Box>
          </div>

          {/*
          <h1>Welcome {props.userid}</h1>
          <p>Welcome to your college a warm welcome</p>
          */}

          <div className='sidebar-tools-section'>

            {/*  <Notes userId={localStorage.getItem('userId')} token={localStorage.getItem('authToken')} /> */}
            {accessComponent}
            {/* here we are creating the Dialog for profile */}


          </div>

        </div>

        : <></>}
    </div>

  )
}

export default Dashboard;

