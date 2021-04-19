import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const useStyles = makeStyles({
  index_content: {
    height: "100%",
    borderLeft: "2px solid lightgray",
    borderRadius: 2,
    marginTop: 2,
    // padding: 5,
    // backgroundColor: "#238fff",
  }
})
export default function TopSearching({color}) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const closeNav = () => {
    document.getElementById("TopSearching").style.width = "0";
    document.getElementById("TopSearching").style.left = "99%";
    document.getElementById("content").style.visibility = "hidden";


  }
  const openNav = () => {
    document.getElementById("TopSearching").style.width = "21.9%";
    document.getElementById("TopSearching").style.left = "78%";
    document.getElementById("content").style.visibility = "visible";
  } 
  const setNav = () => {
    if (open === true){
      closeNav();
      setOpen(false);
    }
    if (open === false){
      openNav();
      setOpen(true);
    }
  }
  return (
    <div style={{top: 405, position: "fixed", left: "78%", zIndex: 0,
     height: "235px",
      width: "21.9%"}} id="TopSearching">
              <Paper elevation={5} 
                style={{ width: "100%", height: "100%",
                // borderTop: "2px solid " + color.mainColor,
                borderRadius: 5,
                // borderRight: "2px solid " + color.mainColor,
                // borderBottom: "2px solid " + color.mainColor,
                backgroundColor: "white"}}>
                <div onClick={() => setNav()} style={{width:"100%", height:"15px", 
                borderRadius: 2,
                backgroundColor: color.mainColor}}>
                 {
                  open===true ? 
                  <ArrowRightIcon fontSize="large"
                    style={{color: color.mainColor, 
                    border: "2px solid " + color.mainColor,
                    position: "absolute", width: "99%",
                    height: 13,
                    borderRadius: 4,
                    color: "white",
                    left: 0, backgroundColor: color.mainColor}}/> 
                    
                    
                    : 

                  
                  <ArrowLeftIcon fontSize="large"
                    style={{color: color.mainColor, 
                    border: "2px solid " + color.mainColor,
                    position: "absolute", width: "13px",
                    borderRadius: 4,
                    height: "100%",
                    top: 0, left: 0,
                    color: "white",
                     backgroundColor: color.mainColor}}/>
                  }
                </div>
                <div id="content" style={{height: "100%", left: 0, top:15, position: "absolute",
                  borderTop: "2px solid " + color.mainColor,                
                 width: "100%"}}>
                    Top:
                </div>
                         
              </Paper>
    </div>
    
  )
}
