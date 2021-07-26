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
import { makeStyles,Grid,Paper, useTheme,TextField,MenuItem,Box,Button } from '@material-ui/core';
import UserCreation from './UserCreation';
import {
  createStyles,
  alpha,
  Theme,
  withStyles,
} from '@material-ui/core/styles';
import theme from '../theme';
import {ThemeProvider} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width:'100vw',
      height:'100vh',
      display: 'flex',
     // background: 'linear-gradient(to bottom left, #ff5b74 0%, #009edd 100%)',
      '& label.Mui-focused': {
        color: '#000',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#000',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#000',
        },
        '&:hover fieldset': {
          borderColor: '#000',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#000',
        },
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
      <Divider />
      <List>
            <ListItem button key={'User Creation'} onClick={()=>changeState(1)}>
                <ListItemText primary={'User Creation'} />
            </ListItem>
            <ListItem button key={'Starred'} onClick={()=>changeState(2)}>
                <ListItemText primary={'Starred'} />
            </ListItem>
            <ListItem button key={'Send email'} onClick={()=>changeState(3)}>
                <ListItemText primary={'Send email'} />
            </ListItem>
      </List>
      <Divider />
      
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
            {content}
            <ThemeProvider theme={theme}>

            <Grid style={{ background: 'linear-gradient(to bottom left, #ff5b74 0%, #009edd 100%)'}}>
              <Paper style={{ padding: 20 }}>
              <Typography component="h1" variant="h5">
            Create Users
          </Typography>
          <form  noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="firstname"
              label="First Name"
              type="firstname"
              id="firstname"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="surname"
              label="Surname"
              name="surname"
              autoComplete="surname"
              autoFocus
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phonenumber"
            label="Phone Number"
            name="phonenumber"
            autoComplete="phonenumber"
            autoFocus
          />
          <TextField
          variant="outlined"
          margin="normal"
          style={{ color: '#FFFFFF'}}
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
       <TextField id="select" label="Role" value="20" select>
  <MenuItem value="10">Admin</MenuItem>
  <MenuItem value="20">Staff</MenuItem>
</TextField>
            <br></br>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="primary"
             // className={classes.submit}
              onClick={()=>changeState(1)}
            >
              Create User
            </Button>
            <Grid container>
             
            </Grid>
            
          </form>
              </Paper>
            </Grid>
            </ThemeProvider>

      </main>
    </div>

  );
}