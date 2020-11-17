import React, { useEffect } from 'react';
import style from './selectitem.module.css';


const SelectItem = ({ item, setItem }) => {
  var result = `./img/${item}.png`;


  return (
    <div
     
      onClick={() => setItem(item)} 
    >
      
        <img src={result} alt="imagess" />
      
      <div>
        {item}
      </div>
    </div>
  )

};

export default SelectItem;