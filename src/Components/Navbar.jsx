import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

let useStyles = makeStyles(
    {
        link:
        {
            textDecoration:"none",
            color:"white",
            fontFamily:"cursive",
            fontSize:"15px",
            margin:"20px"
        }
    }
)

function Navbar() {
    let classes= useStyles();
    return (
        <div>
            <AppBar position="static">
  <Toolbar>
    <NavLink exact to='/home' className={classes.link}>Home</NavLink>
    <NavLink exact to='/add' className={classes.link}>Add Image</NavLink>
    <NavLink exact to='/all' className={classes.link}>Image Gallery</NavLink>
    <NavLink exact to='/forum' className={classes.link}>Forum</NavLink>
    <NavLink exact to='/logout' className={classes.link}>Logout</NavLink>

  </Toolbar>
</AppBar>
        </div>
    )
}

export default Navbar
