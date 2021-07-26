import { Typography,Grid,FormControlLabel,Box,TextField,Checkbox,LinearProgress, Link, makeStyles, CssBaseline, AppBar, Toolbar, Paper, Stepper, Step, StepLabel, Button } from '@material-ui/core';
import React from 'react';
import theme from '../theme';
import {ThemeProvider,FormControl,Radio,RadioGroup,FormLabel,Divider} from '@material-ui/core';


interface OtpProps {
    changeState:(newstate:number)=>void;
}

  
  const useStyles = makeStyles((theme) => ({
    root:{
      '& label.Mui-focused': {
      },
      "& .MuiLinearProgress-colorPrimary": {
        backgroundColor: "#E8E8E8"
      },
      "& .MuiLinearProgress-barColorPrimary": {
        backgroundColor: "#009F51"
      },
    },
    appBar: {
      position: 'relative',
      width:'100vw'
    },
    TextField: {
      
      width:'5vw'
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
        height:'790px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '0%',

      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      borderRadius: '0%',
      justifyContent: 'flex-end',
      width:'5vw',
    },
    
    button: {
      marginTop: theme.spacing(3),
      borderRadius: '0%',
      marginLeft: theme.spacing(1),
      width:'5vw',
    },
  }));

 
  
const Otp: React.FC<OtpProps> = ({changeState }: OtpProps) => {
    const classes = useStyles();
    
    return(
      <ThemeProvider theme={theme}>
        <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
      <Toolbar>
        <Grid container justify="flex-end" style={{ padding: 0 }}>
        <Button
              type="submit"
              variant="outlined"
              style={{backgroundColor: '#fff', color: '#000',padding: "0.5vh 1.8vw",textTransform: 'none'}}
              onClick={()=>changeState(2)}
            >
              Sign Out
            </Button>
        </Grid>
          
        </Toolbar>
      </AppBar>
     
        <Paper className={classes.paper}>
        <Grid >Business Setup</Grid><Grid container justify="flex-end">02/04</Grid>
          <LinearProgress color="secondary"  variant="determinate" value={50} />
<Box style={{padding:"3vw" }}>
        <Typography variant="h6" color="inherit"  noWrap>
           <b> Your business details.</b>
          </Typography>
          <Box style={{height:"0.5vw" }}></Box>
          What is your business registration number?
          
          <TextField id="outlined-basic" fullWidth label="Business Registration Number" variant="outlined" />

          <br></br>
         
      <Box height="5"></Box>

      <Grid container justify="flex-end">
          <React.Fragment>
           
          <Button
              type="submit"
              variant="outlined"
              style={{padding: "1vh 3.8vw",textTransform: 'none',backgroundColor: '#fff', color: '#000', border:"none",outline:"none"  }}
              onClick={()=>changeState(5)}
            >
              <u>Skip Step</u>
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{padding: "1vh 3.8vw",textTransform: 'none'  }}
              onClick={()=>changeState(5)}
            >
              Continue
            </Button>
          </React.Fragment>
          </Grid>
        </Box>
        </Paper>
 
    </React.Fragment>
    
    </ThemeProvider>
    
    );
}


export default Otp;