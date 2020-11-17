import React from "react";

function Select(props) {

  return (    
    <div className="select">
        <label for="sel1">{props.label}</label>
        <select className="form-control" id="sel1">
            <option selected>{props.option}</option> //props.option must be Array.
            <option>state 1</option>
            <option>state 2</option>
            <option>state 3</option>
        </select>
    </div>
  );
}

export default Select;