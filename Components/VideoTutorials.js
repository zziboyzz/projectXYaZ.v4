import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    tabs: {
        minHeight: 600,
        width: "100%",
        backgroundColor: "white",
        // alignItems: "center",
        display: "flex",
        // justifyContent: "center",
        borderLeft: "1px solid lightgray",
        borderRight: "1px solid lightgray",
    },
})
const VideoTutorial = () => {
    const classes = useStyles();
    return (
        <div className={classes.tabs}>
           <iframe width="580" height="360" 
           src={"https://web.microsoftstream.com/embed/video/697bc144-ee4a-4f12-a0d1-77a1b37bcb20?autoplay=false&amp;showinfo=true"}
           allowFullScreen 
           style={{border: "none", paddingTop: 5}}>

           </iframe>
        </div>
    )
}

export default VideoTutorial
