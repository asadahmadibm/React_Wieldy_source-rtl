import React, { Component } from "react";
import { withRouter } from "react-router";
import AdminGrid from "../../../../components/Admin-Grid/AdminGrid";

import 'react-toastify/dist/ReactToastify.css';

class CompanyConnectionList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      companyID : props.companyID,
      columnDefs: [

        { field: 'companyID',hide:true, sortable: true, headerName: "شناسه  ", filter: 'agNumberColumnFilter', width: 120 },
        { field: 'rowID', sortable: true, headerName: " ردیف ", filter: 'agNumberColumnFilter', width: 75 },
        { field: 'fullName', sortable: true, headerName: " نام و نام خانوادگی ", filter: 'agTextColumnFilter', width: 120 },
        { field: 'position', sortable: true, headerName: "سمت  ", filter: 'agTextColumnFilter', width: 250 },
        { field: 'telphone', sortable: true, headerName: "تلفن  ", filter: 'agTextColumnFilter', width: 250 },
        { field: 'email', sortable: true, headerName: " ایمیل ", filter: 'agNumberColumnFilter', width: 170 },
        { field: 'isActive', sortable: true, headerName: " فعال ", filter: 'agNumberColumnFilter', width: 170 },
        { field: 'unsubscribed', sortable: true, headerName: " عدم ارسال ایمیل ", filter: 'agNumberColumnFilter', width: 170 },
      ]
    };
  }
  handleCallback = (childData) =>{
        
    this.setState({companyID:childData})
     console.log(this.state.companyID);
  }
  render() {
    return (
      <div className="gx-main-content">
        <AdminGrid showfloatingFilter={false} pagination={false}  parentCallback = {this.handleCallback} isshowInLoad={true} columnDefs={this.state.columnDefs} height="20vh" isshowdetail={false} apiname="CrmCompanyConnection/GetByCompanyId" parameterCompanyId={this.state.companyID} pageDetail="CrmCompanyProduct/GetByCompanyId" />
      </div>
    )
  }
}

export default withRouter(CompanyConnectionList);;
