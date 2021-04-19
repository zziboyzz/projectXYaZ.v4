import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CreateIcon from '@material-ui/icons/Create';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({
  index_content: {
    height: "100%",
    borderRadius: 4,
    marginTop: 2,
  },
  modifiedBtn:(props)=> ({
    borderRadius: 5,
    border: "none",
    outline: "none",
    '&:active': {
      backgroundColor: props.mainColor,
      color: "white",
    }
  })
})

export default function Home({color, checkAdmin}) {
  const classes = useStyles(color);
 
  //Hook database của mục thông báo 
  const [dbNotificationContent, setDbNotificationContent] = useState([]);
  const [dbNotificationHeader, setDbNotificationHeader] = useState([]);

  // Hook duyệt phần tử trong nhánh thong_bao
  useEffect(() => {
    const fetchData = async () => {

    //firebase access
    var dbObject = await firebase.database();
    var dbRefObjectContent = await dbObject.ref("thong_bao/noi_dung");
      dbRefObjectContent.on('value', (snapshot) => {
        const dbNotific = snapshot.val();
        if (dbNotific !== null)
          setDbNotificationContent(dbNotific)
          console.log(dbNotific)
      });
      var dbRefObjectHeader = await dbObject.ref("thong_bao/tieu_de");
      dbRefObjectHeader.on('value', (snapshot) => {
        const dbNotific = snapshot.val();
        if (dbNotific !== null)
          setDbNotificationHeader(dbNotific)
      });
    }
    fetchData()
  }, []) 

  //get key by value
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  //hàm xóa thông báo 
  const ClickRemove = (dbHeader, dbContent, x) => {
      var dbHd = dbHeader;
      var dbCt = dbContent;
      var indexOfX = dbCt.indexOf(x);
      dbCt.splice(indexOfX, 1);
      dbHd.splice(indexOfX, 1);
      firebase.database().ref("thong_bao/tieu_de").set(dbHd, (error) => {
        if (error) {
          // The write failed...
        } else {
          // Data saved successfully!
        }
      })
      firebase.database().ref("thong_bao/noi_dung").set(dbCt, (error) => {
      if (error) {
        // The write failed...
      } else {
        // Data saved successfully!
      }
    })
  }

  // Sửa đổi thông báo
  const [newText, setNewText] = useState("");
  const [currentText, setCurrentText] = useState("");
  const [newHeader, setNewHeader] = useState("");
  const [currentHeader, setCurrentHeader] = useState("");

    //Dialog logic;
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setcheckAdd(false);
    setAddHeader("");
    setAddNotice("");
  };
  const handleClickOpen = () => {
    setOpen(true)
  }
  const ClickModified = (dbHeader,newHeader, currentHeader, dbContent, newText, CurrentText, ) => {
    var indexOfX = dbContent.indexOf(CurrentText);
      setCurrentHeader(newHeader);
      setCurrentText(newText);
    firebase.database().ref("thong_bao/tieu_de").update({[indexOfX] : newHeader}, (error) => {
      if (error) {
        // The write failed...
      } else {
        // Data saved successfully!
      }
    })
    firebase.database().ref("thong_bao/noi_dung").update({[indexOfX] : newText}, (error) => {
      if (error) {
        // The write failed...
      } else {
        // Data saved successfully!
      }
    })
  }

  //Thêm thông báo
  const [checkAdd, setcheckAdd] = useState(false);
  const [addHeader, setAddHeader] = useState("");
  const [addNotice, setAddNotice] = useState("");
  const Add = (dbHeader, dbContent) => {
    var dbHd = dbHeader;
    var dbCt = dbContent;
    if (addHeader !== "" && addNotice !== ""){
      dbHd = [addHeader].concat(dbHd);
      dbCt = [addNotice].concat(dbCt);
      firebase.database().ref("thong_bao/tieu_de").set(dbHd, (error) => {
        if (error) {
          // The write failed...
        } else {
          // Data saved successfully!
        }
      })
      firebase.database().ref("thong_bao/noi_dung").set(dbCt, (error) => {
      if (error) {
        // The write failed...
      } else {
        // Data saved successfully!
      }
    })
  }
}
  //hàm addDialog:
  const addDialog = () => {
    return(
      <List>
      <ListItem>
        Tiêu đề
      </ListItem>
      <ListItem>
      <input style={{width: "100%"}}
      onChange={(e)=>setAddHeader(e.target.value)}
      ></input>
      </ListItem>
      <ListItem>
        Nội dung
      </ListItem>
      <ListItem>
      <textarea style={{minHeight: 350, width: "100%"}}
      onChange={(e)=>{setAddNotice(e.target.value), console.log(e.target.value)}}
      ></textarea>
      </ListItem>
      <ListItem>
       <button style={{}}
      onClick={()=>Add(dbNotificationHeader, dbNotificationContent)}
      >Enter</button>
      </ListItem>
      </List>
    )
  }

  //hàm xuất dữ liệu kiểm tra admins:
  const AdminModified = () => {
    return (
      <div>
        {checkAdmin === false ? "" : 
        <button onClick={()=>{handleClickOpen(), setcheckAdd(true)}}>
          <AddIcon style={{fontSize: 10}}/>
        </button>}
        {dbNotificationContent.map((each, index)=>(
        <div key={index}>
          <p style={{borderTop: "1px solid darkred"}}><b>{dbNotificationHeader[index]}</b></p>
          <div>{each}</div>
          {checkAdmin === false ? "" : 
          <button className={classes.modifiedBtn} 
          onClick={(e)=>ClickRemove(dbNotificationHeader, dbNotificationContent, each)}
          >
            <RemoveIcon style={{fontSize: 10}}/>
          </button>
          }
          {checkAdmin === false ? "" : 
          <button className={classes.modifiedBtn}
            onClick={(e)=>{handleClickOpen(), 
            setCurrentText(each), 
            setNewText(each),
            setCurrentHeader(dbNotificationHeader[index])
            setNewHeader(dbNotificationHeader[index])
            }}
            >
            <CreateIcon  style={{fontSize: 10}}/>
          </button>
          }
         
          </div>
        )
        )}
        
      </div>
    )
    }
  return (
    <div style={{top: 0, left: 0,
      backgroundImage: "url(/anh_nen.png)",backgroundSize: "cover",
      }}>
      <Grid container>
        
        <Grid item xs={12} className="resize_mobile" ></Grid>
        <Grid item xs={1} style={{}}></Grid>
        
        <Grid item container xs={12} sm={11} md={11} lg={11}>
        
          <Grid item xs={12} style={{
           color: color.mainColor,
          textAlign: "center"}}>
          </Grid>
          <Grid item container xs={12} sm={12} md={9} lg={9} style={{ }}>
            <Grid item xs={12} >
                <Paper square elevation={5} className={classes.index_content} >
                    <Grid container >
                        <Grid item xs={12}  style={{textAlign: "center",
                        
                         fontFamily: "Arial",
                         fontSize: 13}}>

                            <Paper square 
                            style={{
                              backgroundColor: color.mainColor, 
                              borderRadius: "3px 3px 0 0",
                              color: "white"}}>
                              <b>Trang chủ</b>
                            </Paper>
                            
                        </Grid>

                        <Grid item xs={12} style={{minHeight: 40}}></Grid>

                        <Grid item container xs={12} >
                      
                          <Grid item xs={12} 
                          style={{
                            textAlign: "center", 
                            fontFamily: "Arial", 
                            fontSize: 13}}>

                              <Paper square elevation={5} 
                              style={{
                                minHeight: 300,
                                maxHeight: 400,
                                backgroundColor: "white", 
                                textAlign: "left",
                                overflow: "auto",
                                padding: 10,
                                borderBottom: "2px solid " + color.mainColor
                               }}>
                                <u><b>{"Thông báo: "}{checkAdmin === true? "(Chào Admin: Quân)": ""}</b></u>
                                {AdminModified()}

                                {/* /Dialog */}
                                <Dialog onClose={handleClose} 
                                  aria-labelledby="simple-dialog-title" 
                                  fullWidth={true}
                                  open={open} 
                                  style={{zIndex:1000}} 
                                  style={{minHeight: 50}}
                                  >
                                  {/* CHECK ADD */}
                                  { checkAdd === false?                                    
                                    <List>
                                    <ListItem style={{width: "100%"}}>
                                      <b>Tiêu đề</b>
                                    </ListItem>
                                    <ListItem style={{width: "100%"}}>
                                    <input type="text" 
                                      style={{width: "100%"}} 
                                      onChange={(e)=>{setNewHeader(e.target.value)}}
                                      defaultValue={currentHeader}
                                      >
                                    </input>
                                    </ListItem>
                                    <ListItem style={{width: "100%"}}>
                                    <textarea type="text" 
                                      style={{minHeight: 350, width: "100%"}} 
                                      onChange={(e)=>{setNewText(e.target.value)}}
                                      defaultValue={currentText}
                                      >
                                    </textarea>
                                    </ListItem>
                                    <ListItem>
                                    <button 
                                    onClick={()=>ClickModified(
                                      dbNotificationHeader, newHeader, 
                                      currentHeader,
                                      dbNotificationContent ,
                                      newText, currentText)}>
                                    Thay đổi
                                    </button>
                                    </ListItem>
                                    </List>
                                  :
                                  addDialog()
                                  }
                                
                                </Dialog>
                               </Paper>
                          </Grid>
                        </Grid>

                        <Grid item xs={12} 
                        style={{
                          minHeight: 230, 
                          backgroundColor: "white"}}>
                        </Grid>
                      </Grid>                    
                </Paper>
            </Grid>
        </Grid>
    </Grid>
    <Grid item xs={12} style={{minHeight: 14,}}></Grid>
    </Grid>
    </div>
  )
}