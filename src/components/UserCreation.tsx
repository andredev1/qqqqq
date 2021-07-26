import React from 'react';

import { Box,Select,InputLabel,MenuItem, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, makeStyles, Paper, TextField, Typography } from '@material-ui/core';



interface UserCreationProps {
    changeState:(newstate:number)=>void;
}
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
     height: '100vh',
     width: '100vw'
    },
    image: {
      backgroundImage: 'url(pic1.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(20, 20),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
const UserCreation: React.FC<UserCreationProps> = ({changeState }: UserCreationProps) => {
    const classes = useStyles();

    return(
        <Grid container  className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>

          <Typography component="h1" variant="h5">
            Create User
          </Typography>
          <form className={classes.form} noValidate>
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
              className={classes.submit}
              onClick={()=>changeState(1)}
            >
              Create User
            </Button>
            <Grid container>
             
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    );
}


export default UserCreation;