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
export default function Comments({color, open, setOpen}) {
  const classes = useStyles();
  // const [open, setOpen] = useState(true);
  const closeNav = () => {
    document.getElementById("haha").style.width = "0";
    document.getElementById("haha").style.left = "99%";

  }
  const openNav = () => {
    document.getElementById("haha").style.width = "21.9%";
    document.getElementById("haha").style.left = "78%";
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
    <div style={{top: 57, position: "fixed", left: "99%", zIndex: 0,
     height: "350px",
      width: "0"}} id="haha">
              {open === false ? <div style={{position: "fixed", 
              backgroundColor: "lightgray",
              top: "57px",
              left: "78%",
              border: "2px solid " + color.mainColor,
              // borderLeft: "2px solid white" ,
              // borderBottom: "2px solid white",
              height: "20px", 
              borderRadius: "5px 5px 5px 5px",
              paddingTop: 2,
              width: "21%"  }}>
                A: 
              </div>
              :
              ""}
              <Paper elevation={5} 
                style={{ width: "98%", height: "100%",
                // borderTop: "2px solid " + color.mainColor,
                borderRadius: 0,
                borderRight: "8px solid " + color.mainColor,
                // borderBottom: "2px solid " + color.mainColor,
                backgroundColor: "white"}}>
                <div onClick={() => setNav()} style={{height:"100%", width:"8px", 
                borderRadius: 2,
                backgroundColor: color.mainColor}}>
                 {/* {
                  open===true ? 
                  <ArrowRightIcon fontSize="large"
                    style={{color: color.mainColor, 
                    border: "2px solid " + color.mainColor,
                    position: "absolute", width: "13px",
                    borderRadius: 4,
                    top: 150, left: 0, backgroundColor: "white"}}/> 
                    
                    
                    : 

                  
                  <ArrowLeftIcon fontSize="large"
                    style={{color: color.mainColor, 
                    border: "2px solid " + color.mainColor,
                    position: "absolute", width: "13px",
                    borderRadius: 4,
                    top: 150, left: 0, backgroundColor: "white"}}/>
                  } */}
                </div>
                <div style={{height: "100%", left: 8, top:0, position: "absolute",
                  borderTop: "2px solid " + color.mainColor,                
                 width: "100%"}}>
                    Chat
                  
                </div>
                <div style={{height: "29px", left: 8, top: 321  , 
                position: "absolute",
                  // borderTop: "2px solid " + color.secondColor,   
                  backgroundColor: color.mainColor,             
                  width: "96%"}}>
                  <input placeholder={"Chat..."} 
                  style={{
                  border: "none",
                  borderRadius: 1,
                  outline: "none",
                  backgroundColor: "lightgray", width: "60%", height: "24px"}}>
                  </input>
                </div>
                
              </Paper>
    </div>
    
  )
}
