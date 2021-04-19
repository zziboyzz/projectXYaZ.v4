import React from 'react'
import PDFViewer from "../../Components/PDFviewer/PDFviewer";
import PDFJSBackend from '../../Lib/pdfjs';
import {getAllPostIds, getSinTaxPDF} from "../../Lib/posts";
import Grid from '@material-ui/core/Grid';

const pdf = ({postLink, fileDirect, }) => {
  
  return (
        <Grid container >
        <Grid item xs={false} sm={1} md={1} lg={1} style={{backgroundColor:"lightgray"}} >                        
        </Grid>
        <Grid item container xs={12} sm={11} md={8} lg={8} style={{paddingLeft: "0px", backgroundColor:"white"}} >
          <Grid item container xs = {12} className="resize_mobile"></Grid>
          <Grid item container xs = {12} style={{minHeight: "600px"}}>
            <PDFViewer 
          backend={PDFJSBackend}
          src= {"/pdffile/"+ fileDirect[postLink] + "/" + postLink + ".pdf"}
          />
        </Grid>
        </Grid>
      </Grid>
    )
}

export default pdf

export async function getStaticPaths() {
   const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}
export async function getStaticProps({params}) {
    // Fetch necessary data for the blog post using params.id
    const postLink = params.id
    const postSintax = getSinTaxPDF()
    const fileDirect = postSintax.sintax
    // const postSintax = params.sintax
    return {
      props: {
        postLink,
        fileDirect
      }
    }
  }
