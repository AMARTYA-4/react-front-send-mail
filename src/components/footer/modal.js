import React from "react"; 
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    Table,
    TableHead,
    TableCell, 
    TableRow
} from "@material-ui/core";
export default function AlertDialog(now) {
    const storeData = useSelector(store => store);
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
    const history = useHistory()

    // const now = props.value;
    var co1, co2, co3, co4, co5, co6, co7;
    var txt1, txt2, txt3, txt4, txt5, txt6;
   
      txt1 = storeData.selectedDeviceType;
    
   
      txt2 = storeData.selectedClassificationType;
   
      txt3 = storeData.selectedModelType;
   
      txt4 = storeData.selectedColorType;
   
      txt5 = storeData.selectedIssueType;
        txt6 = storeData.selectedDetailsType.fullname;
    

    const goBackNavigation = (item) => {

        if (item === "first") {  
            history.push("/quotedetailfirst")
          }
          else if (item === "second") {
            if (storeData.selectedClassificationType !== "") {
              history.push("/quotedetailsecond")
      
            }
      
          }
          else if (item === "third") {
            if (storeData.selectedModelType !== "") {
              history.push("/quotedetailthird") 
            }
           
          }
          else if (item === "fourth") {
            if (storeData.selectedColorType !== "") {
              history.push("/quotedetailfourth")
            } 
          }
          else if (item === "five") {
            if (storeData.selectedIssueType !== "") {
              history.push("/quotedetailfive")
            }  
          }
          else if (item === "six") {
            // history.push("/quotedetailsix")
          }
      } 
    
    return (
        <div>
            <a variant="outlined" color="primary" onClick={handleClickOpen}>
                Currently Selecting Group
           </a>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth='lg'
            >
                <DialogTitle id="alert-dialog-title">
                    To change any of the below info just tap on it
                </DialogTitle>
                <DialogContent >
                    <div className="w-100 overflow-auto">
                        <Table style={{ whiteSpace: "pre" }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="px-0" > <a onClick={() => goBackNavigation("first")}>  DeviceType:    </a> </TableCell>
                                    <TableCell className="px-0" >   <a style={{color:"green"}}>    {txt1} </a> </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0">  <a onClick={() => goBackNavigation("second")}>  Classification:   </a></TableCell>
                              
                                    <TableCell className="px-0" >   <a style={{color:"green"}}>    {txt2} </a> </TableCell>  </TableRow>
                                <TableRow>
                                    <TableCell className="px-0">  <a onClick={() => goBackNavigation("third")}> Model:</a></TableCell>
                                    <TableCell className="px-0" >   <a style={{color:"green"}}>    {txt3} </a> </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0">  <a onClick={() => goBackNavigation("fourth")}> Color:</a></TableCell>  
                                     <TableCell className="px-0" >   <a style={{color:"green"}}>    {txt4} </a> </TableCell>
                                </TableRow>
                             
                                <TableRow>
                                    <TableCell className="px-0">  <a onClick={() => goBackNavigation("five")}> Issue:</a></TableCell>
                                    <TableCell className="px-0" >    <a style={{color:"green"}}>     {txt5} </a> </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0">  <a onClick={() => goBackNavigation("six")}> Details:</a></TableCell>
                                    <TableCell className="px-0" >   <a style={{color:"green"}}>   {txt6} </a> </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0">  Summary:</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0">   Schedule:</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </div>

                </DialogContent>

            </Dialog>
        </div>
    );
}
