import { Typography, Card, CardContent, CardMedia, CardActions, Button, TextField} from '@material-ui/core';
import React from 'react';


function ResumeCard({id, summary, onDelete, onChange}) {
    const textShorten = (summaryString) => {
        var maxLength = 30;
        var continueString = "...";
        var stringLength = summaryString.length;
        if(stringLength<=maxLength){
            return summaryString;
        }else{
            var cutString = summaryString.substring(0, maxLength-continueString.length);
            return cutString + continueString;
        }
    }
    const deleteClick = () => {
        onDelete({id});
    }

    return (

    <Card style={{height: "420px"}}>
    <CardMedia
        style={{height: "140px"}}
        title={id}
        src={"https://picsum.photos/200"}
        image={"https://picsum.photos/200"}
        />

    <CardContent>
      <Typography variant = "h6">Resume {id}</Typography>
      <Typography variant = "subtitle1">{textShorten(summary)}</Typography>
    </CardContent>
        
    
    <CardActions>
          <Button onClick={deleteClick} color = "primary">Delete</Button>
    </CardActions>
    </Card>
    )
}
export default ResumeCard;