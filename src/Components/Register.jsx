import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

function Register() {
    let history= useHistory();
    let moveLogin=()=>
    {
        history.push('/')
    }
    return (
        <div>
        <FormGroup>
            <FormControl>
  <InputLabel htmlFor="my-input">Name</InputLabel>
  <Input id="my-input" />
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-user">Username</InputLabel>
  <Input id="my-user" />
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-email">Email address</InputLabel>
  <Input id="my-email" />
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-pass">Password</InputLabel>
  <Input id="my-pass" />
</FormControl>
<Button variant="contained" color="primary" onClick={moveLogin}>Click to Register!</Button>
<Typography>Already a registered user?
<a href="/">Login now!</a>
</Typography>
</FormGroup>
        </div>
    )
}

export default Register
