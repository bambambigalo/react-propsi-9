import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles((theme)=>({

box: {
  flexGrow: 1,
  width:'100%',
  padding:0,
},
paper: {
  padding: theme.spacing(0),
  margin: 'auto',
  
},
image: {
  backgroundImage:'url(https://previews.123rf.com/images/chuyu/chuyu1504/chuyu150400025/38465494-city-interchange-closeup-at-night-beautiful-transport-infrastructure-background.jpg)',
  width: '100%',
  height: 200,
},
img: {
  margin: 'auto',
  width: '1000',
  maxHeight: '100%',
}
}) 
)


export default function GridApp (props) {
   const classes = useStyles();
  return (
   <div className={classes.box}>
   <Paper className={classes.paper} ekevation = {3} >

   <Grid ontainer spacing={2} >
   <Grid item >
    <ButtonBase className={classes.image}>
    <Grid>
    
     <Typography href='/gallery' gutterBottom variant="subtitle1" style={{ cursor: 'pointer', color: '#fff', fontSize: 40 }}>
         ПЕРЕХОД НА ДРУГУЮ СТРАНИЦУ
     </Typography>
     </Grid>
    </ButtonBase>
    
   </Grid>
   </Grid>

   </Paper>
   
   </div>
  )
}