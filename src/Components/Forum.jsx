import { Button, List, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { getUserData } from '../Service/Api';
import { makeStyles } from '@material-ui/styles';
import Navbar from './Navbar';

let useStyles= makeStyles(
    {
        table:
        {
            width:"90%",
            margin:"30px",
        },
        head:
        {
            background:"red",
            
        },
        cell:
        {
            fontSize:"15px",
            fontFamily:"cursive"
        }
    }
)

function Forum() {
    let classes= useStyles();
    let[users,setUsers]=useState([]);
    let getAllUserData=async()=>
    {
       let res= await getUserData();
       setUsers(res.data)
    }
    useEffect(()=>
    {
        getAllUserData();
    },[])
    return (
        <div>
        <Navbar/>
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell className={classes.cell}>User ID</TableCell>
            <TableCell align="center" className={classes.cell}>Username</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                {users.map((list)=>
                {
                    return(
                        <TableRow >
              <TableCell>
                {list.id}
              </TableCell>
              <TableCell align="center" className={classes.cell}>{list.name}</TableCell>
              <TableCell align="center" className={classes.cell}><Button variant="contained" color="primary">Contact</Button></TableCell>
            </TableRow>
                    )
                })}
                </TableBody>
        </Table>
        </div>
    )
}

export default Forum
