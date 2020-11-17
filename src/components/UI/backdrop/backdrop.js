import React,{Component}from "react";
import Backdropdesign from "./Backdrop.module.css"

class Backdrop extends Component{
    render(){
        return(
            this.props.show?<div className={Backdropdesign.Backdrop}onClick={this.props.modalClose}></div>:null
        )
    }
}
export default Backdrop;