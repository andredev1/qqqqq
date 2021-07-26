import React , { useState } from 'react';
import theme from '../theme';
import {ThemeProvider} from '@material-ui/core';
import { Box,Select,InputLabel,MenuItem, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, makeStyles, Paper, TextField, Typography } from '@material-ui/core';



interface SignUpProps {
    changeState:(newstate:number)=>void;
}

  const useStyles = makeStyles((theme) => ({
    root: {
     height: '100vh',
     width: '100vw',
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
const SignUp: React.FC<SignUpProps> = ({changeState }: SignUpProps) => {
    const classes = useStyles();
    const [username, setUserName] = React.useState("");
    const [first_name, setFirstName] = React.useState("");
    const [surname, setSurname] = React.useState("");
    const [phone_number, setPhoneNumber] = React.useState("");
    const [email_address, setEmailAddress] = React.useState("");
    const [role, setRole] = React.useState("");

    const changeUserName = (event: React.ChangeEvent<any>) => {
      setUserName(event.target.value);
  };
  const changeFirstName = (event: React.ChangeEvent<any>) => {
    setFirstName(event.target.value);
  };
  const changeSurname = (event: React.ChangeEvent<any>) => {
    setSurname(event.target.value);
};
const changePhoneNumber = (event: React.ChangeEvent<any>) => {
  setPhoneNumber(event.target.value);
};
const changeEmailAddress = (event: React.ChangeEvent<any>) => {
  setEmailAddress(event.target.value);
};
const changeRole = (event: React.ChangeEvent<any>) => {
  setRole(event.target.value);
};



    return(
      <ThemeProvider theme={theme}>
        <Grid container  className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>

          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={username}
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={changeUserName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="first_name"
              value={first_name}
              label="First Name"
              id="first_name"
              autoComplete="first_name"
              onChange={changeFirstName}
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="surname"
            value={surname}
            label="Surname"
            id="surname"
            autoComplete="surname"
            onChange={changeSurname}
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone_number"
            value={phone_number}
            label="phone_number"
            id="phone_number"
            autoComplete="phone_number"
            onChange={changePhoneNumber}
          />
          <TextField
         variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email_address"
            value={email_address}
            label="email_address"
            id="email_address"
            autoComplete="email_address"
            onChange={changeEmailAddress}
        />
      
            <br></br>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={()=>changeState(7)}
            >
              Sign Up
            </Button>
            <Grid container>
             
            </Grid>
            <Box mt={5}>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </ThemeProvider>
    );
}


export default SignUp;