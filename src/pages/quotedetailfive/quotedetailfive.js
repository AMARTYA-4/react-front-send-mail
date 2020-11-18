import React, { useEffect } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import SelectItem from '../../components/selectitem';
import * as Types from '../../js/constants';
import style from "./quotedetailfive.module.css";




import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
const initialList = [

];
const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

function QuoteDetailFive(props) {

  const [list, setList] = React.useState(initialList);
  const [inputData, setinputData] = React.useState("");


  const storeData = useSelector(store => store)
  const dispatch = useDispatch()
  const history = useHistory()
  var newList = []


  var txt1 = storeData.selectedModelType;
  var txt2 = storeData.selectedItem;
  var txt;
  if (txt1 !== "") { txt = txt1; } else { txt = txt2; };


  const inputsHandler = (e) => {
    setinputData({ inputData: e.target.value })
  }
  const goNavigation = (clickedItem) => {
    var n = list.indexOf(clickedItem);
    if (n >= 0) {
      newList = list.slice(0, n).concat(list.slice(n + 1, list.length))

    } else {
      newList = list.concat([clickedItem])
    }
    setList(newList);
  }
  const submitButton = () => {
    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "Issue", selectedIssueType: list } })
    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "Issue", selectedIsuueQzType: inputData } })

    history.push('/quotedetailsix')

  }


  return (
    <div className='container_body'>
      <div className='body_header'>
        <Header />
      </div>
      <div className='container_custom'>
        <div className='title_container'>
          <h2><p> Which services do you need?    </p></h2>
          <h4> <p>   You can select more than one service </p></h4>
        </div>
        <div className='box_container'>
          <div className='boxes'>

            {storeData.Issue[txt] && Object.keys(storeData.Issue[txt]).map((item, index) => {
              return (
                <div key={index}>
                  <HtmlTooltip placement="right-start"
                    title={
                      <React.Fragment>
                        <Typography color='colorPrimary'> <a style={{ color: "red" }}>Possible Issues  </a></Typography>
                        {/* {storeData.IssueTool[item]} */}
                        {/* {storeData.IssueTool.item} */}
                        <ul>
                          {storeData.IssueTool[item] && storeData.IssueTool[item].map((condetail, i) => {
                            return <li  key={i} style={{textAlign:'left'}}>  {condetail}</li>
                          })}
                        </ul> 

                      </React.Fragment>
                    } arrow
                  >
                    <div className={storeData.selectedClassificationType === item || list.includes(item) ? style.selecteditem : style.selectitem} >
                      <SelectItem item={item} setItem={goNavigation} key={index} />
                    </div>
                  </HtmlTooltip>
                </div>
              )
            })}

          </div>  <div>
            <p>Would you like to add anything?</p>

            <input type="text" name="Qz" className="form-control" placeholder=" " onChange={inputsHandler} />

            <div style={{ height: 10 }}></div>

            <a className="btn btn-danger" onClick={submitButton}>Next</a>

          </div>
        </div>


      </div>

      <Footer navigation={"five"} value={70} />
    </div>
  );
}

export default QuoteDetailFive;
