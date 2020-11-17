import React, { useState } from "react";

function BtnGroup(props) {

  const [value, setValue] = useState({
    firstHome: false
  })

  // 
  const toggleActive = () => {
    setValue({ ...value, firstHome: !value.firstHome })
  }


  return (
    <div className="btngroup">
      <label>Type of operation*</label>
      <div className="inline">
        <button type="button" className={`btn btn-outline-danger ${value.firstHome ? `active`:``}`} onClick={() => toggleActive()}>New home</button>
        <button type="button" className={`btn btn-outline-danger ml-5 second-btn ${!value.firstHome ? `active`:``}`} onClick={() => toggleActive()}>Secondary home</button>
      </div>
    </div>
  );
}

export default BtnGroup;