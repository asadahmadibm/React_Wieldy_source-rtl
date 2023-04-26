import React, { Component } from "react";
import { withRouter } from "react-router";
import AdminGrid from "../../../../components/Admin-Grid/AdminGrid";

import 'react-toastify/dist/ReactToastify.css';

class CompanyProductList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      companyID : props.companyID,
      columnDefs: [

        { field: 'companyID',hide:true, sortable: true, headerName: "شناسه  ", filter: 'agNumberColumnFilter', width: 50 },
        { field: 'rowID', sortable: true, headerName: " ردیف ", filter: 'agNumberColumnFilter', width: 75 },
        { field: 'productID', sortable: true, headerName: " کد محصول", filter: 'agTextColumnFilter', width: 120 },
        { field: 'qty', sortable: true, headerName: "تعداد  ", filter: 'agTextColumnFilter', width: 250 },
        { field: 'comment', sortable: true, headerName: " توضیحات ", filter: 'agNumberColumnFilter', width: 170 },
      ]
    };
  }
  handleCallback = (childData) =>{
        
    this.setState({companyID:childData})
     console.log(this.state.companyID);
  }
  render() {
    return (
      // <div className="gx-main-content">
        <AdminGrid showfloatingFilter={false} pagination={false}  parentCallback = {this.handleCallback}  isshowInLoad={true} columnDefs={this.state.columnDefs} height="20vh" isshowdetail={false} apiname="CrmCompanyProduct/GetByCompanyId" parameterCompanyId={this.state.companyID} pageDetail="CrmCompanyProduct/GetByCompanyId" />
      // </div>
    )
  }
}

export default withRouter(CompanyProductList);;
