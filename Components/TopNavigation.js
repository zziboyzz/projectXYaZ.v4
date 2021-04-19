import React from "react";
import {useState} from "react";
import AppsIcon from '@material-ui/icons/Apps';
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, fade } from "@material-ui/core/styles";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { blue } from '@material-ui/core/colors';
import styles  from "./Resize.module.css";
import SimpleDialog from "./SimpleDialog";
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

  const useStyles = makeStyles({
    app_btn: (props) =>({
        width: "80%",
        marginLeft: "10%",
        height:"60%",
        color: props.mainColor,
        outline: "none", 
        border: "none",
        textAlign: "center",
        borderTop: "4px solid "+ props.mainColor,
        borderBottom: "4px solid "+ props.mainColor,
        // borderRadius: "5px 5px 5px 5px",
        
        backgroundColor: "white",
        '&:active': {
            backgroundColor: "lightgray",
            }

        }),
        
    login_btn:(props) => ({
        border: "none", 
        width: "70%",
        outline: "none",
        borderRadius: 1,
        backgroundColor: props.mainColor,
        height: "65%", 
        color: "white",
        '&:active': {
            backgroundColor: "lightgray",
            color: "#238000"
            }
    }),
    input_label: {
        verticalAlign: "middle",
        outline: "none",
        backgroundColor:fade("#9c9c9c", 0.2),
        borderRadius: 2, 
        border: "none",
        height: 24, 
        width: "100%",
        // '&:active': {
        //     backgroundColor: "gray",
            
        //     }
    },

    avatar: {
    backgroundColor: blue[100],
    color: blue[600],
    },

})

export default function TopNavigation ({
    color, 
    toggleDrawer, 
    checkAdmin, 
    setCheckAdmin, 
    dataAdmins, 
    setDataAdmins,
    handleClickOpen,
    open,
    setOpen
    }){

    const classes = useStyles(color);
    //Logic đăng nhập
    const [openLogOut, setOpenLogOut] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const [register, setRegister] = useState(true);
    const handleClickOpenLogOut = () => {
        setOpenLogOut(true)
       
    }
    //Logic Logout
    const handleCloseLogOut = () => {
        setOpenLogOut(false);
    };
    const closeLogout = () =>{
        setRegister(true); 
        handleCloseLogOut(); 
        setOpen(true);
        setCheckAdmin(false);
    }
    
    return (
        <div style={{position:"fixed", width: "100%", zIndex: 5, }}>
            
            <Grid container style = {{backgroundColor: "white",
                height: 45,
                boxShadow: "0px 1px 6px grey",
             }}>

             <Hidden mdUp>

                <Grid item container xs={1} sm={1} md={false} lg={false} 
                    style={{ height: "100%", 
                    borderRadius: " 0 0 20px 0", 
                }} >

                    <Grid item xs={12} sm={7} md={false} lg={false} 
                    onClick={toggleDrawer("left", true)}
                    style={{ 
                    borderRadius: " 0 0 20px 0",
                    paddingTop: 11,
                    paddingLeft: "15%"
                  }} >
                        <AppsIcon style={{color: color.mainColor, }}/>
                    </Grid>

                </Grid>

            </Hidden>

            <Grid item xs={1} sm={1} md={1} lg={1} 
                style={{
                textAlign: "left", 
                height: "100%",
                paddingLeft: 10,
                }} 
                className={styles.web_name}>
                    <a href='/' target="self" style={{textDecoration: "none"}} >
                        <b style={{ fontFamily: "'Dela Gothic One', cursive",
                                    color: "white", 
                                    backgroundImage: "linear-gradient(#ffad40, #ff9200)",
                                    borderRadius: 1, padding: 2,
                                    cursor: "pointer" }} >
                            AZteam
                        </b>
                    </a>
            </Grid>

            <Grid item xs={1}></Grid>

            <Grid item xs={8} sm={6} md={7} lg={7} 
                style={{ 
                    color: color.mainColor, 
                    fontFamily: "Arial", 
                    paddingLeft: 20, 
                    paddingTop: 9, 
                    height: "100%",
                }}>
                    <input 
                    className={classes.input_label}
                    placeholder={"Tìm kiếm..."}
                     >
                    </input>
            </Grid>
                
            <Grid item container xs={false} sm={1} md={1} lg={1} 
                style={{
                    textAlign: "right"
                    }} >
                <Grid item xs={false} sm={3} md={3} lg={7}></Grid>
                <Hidden smDown>
                <Grid item xs={false} sm={9} md={9} lg={5} 
                style={{
                    width: "100%", 
                    height:"100%", 
                    paddingTop: 10 
                    }}>
                    <AccountCircleIcon 
                    style={{
                        position: "static", 
                        fontSize: 26,
                        color: color.mainColor,                             
                        }}/>
                        

                </Grid>
                </Hidden>
            </Grid>

            <Grid item container xs={false} sm={2} md={2} lg={2} 
            style={{
                textAlign: "left", 
                }}>

                <Grid item xs={false} sm={6} md={6} lg={6} 
                style={{
                    textAlign: "left", 
                    paddingTop: 15,
                    // borderRight: "1px solid " + color.mainColor, 
                    }}
                     >
                    <Hidden smDown>
                    <p 
                    style={{
                    fontSize: 10,
                    color: color.mainColor}}>
                    <u>{ register !== "da_dang_nhap" ? "Chưa đăng nhập" : "Đã đăng nhập"}</u>
                    </p>
                    </Hidden>
                </Grid>

                <Grid item xs={false} sm={6} md={6} lg={6} 
                style={{ 
                    height: "100%",
                    width: "100%", 
                    textAlign: "center",
                    paddingTop: 11,
                     }}>

                    <Hidden xsDown>
                        {
                        register !== "da_dang_nhap" ? 
                        <button 
                        className={classes.login_btn} 
                        onClick={handleClickOpen}>
                        <b>Login</b>
                        </button>
                        :
                        <button 
                        className={classes.login_btn} 
                        onClick={handleClickOpenLogOut}>
                        <b>Log out</b>
                        </button>
                        }
                    </Hidden>

                    <SimpleDialog 
                        register ={register} 
                        setRegister = {setRegister}
                        open={open} 
                        onClose={handleClose}
                        dataAdmins={dataAdmins}
                        setDataAdmins={setDataAdmins}
                        checkAdmin={checkAdmin}
                        setCheckAdmin={setCheckAdmin}
                         />
                        <Dialog aria-labelledby="simple-dialog-title" 
                            open={openLogOut} 
                            onClose={handleCloseLogOut}
                            style={{zIndex:1000}}>
                            <List>
                                <ListItem>
                                    Đồng ý log out
                                </ListItem>
                                <ListItem>
                                    <button 
                                    onClick={closeLogout
                                     }>
                                     Đồng ý 
                                    </button>
                                </ListItem>
                            </List>
                        </Dialog>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}