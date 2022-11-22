import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core'
import { getEditImage, putEditImage } from '../Service/Api'
import { useHistory, useParams } from 'react-router-dom'

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

function EditImage() {
    let {id}=useParams();
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

    let putEditUserImage=async()=>
    {
      await putEditImage(id,img);
    }
    let putAllEditImage=()=>
    {
        putEditUserImage();
        history.push('/all')
    }
    let getEditUserImage=async()=>
    {
      let res=await getEditImage(id);
      setImg(res.data)
    }

    useEffect(()=>
    {
        getEditUserImage();
    },[])
    let classes= useStyles();
    return (
        <div>
        <Navbar/>
        <Typography className={classes.image}>Edit an Image</Typography>
        <FormGroup className={classes.form}>
        <FormControl>
  <InputLabel htmlFor="my-img">Enter an Image URL</InputLabel>
  <Input name="img" value={img.img } onChange={updateVal}/>
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-title">Title</InputLabel>
  <Input name="title" value={img.title} onChange={updateVal}/>
</FormControl>
<Button variant="contained" color="primary" onClick={putAllEditImage}>Click to Edit an image</Button>
</FormGroup>
        </div>
    )
}

export default EditImage
