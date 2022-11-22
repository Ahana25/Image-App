import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core' 
import { useHistory } from 'react-router-dom'
import { postData } from '../Service/Api'

let useStyles= makeStyles(
    {
        form:
        {
        margin:"220px 0 10px 120px",
            width:"80%"
        }
    }
)

function Login() {
    let [users,setUsers] = useState({
        name:""
    });
    let updateVal=(event)=>
    {
   setUsers({...users,[event.target.name]:event.target.value})
    }
    let history=useHistory();
let postUserData=async()=>
{
   await postData(users)
}
   let postAllData=()=>
   {
       postUserData();
       history.push('/home')
   }
    let classes= useStyles();
    return (
        <div>
        <FormGroup className={classes.form}>
            <FormControl>
  <InputLabel htmlFor="my-input">Username</InputLabel>
  <Input name="name" value={users.name} onChange={updateVal} />
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-pass">Password</InputLabel>
  <Input type="password"/>
</FormControl>
<Button variant="contained" color="primary" onClick={postAllData}>Click to Login</Button>
<Typography>Not a registered user? 
 <a href='/register'> Register Today!</a>
 </Typography>
</FormGroup>
        </div>
    )
}

export default Login
