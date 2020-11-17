import React from "react";

function Check(props) {

  return (    
    <div className="checkbox">
        {/* <div className="checkbox"> */}
          <div><input type="checkbox" className="input_checkbox"></input></div>
          <div>
            <label className="form-check-label" id="checkbox">
              {props.label}
            </label>
          </div>
        {/* </div> */}
     </div>
  );
}

export default Check;