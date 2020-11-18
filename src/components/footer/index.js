import React, { useState } from "react";
import { ProgressBar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AlertDialog from './modal'
import { useDispatch } from 'react-redux'
import * as Types from '../../js/constants'

function Footer(props) {
  const history = useHistory()
  const storeData = useSelector(store => store);
  const [state, setState] = useState({
    disable: false
  })

  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const goBackNavigation = (item) => {

    if (item === "first") {

      dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedClassificationType: "" } })
      dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedModelType: "" } })
      dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedColorType: "" } })
      dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedIssueType: "" } })
      dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedDetailsType: "" } }) 
      dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedItem: "" } })
      dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "", selectedIsuueQzType: "" } })

      history.push("/quotedetailfirst")
    }
    else if (item === "second") {
      if (storeData.selectedClassificationType !== "") {
        history.push("/quotedetailsecond")

      }

    }
    else if (item === "third") {
      if (storeData.selectedModelType !== "") {
        history.push("/quotedetailthird") 
      }
     
    }
    else if (item === "fourth") {
      if (storeData.selectedColorType !== "") {
        history.push("/quotedetailfourth")
      } 
    }
    else if (item === "five") {
      if (storeData.selectedIssueType !== "") {
        history.push("/quotedetailfive")
      }  
    }
    else if (item === "six") {
      // history.push("/quotedetailsix")
    }
  }

  const now = props.value;
  var co1, co2, co3, co4, co5, co6, co7;
  var txt1, txt2, txt3, txt4, txt5, txt6;
  if (now >= 40) {
    co1 = "green"; co2 = "red";
    txt1 = storeData.selectedDeviceType;
  }
  if (now >= 50) {
    co1 = "green"; co2 = "green"; co3 = "red";
    txt2 = storeData.selectedClassificationType;
  }
  if (now >= 60) {
    co1 = "green"; co2 = "green"; co3 = "green"; co4 = "red";
    txt3 = storeData.selectedModelType;
  }
  if (now >= 70) {
    co1 = "green"; co2 = "green"; co3 = "green"; co4 = "green"; co5 = "red";
    txt4 = storeData.selectedColorType;
  }

  if (now >= 80) {
    co1 = "green"; co2 = "green"; co3 = "green"; co4 = "green"; co5 = "green"; co6 = "red";
    txt5 = storeData.selectedIssueType;
  }

  if (now >= 90) {
    co1 = "green"; co2 = "green"; co3 = "green"; co4 = "green"; co5 = "green"; co6 = "green"; co7 = "red";
    txt6 = storeData.selectedDetailsType.fullname;
  }

  const toggle = () => {
    setState({ ...state, disable: !state.disable })
  }

  return (

    < div>


      <div className={`footer ${state.disable && `hidden`}`}>
        <div className="viewbutton" onClick={toggle}>{now}% Progress</div>
        <div className="footer_progress">
          <ProgressBar style={{ width: "100%",height:"20px" }} striped variant="info" animated now={now} label={`${now}%`} />
        </div>
        <div className="desktop">
          <div className="footer_button">
            <div style={{ display: "flex", color: co1 }} >
              <div>
                <div>
                  <a onClick={() => goBackNavigation("first")}>DeviceType</a>
                </div>
                <div>
                  {txt1}
                  {/* <img src="img/lazyLoader.gif" className="loading" alt="progress" /> */}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", color: co2 }} >
              <div>
                <div>
                  <a onClick={() => goBackNavigation("second")}>Classification</a>
                </div>
                <div>
                  {txt2}
                  {/* <img src="img/lazyLoader.gif" className="loading" ng-hide="progress.text != 0" /> */}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", color: co3 }} >
              <div>
                <div>
                  <a onClick={() => goBackNavigation("third")}>Model</a>
                </div>
                <div>
                  {txt3}
                  {/* <img src="img/lazyLoader.gif" className="loading" ng-hide="progress.text != 0" /> */}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", color: co4 }} >
              <div>
                <div>
                  <a onClick={() => goBackNavigation("fourth")}>Color</a>
                </div>
                <div>
                  {txt4}
                  {/* <img src="img/lazyLoader.gif" className="loading" ng-hide="progress.text != 0" /> */}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", color: co5 }} >
              <div>
                <div>
                  <a onClick={() => goBackNavigation("five")}>Issue</a>
                </div>
                <div>
                  {txt5}
                  {/* <img src="img/lazyLoader.gif" className="loading" ng-hide="progress.text != 0" /> */}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", color: co6 }} >
              <div>
                <div>
                  <a onClick={() => goBackNavigation("six")}>Details</a>
                </div>
                <div>
                  {txt5}
                  {/* <img src="img/lazyLoader.gif" className="loading" ng-hide="progress.text != 0" /> */}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", color: co7 }} >
              <a> Summary</a>
            </div>
            <div style={{ display: "flex" }} >
              <a  >Schedule</a>
            </div>

          </div>


        </div>
        <div className="footer_button1"  > 
          <div className="prog_Left"   >{now} % complete |</div>
          <div className="prog_Right" >
            <AlertDialog  now={now} style={{ display: 'flex' }} />
          </div>
        </div>
      </div >

    </div>
  );
}

export default Footer;