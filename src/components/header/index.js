import React from "react";
import { useHistory } from 'react-router-dom';
import {   useDispatch } from 'react-redux'
import * as Types from '../../js/constants'

function Header() { 

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
    <header   className="LogoImagHeader"> 
      <a onClick= {home}>  <img  className="LogoImag" src="geeks-logo.png" alt="logo"/>    </a> 
    </header>
    </>
  );
}

export default Header;