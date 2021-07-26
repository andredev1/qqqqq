import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import DashBoard from '../components/DashBoard';
import Grid from '../components/Grid';
import BusinessSetup1 from '../components/BusinessSetup1';
import BusinessSetup2 from '../components/BusinessSetup2';
import BusinessSetup3 from '../components/BusinessSetup3';
import BusinessSetup4 from '../components/BusinessSetup4';
import { createTheme } from '@material-ui/core/styles';

import Otp from '../components/Otp';
import AddressForm from '../components/AddressForm';
import { CssBaseline } from '@material-ui/core';
import { useStyles } from "../styling/global"
import DashBoard_UserCreation from '../components/DashBoard_UserCreation';
interface MainDrawerProps {

}


const MainDrawer: React.FC<MainDrawerProps> = ({ }: MainDrawerProps) => {
    const classes = useStyles();
    const [state, setState] = useState(0);
    var display: React.ReactNode[] = [];

    if(state===0){
        display.push(<SignIn changeState={(newstate:number)=>changeState(newstate)}></SignIn>);
    }
    if(state===1){
        display.push(<Otp changeState={(newstate:number)=>changeState(newstate)}></Otp>);
    }
    if(state===2){
        display.push(<SignUp changeState={(newstate:number)=>changeState(newstate)}></SignUp>);
    }
    if(state===3){
        display.push(<BusinessSetup1 changeState={(newstate:number)=>changeState(newstate)}></BusinessSetup1>);
    }
    if(state===4){
        display.push(<BusinessSetup2 changeState={(newstate:number)=>changeState(newstate)}></BusinessSetup2>);
    }
    if(state===5){
        display.push(<BusinessSetup3 changeState={(newstate:number)=>changeState(newstate)}></BusinessSetup3>);
    }
    if(state===6){
        display.push(<BusinessSetup4 changeState={(newstate:number)=>changeState(newstate)}></BusinessSetup4>);
    }
    if(state===7){
        display.push(<Otp changeState={(newstate:number)=>changeState(newstate)}></Otp>);
    }
    if(state===8){
        display.push(<DashBoard changeState={(newstate:number)=>changeState(newstate)}></DashBoard>);
    }
    if(state===9){
        display.push(<DashBoard_UserCreation changeState={(newstate:number)=>changeState(newstate)}></DashBoard_UserCreation>);
    }
    if(state===2){
        display.push(<AddressForm changeState={(newstate:number)=>changeState(newstate)}></AddressForm>);
    }
    const changeState=((newstate:number)=>{
        setState(newstate);
    });
    return(
        <div className={classes.root}>
                <CssBaseline />
                <main >
        {display}
    </main>
    </div>
    );
}


export default MainDrawer;