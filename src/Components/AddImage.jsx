import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core'
import { postImage } from '../Service/Api'
import { useHistory } from 'react-router-dom'

let useStyles= makeStyles(
    {
        form:
        {
            width:"90%",
            margin:"200px 0 0 60px"
        },
        image:
        {
            fontFamily:"cursive",
            textAlign:"center",
            color:"green",
            fontSize:"50px",
            margin:"40px"

        }
    }
)

function AddImage() {
    let history=useHistory();
    let [img,setImg]=useState(
        {
            img:"",
            title:""
        }
    )
    let updateVal=(event)=>
    {
      setImg({...img,[event.target.name]:event.target.value})
    }

    let postUserImage=async()=>
    {
      await postImage(img);
    }
    let postAllImage=()=>
    {
        postUserImage();
        history.push('/all')
    }
    let classes= useStyles();
    return (
        <div>
        <Navbar/>
        <Typography className={classes.image}>Add an Image</Typography>
        <FormGroup className={classes.form}>
        <FormControl>
  <InputLabel htmlFor="my-img">Enter an Image URL</InputLabel>
  <Input name="img" value={img.img } onChange={updateVal}/>
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-title">Title</InputLabel>
  <Input name="title" value={img.title} onChange={updateVal}/>
</FormControl>
<Button variant="contained" color="primary" onClick={postAllImage}>Click to add image</Button>
</FormGroup>
        </div>
    )
}

export default AddImage
