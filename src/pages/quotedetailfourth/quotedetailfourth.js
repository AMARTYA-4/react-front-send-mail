import React, { useEffect } from "react";
import Header from '../../components/header'; 
import Footer from '../../components/footer'; 
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import SelectItem from '../../components/selectitem';
import * as Types from '../../js/constants' 
import style from "./quotedetailfourth.module.css";
function QuoteDetailFourth(props) {
  const storeData = useSelector(store => store) 
  const dispatch = useDispatch()
  const history = useHistory()
    
  var txt1 = storeData.selectedModelType; 
  var txt2=storeData.selectedItem;
  var txt ;
  if(txt1){txt=txt1; }else{txt=txt2;}; 
  useEffect(() => { 
    if (!Object.keys(storeData.Color).includes(txt1)){
      history.push('/quotedetailfive')
    }
      
    console.log('-------------------fourth-------------------------------'); 
  console.log(txt1);
  console.log(txt2);
  console.log(txt);
  console.log('****************************************************')
  console.log(storeData)
  console.log("------------------------------------------------------------------------------")
   
    
  }, [])

  const goNavigation = (clickedItem) => {
    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: clickedItem, selectedColorType:clickedItem } })  
    history.push('/quotedetailfive')
  }

  return (
    <div className='container_body'>
      <div className='body_header'>
        <Header />
      </div>
      <div className='container_custom'>
        <div className='title_container'>
          <h2>Which colour is it? </h2>
        </div>
        <div className='box_container'>
        <div className='boxes'>
     
       
            {storeData.Color[txt]&&Object.keys(storeData.Color[txt]).map((item, index) => {
              return (
                <div key={index}  className={storeData.selectedColorType === item  ? style.selecteditem : style.selectitem} > 
             
                <SelectItem item={item} setItem={goNavigation} key={index}  />
                </div>
              )
            })}  
          
        </div>
        </div>
      </div> 

      <Footer navigation={"fourth"} value={60}/>
    </div>
  );
}

export default QuoteDetailFourth;
