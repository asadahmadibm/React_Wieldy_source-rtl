import React from "react";
import { Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";
import EcarSalesList from "./EcarSales/EcarSalesList";
import CompanyList from "./Crm/Company/CompanyList";
import Ifb from "./Ifb";

const MyApp = ({match}) => (
  <Switch>
    {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/contacts`}/> */}
    <Route exact path={`${match.url}/EcarSales`} component={asyncComponent(() => import('./EcarSales/index'))}/>
    <Route exact path={`${match.url}/EcarSales/EcarSalesList`} component={EcarSalesList} />
    <Route exact path={`${match.url}/Ifb/index`} component={Ifb} />
    <Route exact path={`${match.url}/crm/company/CompanyList`} component={CompanyList} />
    <Route exact path={`${match.url}/crm/company/CompanyDetail`} component={asyncComponent(() => import('./Crm/Company/CompanyDetail'))}/>
  </Switch>
);

export default MyApp;
