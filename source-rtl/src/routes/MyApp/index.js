import React from "react";
import { Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const MyApp = ({match}) => (
  <Switch>
    {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/contacts`}/> */}
    <Route path={`${match.url}/EcarSales`} component={asyncComponent(() => import('./EcarSales/index'))}/>
  </Switch>
);

export default MyApp;
