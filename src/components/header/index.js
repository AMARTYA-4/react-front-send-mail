import React,{useState} from "react";
import { useHistory } from 'react-router-dom';
import {   useDispatch } from 'react-redux'
import * as Types from '../../js/constants'
import "./header.css"
function Header() { 
  const [showContact,setShowContact]=useState(false);
const history = useHistory()
const dispatch = useDispatch();
  const home = () => { 

 
    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedDeviceType:"" } })   
    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedClassificationType:"" } })   
    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedModelType: "" } })
    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedColorType: "" } })
    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedIssueType: "" } })
    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedDetailsType: "" } })
    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedSummaryType: "" } })
    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedItem: "" } })
    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedIsuueQzType: "" } })
   

      history.push("/quotedetailfirst")
    }
  return (
    <>
    <header   className="LogoImagHeader row"> 
      <div className="col-9">
        <a onClick= {home}>  <img  className="LogoImag" src="geeks-logo.png" alt="logo"/>    </a> 
      </div>
      <div className="col-1">
        <a href="https://api.whatsapp.com/send?phone=9933445566&text=Hi!%20I%20am%20your%20client"><button className="whatsappIcon"><i className="fab fa-whatsapp"></i></button></a>
      </div>
      <div className="col-2">
        {showContact?
        <button className="ContactButtonBlue"onClick={()=>setShowContact(false)}><i className="fas fa-phone-volume"></i>9922334455</button>:
        <button className="ContactButton"onClick={()=>setShowContact(true)}><i className="fas fa-phone-volume"></i>Contact us</button>}
        </div>
        
     
    </header>
    </>
  );
}

export default Header;