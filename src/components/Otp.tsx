import { Typography,Box,TextField,Checkbox,Grid,LinearProgress, Link, makeStyles, CssBaseline, AppBar, Toolbar, Paper, Stepper, Step, StepLabel, Button } from '@material-ui/core';
import React from 'react';
import theme from '../theme';
import {ThemeProvider} from '@material-ui/core';


interface OtpProps {
    changeState:(newstate:number)=>void;
}


  
  const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
      width:'100vw',
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
    TextField: {
      
      width:'2vw'
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
        width:'50vw',
        height:'720px',
        marginLeft: 'auto',
        marginRight: 'auto',

      },
    },
    box:{
      height : '100px',
      width : '100px',
      background_color: '#000',
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
      width:'5vw',
    },
  }));

  
  
const Otp: React.FC<OtpProps> = ({changeState }: OtpProps) => {
    const classes = useStyles();
    const [num1, setNum1] = React.useState("");
    const [num2, setNum2] = React.useState("");
    const [num3, setNum3] = React.useState("");
    const [num4, setNum4] = React.useState("");
  
    const changeNum1 = (event: React.ChangeEvent<any>) => {
      setNum1(event.target.value);
    };
    const changeNum2 = (event: React.ChangeEvent<any>) => {
      setNum2(event.target.value);
    };
    const changeNum3 = (event: React.ChangeEvent<any>) => {
      setNum3(event.target.value);
    };
    const changeNum4 = (event: React.ChangeEvent<any>) => {
      setNum4(event.target.value);
    };
    if(num1!==""&&num2!==""&&num3!==""&&num4!==""){
      changeState(3);
    }
    
    return(
      <ThemeProvider theme={theme}>
        <React.Fragment >
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
        <Grid container justify="flex-end" style={{ padding: 0 }}>
        <Button
              type="submit"
              variant="outlined"
              style={{backgroundColor: '#fff', color: '#000'}}
              onClick={()=>changeState(2)}
            >
              Sign Out
            </Button>
        </Grid>
          
        </Toolbar>
      </AppBar>
      
        <Paper className={classes.paper}>
        <Box height="10%"></Box>
        <Grid container justify="center"> 
        <Grid container justify="center">

        <Box
      sx={{
        width: 100,
        height: 100,
        bgcolor: '#DCDCDC',
        borderRadius: '50%',
       
      }}
    />
    </Grid>
            <Typography variant="h6" color="inherit" noWrap>
        <b>Please enter your OTP.</b>
          </Typography>
          </Grid>

          <Grid container justify="center">
          An OTP has been sent to  &nbsp;<b> name@gmail.com</b>
          </Grid>
          <Grid container justify="center">
          Please verify your account before continuing
          <br></br>
          <br></br>
          </Grid>
          <Grid container justify="center">
          <div style={{ display: 'inline-flex' }}>
            <div>
            <TextField 
             style = {{width: 60}}
                variant="outlined"
                margin="normal"
                required
                name="num1"
                value={num1}
                label="0"
                id="num1"
                autoComplete="num1"
                onChange={changeNum1}
                />            </div>
            <div style={{ alignSelf: 'center' }}>
            &nbsp;<TextField style = {{width: 60}} 
                variant="outlined"
                margin="normal"
                required
                name="num2"
                value={num2}
                label="0"
                id="num2"
                autoComplete="num2"
                onChange={changeNum2} 
                />
                            </div>
            <div>
            &nbsp;<TextField style = {{width: 60}} 
                variant="outlined"
                margin="normal"
                required
                name="num3"
                value={num3}
                label="0"
                id="num3"
                autoComplete="num3"
                onChange={changeNum3}
                />
                            </div>
            <div style={{ alignSelf: 'center' }}>
            &nbsp;<TextField style = {{width: 60}} 
                variant="outlined"
                margin="normal"
                required
                name="num4"
                value={num4}
                label="0"
                id="num4"
                autoComplete="num4"
                onChange={changeNum4}
                 />
                             </div>
        </div>
        </Grid>
          <React.Fragment>
          
          </React.Fragment>
          <Grid container justify="center">
          <br></br>
          If the inbox is empty please check your spam folder
          </Grid>
          <Grid container justify="center">
          or click here to resend.
          </Grid>
          <Grid container justify="center">
          <br></br>
          Or check your spam box
          </Grid>
        </Paper>
 
    </React.Fragment>
    </ThemeProvider>
    
    );
}


export default Otp;