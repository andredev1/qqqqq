import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles,Grid,Paper, useTheme,TextField,MenuItem,Box,Button,LinearProgress } from '@material-ui/core';
import UserCreation from './UserCreation';
import theme from '../theme';
import {ThemeProvider} from '@material-ui/core';
import {
  createStyles,
  alpha,
  Theme,
  withStyles,
} from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width:'100vw',
      height:'100vh',
      display: 'flex',
     // background: 'linear-gradient(to bottom left, #ff5b74 0%, #009edd 100%)',
        "& .MuiLinearProgress-colorPrimary": {
          backgroundColor: "#E8E8E8"
        },
        "& .MuiLinearProgress-barColorPrimary": {
          backgroundColor: "#009F51"
        },
        

    },
    shape: {
      borderRadius: 0,
    },
    
    palette: {
      primary: {
        main: '#000',
      },
      secondary: {
        main: '#009F51',
      },
      
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
       
    },
  }),
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  changeState:(newstate:number)=>void;
}

export default function ResponsiveDrawer(props: Props) {
  const { window,changeState } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  var content: React.ReactNode[] = [];
  
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      
      <List>
      <Divider />
            <ListItem button key={'User Creation'} onClick={()=>changeState(1)}>
                <ListItemText primary={'User Creation'} />
            </ListItem>
            <Divider />

            <ListItem button key={'Starred'} onClick={()=>changeState(2)}>
                <ListItemText primary={'Starred'} />
            </ListItem>
            <Divider />

            <ListItem button key={'Send email'} onClick={()=>changeState(3)}>
                <ListItemText primary={'Send email'} />
            </ListItem>
            <Divider />
      </List>
      
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (

    <div className={classes.root} >
      <CssBaseline />
      
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
        
      </nav>
      <ThemeProvider theme={theme}>

      <main className={classes.content}>
      <Grid container justify="flex-end" style={{ padding: 0 }}>
          Name Surname
        </Grid>
        <div className={classes.toolbar} />
            {content}
            <Grid  style={{ padding: 20 }}>
            <Typography component="h1" variant="h5">
            Hi Name Surname          
            </Typography>

            </Grid>
            <Grid >
              <Paper style={{ padding: 20 }}>
              <Typography component="h1" variant="h5">
            Continue setup to start using PayJustNow          
            </Typography>
            We just need a few more details from you before you can get started
            <br></br>
            with PayJustNow. Let's get you set up!
            <br></br>
            <b>Next Step:</b>Fica Registration
          <form  noValidate>
         
        
            <br></br>
            <Button
              type="submit"
              
              variant="outlined"
              color="primary"
             // className={classes.submit}
              onClick={()=>changeState(1)}
            >
              Continue Setup
            </Button>
            <Grid container>
             
            </Grid>
            
          </form>
              </Paper>
              </Grid>
              <br></br>
              <Grid>
              <Paper style={{ padding: 20 }}>
              Your Progress....................................................25%
        <LinearProgress  variant="determinate" value={25} />

              </Paper>
            </Grid>
            

      </main>
      </ThemeProvider>
    </div>
    
    
  );
}