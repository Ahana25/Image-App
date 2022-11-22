import React from 'react'
import Navbar from './Navbar'
import collage from '../Images/collage.jpg'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

let useStyles=makeStyles(
   {
       img:
       {
           width:"100%"
       },
       head:
       {
           fontSize:"40px",
           textAlign:"center",
           color:"yellow",
           fontFamily:"cursive"

       }
   }

)

function Home() {
    let classes=useStyles();
    return (
        <div>
        <Navbar/>
        <Typography className={classes.head}>Welcome to the Image Gallery!</Typography>
           <img src={collage } alt="Collage" className={classes.img}/>
        </div>
    )
}

export default Home
