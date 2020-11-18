import React, { useEffect } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import SelectItem from '../../components/selectitem';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import * as Types from '../../js/constants'
import style from "./quotedetailthird.module.css";

function QuoteDetailthird(props) {
  const storeData = useSelector(store => store);
  const dispatch = useDispatch();
  const history = useHistory();

  var txt0 = storeData.selectedDeviceType;
  var txt1 = storeData.selectedClassificationType;
  var txt2 = storeData.selectedItem;
  var txt;

  if (txt1 == "") { txt = txt2; } else { txt = txt1; };

  useEffect(() => {
    if (!Object.keys(storeData.Model_type).includes(txt1)){
      history.push('/quotedetailfourth')
    }
      
    console.log('-------------------third-------------------------------');
    console.log(txt1);
    console.log(txt2);
    console.log(txt);
    console.log('****************************************************')
    console.log(storeData);

    
  }, []);
  var txtthis = storeData.selectedModelType;
  const goNavigation = (clickedItem) => {

    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: clickedItem, selectedModelType: clickedItem } })

    // console.log(clickedItem);
    if(Object.keys(storeData.Color).includes(clickedItem)){
      history.push('/quotedetailfourth');
    }else{
      history.push('/quotedetailfive');
    }
  }

  return (
    <div className='container_body'>
      <div className='body_header'>
        <Header />
      </div>
      <div className='container_custom'>
        <div className='title container'>
          <h2><p>  Which device model are you using?     </p></h2>
          <h4> <p>   Not sure which model your device is?   </p></h4>
        </div>
        <div className='box_container'>
          <div className='boxes'>

            {storeData.Model_type[txt] && Object.keys(storeData.Model_type[txt]).map((item, index) => {
              return (
                <div key={index}  className={storeData.selectedModelType === item  ? style.selecteditem : style.selectitem} > 
                  <SelectItem item={item} setItem={goNavigation} key={index}   />
                </div>
              )
            })}

          </div>
        </div>
      </div>
      <Footer navigation={"third"} value={50} />
    </div>
  )
}

export default QuoteDetailthird;
