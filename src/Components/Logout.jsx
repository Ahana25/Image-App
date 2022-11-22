import { Button } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core';

let useStyles=makeStyles(
    {
        btn:
        {
            margin:"300px 0 0 580px"
        }
    }
)

function Logout() {
    let classes= useStyles();
    let history=useHistory();
    let moveLogin=()=>
    {
        alert("Are you sure to logout?")
   history.push('/')
    }
    return (
        <div>
        <Navbar/>
            <Button variant="contained" color="primary" onClick={moveLogin} className={classes.btn}>Logout</Button>
        </div>
    )
}

export default Logout
