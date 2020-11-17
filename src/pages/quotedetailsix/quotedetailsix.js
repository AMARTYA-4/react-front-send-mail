import React, { useEffect, useState } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux' 
import * as Types from '../../js/constants' 
 
function QuoteDetailSix(props) {
  const storeData = useSelector(store => store)
  const dispatch = useDispatch()
  const history = useHistory()

  var txt1 = storeData.selectedModelType;
  var txt2 = storeData.selectedItem;
  var txt;

  const [inputField , setInputField] = useState({
      phone: '',
      fullname: '',
      email: ''
    })

    const inputsHandler = (e) =>{
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }

    const submitButton = () =>{
      dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "details", selectedDetailsType: inputField } })
      history.push('/quotedetailseven')
 
    }

  if (txt1 !== "") { txt = txt1; } else { txt = txt2; };

  useEffect(() => {
    console.log('-------------------fourth-------------------------------');
    console.log(txt1);
    console.log(txt2);
    console.log(txt);
    console.log('****************************************************')
    console.log(storeData)
    console.log("------------------------------------------------------------------------------")  
    
  }, [])

  const goNavigation = (clickedItem) => {
    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: clickedItem, selectedIssueType: clickedItem } })
    history.push('/quotedetailsix')
  }
 
  return (
    <div className='container_body'>
      <div className='body_header'>
        <Header />
      </div>
      <div className='container_custom'>
        <div className='title_container'>

          <h2><p> We got your back   </p></h2>
          <h4> <p>  just need a few details of yours</p></h4>
        </div>
      </div>
      <div className="querytxt">

        <input type="text" name="phone" className="form-control" placeholder="phone(e.g : 1234567890)" onChange={inputsHandler} value={inputField.phone} />
       <div style={{height:10}}></div>
        <input type="text" name="fullname" className="form-control" placeholder="Full Name" onChange={inputsHandler} value={inputField.fullname}  />
        <div style={{height:10}}></div>
        <input type="text" name="email" className="form-control" placeholder="Enter email" onChange={inputsHandler} value={inputField.email}  />
        <div style={{height:10}}></div>
        <a className="btn btn-danger" onClick={submitButton}>Send Inquiry</a>

      </div> 

      <Footer navigation={"six"} value={80} />
    </div>
  );
}

export default QuoteDetailSix;
