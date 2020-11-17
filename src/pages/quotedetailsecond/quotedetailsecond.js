import React, { useEffect } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import SelectItem from '../../components/selectitem';
import * as Types from '../../js/constants'
import style from './two.module.css';

function QuoteDetailSecond(props) {
  const storeData = useSelector(store => store)
  const dispatch = useDispatch()
  const history = useHistory()

  var txt1 = storeData.selectedDeviceType;
  var txt2 = storeData.selectedItem;
  var txt;
  if (txt1 !== "") { txt = txt1; } else { txt = txt2; };

  useEffect(() => {

    if (!Object.keys(storeData.Classification).includes(txt)) {
      console.log('-------------------second-------------------------------');
      console.log(txt1);
      console.log(txt2);
      console.log(txt);
      console.log('****************************************************')
      console.log(storeData)
      history.push('/quotedetailthird')
    }
  }, [])

  const goNavigation = (clickedItem) => {
    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: clickedItem, selectedClassificationType: clickedItem } })

    history.push('/quotedetailthird')
  }

  return (
    <div className='container_body'>
      <div className='body_header'>
        <Header />
      </div>
      <div className='container_custom'>
        <div className='title_container'>
          <h2>What can we help with?</h2>
        </div>
        <div className='box_container'>
          <div className='boxes'>

            {storeData.Classification[txt] && Object.keys(storeData.Classification[txt]).map((item, index) => {

              return (  <div key={index}  className={storeData.selectedClassificationType === item  ? style.selecteditem : style.selectitem} > 
                <SelectItem item={item} setItem={goNavigation} key={index} />
            </div>
              )
            })}
          </div>
        </div>
      </div> 
      <Footer navigation={"second"} value={40} />
    </div>
  );
}

export default QuoteDetailSecond;
