import React from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import SelectItem from '../../components/selectitem';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import * as Types from '../../js/constants'
import style from "./quotedetailfirst.module.css";


function QuoteDetailFirst(props) {
  const storeData = useSelector(store => store.DeviceType)
  const dispatch = useDispatch()
  const history = useHistory();
  const goNavigation = (clickedItem) => {
    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: clickedItem, selectedDeviceType: clickedItem } })

    history.push('/quotedetailsecond');
  }


  return (
    <div className='container_body'>
      <div className='body_header'>
        <Header />
      </div>
      <div className='container_custom'>

        <div className='title_container'>
          <h1>What can we help with?</h1>

        </div>
        <div className='box_container'>
          <div className='boxes'>

            {Object.keys(storeData).map((item, index) => {
              return (
               
                
                    <div key={index} className={storeData.selectedDeviceType === item ? style.selecteditem : style.selectitem} >
                      <SelectItem item={item} setItem={goNavigation} key={index} />
                    </div>
               
               
              )
            })}


          </div>
        </div>
      </div>

      <Footer navigation={"first"} value={0} />
    </div>
  );
}

export default QuoteDetailFirst;

