import React from "react";
import { Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";
import EcarSalesList from "./EcarSales/EcarSalesList";

const MyApp = ({match}) => (
  <Switch>
    {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/contacts`}/> */}
    <Route exact path={`${match.url}/EcarSales`} component={asyncComponent(() => import('./EcarSales/index'))}/>
    <Route exact path={`${match.url}/EcarSales/EcarSalesList`} component={EcarSalesList} />
  </Switch>
);

export default MyApp;
