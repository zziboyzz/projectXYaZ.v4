import {useState} from "react";
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles, fade } from "@material-ui/core/styles";
import { blue } from '@material-ui/core/colors';



const useStyles = makeStyles({
   
    avatar: {
    backgroundColor: blue[100],
    color: blue[600],
    },

})
export default function SimpleDialog(props) {
    const classes = useStyles();

    const { 
        onClose, 
        open, 
        register, 
        setRegister, 
        dataAdmins, 
        setDataAdmins, 
        checkAdmin, 
        setCheckAdmin} = props;

    const handleClose = () => {
      onClose();
      if (register !== 1 && register !== "da_dang_nhap") 
        setRegister(true);
    };

    const [typePass, setTypePass] = useState("password");
    
    const showPass = () => {
      if (typePass === "password")
        setTypePass("text")
      else setTypePass("password")
    }
    // Nhập Email:
    const [email, setEmail] = useState("");
    const emailInput = (e) =>{
        setEmail(e)
    }
    // Nhập Mật khẩu:
    const [MK, setMK] = useState("");
    const MKInput = (e) =>{
        setMK(e)
    }
    //CheckLogin: duyệt xem có phải admin hay không.
    const [tieuDeDangNhap, setTieuDeDangNhap] = useState("")
    const checkLogin = (key) =>{
            if (email === dataAdmins[0].email && +MK === dataAdmins[0].MK){
                setTieuDeDangNhap("ADmin ak")
                setRegister(key)
                setCheckAdmin(true)
            }
        }   
    const ContentLogin = () => {
        return(
            <List>
            <ListItem id="simple-dialog-title">
            <b style={{fontFamily: "sans-serif"}}>Login</b>
            </ListItem>
            <ListItem>
                <b>Email<span style={{color: "red"}}>*</span></b>
            </ListItem>
            <ListItem>
                <input style={{width: "100%"}} onChange={(e)=>emailInput(e.target.value)}></input>
            </ListItem>
            <ListItem>
                <b>Mật khẩu<span style={{color: "red"}}>*</span></b>
            </ListItem>
            <ListItem>
                <input style={{width: "100%"}} 
                type={typePass} 
                onChange={(e)=>MKInput(e.target.value)}>
                </input>
            </ListItem>
            <ListItem>
                <b>Show Password</b>
                <input type="checkbox" onClick={()=>showPass()} ></input>
            </ListItem>
            <ListItem>
            <button onClick={()=>checkLogin("da_dang_nhap")}>Đăng nhập</button>
            <p 
            onClick={()=>setRegister(3)}>
            <u><b>Đổi mật khẩu</b></u>
            </p>
            </ListItem>
          <ListItem>

            <p>Chưa có tài khoản?</p>
            <button 
            onClick={()=>setRegister(false)}>
            Đăng kí
            </button>
            
          </ListItem>
       
        </List>
        )
    }
    const ContentRegister = () => {
        
        return(
            <List>
            
            <ListItem id="simple-dialog-title">
            <b style={{fontFamily: "sans-serif"}}>Register</b>
            </ListItem>
            <ListItem>
                <b>Your Name<span style={{color: "red"}}>*</span></b>
            </ListItem>
            <ListItem>
                <input style={{width: "100%"}}></input>
            </ListItem>
            <ListItem>
                <b>Email(sử dụng imail trường)<span style={{color: "red"}}>*</span></b>
            </ListItem>
            <ListItem>
                <input style={{width: "100%"}}></input>
            </ListItem>
            <ListItem>
                <b>Mật khẩu<span style={{color: "red"}}>*</span></b>
            </ListItem>
            <ListItem>
                <input style={{width: "100%"}}></input>
            </ListItem>
            <ListItem>
                <b>Nhập lại mật khẩu<span style={{color: "red"}}>*</span></b>
            </ListItem>
            <ListItem>
                <input style={{width: "100%"}} type={typePass} ></input>
            </ListItem>
            <ListItem>
                <b>Show Password</b>
                <input type="checkbox" 
                onClick={()=>showPass()} >
                </input>
            </ListItem>
            <ListItem>
                <button 
                onClick={()=>setRegister(true)}> 
                {"<= Đăng Nhập"}
                </button>
                <button 
                onClick={()=>setRegister(1)}>
                Đăng kí
                </button>
            </ListItem>
        </List>
        )
    }
    const ContentChangePass = () => {
        
        return(
            <List>
            
            <ListItem id="simple-dialog-title">
            <b style={{fontFamily: "sans-serif"}}>Đổi mật khẩu</b>
            </ListItem>
            <ListItem>
                <b>Email<span style={{color: "red"}}>*</span></b>
            </ListItem>
            <ListItem>
                <input style={{width: "100%"}}></input>
            </ListItem>
            <ListItem>
                <b>Mật khẩu cũ<span style={{color: "red"}}>*</span></b>
            </ListItem>
            <ListItem>
                <input style={{width: "100%"}}></input>
            </ListItem>
            <ListItem>
                <b>Mật khẩu mới<span style={{color: "red"}}>*</span></b>
            </ListItem>
            <ListItem>
                <input style={{width: "100%"}} type={typePass} ></input>
            </ListItem>
            <ListItem>
                <b>Nhập lại mật khẩu mới<span style={{color: "red"}}>*</span></b>
            </ListItem>
            <ListItem>
                <input style={{width: "100%"}} type={typePass} ></input>
            </ListItem>
            <ListItem>
                <b>Show password</b>
                <input type="checkbox" onClick={()=>showPass()} ></input>
            </ListItem>
            <ListItem>
                <b>Đồng ý đổi?</b>
                <input type="checkbox" ></input>
            </ListItem>
            <ListItem>
            <button 
            onClick={()=>setRegister(1)}>
            Đổi mật khẩu
            </button>
            </ListItem>
            <ListItem>
            <button 
            onClick={()=>setRegister(true)}> 
            {"<= Đăng Nhập"}
            </button>
            </ListItem>
        </List>
        )
    }

    const Loading = () => {

        if (register === 1)
        return(
            <List>
            <ListItem>
                Đã đăng kí
            </ListItem>
            <ListItem>
            <button onClick={()=>setRegister("da_dang_nhap")}>Tiếp tục</button>
            </ListItem>
            </List>
        )

        if (register === "da_dang_nhap")
        return(
            <List>
            <ListItem>
                {tieuDeDangNhap + ": " + checkAdmin}
            </ListItem>
            </List>
        )

        if (register === 3)
        return(
            ContentChangePass()
        )

    }
    const setLog = () => {
        if (register === false)
           return ContentRegister()

        if (register === true)
           return ContentLogin()
        
        if (register === 1 || register === "da_dang_nhap" || register === 3) 
            return Loading()
    } 
    return (
      <Dialog onClose={handleClose} 
      aria-labelledby="simple-dialog-title" 
      fullWidth={true}
      open={open} 
      style={{zIndex:1000}}>
        {setLog()}
      </Dialog>
    );
  }
  
  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };