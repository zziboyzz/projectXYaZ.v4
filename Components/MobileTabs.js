import React from 'react'
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import NextLink  from 'next/link';

const MobileTabs = ({color}) => {
    return (
        <Hidden smUp>
            <div style={{minHeight: 35, 
            borderTop: "1px solid white",
            boxShadow: "0px 1px 6px grey",
            width: "100%", zIndex: 6,
            backgroundColor: color.mainColor,
            top: 45, position: "fixed"}}>
                <Grid container style={{height: "100%"}}>
                    <Grid item xs={3} >
                    <NextLink href='/thong_bao' exact>
                        <div style={{
                        height: 35, 
                        textAlign: "center", 
                        borderLeft: "0px solid white"}}>
                            <div style={{
                            paddingTop: 10, 
                            fontFamily: "arial",
                            fontSize: 12, 
                            height: 25,
                            cursor: "pointer",
                            color: "white"}}>
                                <b>Thông báo</b>
                                
                            </div>
                        </div>
                        </NextLink>                    
                    </Grid>
                    <Grid item xs={3}>
                    <NextLink href='/bai_giang' exact>
                    <div style={{
                        height: 35, 
                        textAlign: "center", 
                        borderLeft: "2px solid white"}}>
                            <div style={{
                            paddingTop: 10, 
                            fontFamily: "arial",
                            fontSize: 12, 
                            height: 25,
                            cursor: "pointer",
                            color: "white"}}>
                                <b>Bài giảng</b>
                                
                            </div>
                        </div>
                    </NextLink>
                                            
                        </Grid>
                    <Grid item xs={3}>
                    <NextLink href='/tai_lieu' exact>
                    <div style={{
                    height: 35, 
                    textAlign: "center", 
                    borderLeft: "2px solid white"}}>
                            <div style={{
                            paddingTop: 10, 
                            fontFamily: "arial",
                            fontSize: 12, 
                            height: 25,
                            cursor: "pointer",
                            color: "white"}}>
                                <b>Tài liệu</b>
                                
                            </div>
                        </div>
                    </NextLink>
                                            
                        </Grid>
                    <Grid item xs={3}>
                    <NextLink href='/tinh_diem' exact>
                    <div style={{
                        height: 35, 
                        textAlign: "center", 
                        
                        borderLeft: "2px solid white"}}>
                            <div style={{
                            paddingTop: 10,
                            height: 25,
                            fontFamily: "arial", 
                            fontSize: 12, 
                            cursor: "pointer",
                            color: "white",
                            }}>
                                <b>Tính điểm</b>
                                
                            </div>
                        </div>
                    </NextLink>
                        
                    </Grid>
                </Grid>
            </div>
        </Hidden>
        
    )
}

export default MobileTabs
