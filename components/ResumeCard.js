import { Typography, Card, CardContent, CardMedia, CardActions, Button, TextField} from '@material-ui/core';
import React from 'react';


function ResumeCard({id, summary, handleDelete, handleChange}) {

    const deleteClick = () => {
        handleDelete({id});
    }

    return (

    <Card style={{height: "420px"}}>
    <CardMedia
        style={{height: "140px"}}
        title={id}

        />

    <CardContent>
      <Typography variant = "h6">Resume {id}</Typography>
      <Typography variant = "subtitle1">{summary}</Typography>
    </CardContent>
    
    <CardActions>
          <Button onClick={deleteClick} color = "primary">Delete</Button>
    </CardActions>
    </Card>
    )
}
export default ResumeCard;