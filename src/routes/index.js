import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import QuoteDetailFirst from "../pages/quotedetailfirst/quotedetailfirst";
import QuoteDetailSecond from "../pages/quotedetailsecond/quotedetailsecond";
import QuoteDetailThird from "../pages/quotedetailthird/quotedetailthird";
import QuoteDetailFourth from "../pages/quotedetailfourth/quotedetailfourth";
import QuoteDetailFive from "../pages/quotedetailfive/quotedetailfive";
import QuoteDetailSix from "../pages/quotedetailsix/quotedetailsix";
import QuoteDetailSeven from "../pages/quotedetailseven/quotedetailseven";
 
function Routes() {
  return (
      <Switch>
        <Route
          exact
          path={`/quotedetailfirst`}
          component={QuoteDetailFirst} 
          />
        <Route
          exact
          path={`/quotedetailsecond`}
          component={QuoteDetailSecond}
        />
        <Route
          exact
          path={`/quotedetailthird`}
          component={QuoteDetailThird}
        />
        <Route
          exact
          path={`/quotedetailfourth`}
          component={QuoteDetailFourth}
        />
        <Route
          exact
          path={`/quotedetailfive`}
          component={QuoteDetailFive}
        /> 
        <Route
          exact
          path={`/quotedetailsix`}
          component={QuoteDetailSix}
        /> 
        <Route
          exact
          path={`/quotedetailseven`}
          component={QuoteDetailSeven}
        /> 
        <Redirect from="/" to='quotedetailfirst' />
      </Switch>
  );
}

export default Routes;