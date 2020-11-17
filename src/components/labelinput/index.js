import React from "react";

function LabelInput(props) {

  return (    
    <div className="label_input">
        <label>{props.label}</label>
        <input className="form-control"></input>
    </div>
  );
}

export default LabelInput;