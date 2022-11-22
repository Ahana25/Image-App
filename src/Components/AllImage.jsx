import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { deleteImage, getImage } from '../Service/Api';
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

let useStyles=makeStyles(
    {
            root: {
              maxWidth: 345,
              margin:"39px",
              display:"inline-block"
            },
            media: {
              height: 190,
            }
          
    }
)

function AllImage() {
    let classes=useStyles();
    let [imgdata,setImg]=useState([])
let getAllImage=async()=>
{
  let res= await getImage();
  console.log(res.data)
 setImg(res.data)
}
let deleteAllImage=async(id)=>
{
   await deleteImage(id)
   getAllImage();
}

    useEffect(()=>
    {
        getAllImage();
    },[])
    return (
        <div>
        <Navbar/>
        <Typography>
            {imgdata.map((list)=>
            {
                return(
                    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={list.img}
          title={list.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {list.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained" component={Link} to={`/edit/${list.id}`}>
          Edit Title
        </Button>
        <Button size="small" color="secondary" variant="contained" onClick={()=>deleteAllImage(list.id)}>
          Delete Image
        </Button>
      </CardActions>
    </Card>
   
                )
            })}
            </Typography>
        </div>
    )
    
}

export default AllImage
