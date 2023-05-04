import React, { Component } from "react";
import { withRouter } from "react-router";
import AdminGrid from "../../../../components/Admin-Grid/AdminGrid";
import { Button } from "antd";
import 'react-toastify/dist/ReactToastify.css';
import CompanyProductDetail from "./CompanyProductDetail";
import { toast } from "react-toastify";

class CompanyProductList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mode: "",
      refresh: false,
      visible: false,
      product: {
        companyID: props.companyID,
        productID: 0,
        qty: 0
      },
      columnDefs: [

        { field: 'companyID', hide: true, sortable: true, headerName: "شناسه  ", filter: 'agNumberColumnFilter', width: 50 },
        { field: 'rowID', sortable: true, headerName: " ردیف ", filter: 'agNumberColumnFilter', width: 75 },
        { field: 'productID', sortable: true, headerName: " کد محصول", filter: 'agTextColumnFilter', width: 120 },
        { field: 'qty', sortable: true, headerName: "تعداد  ", filter: 'agTextColumnFilter', width: 250 },
        { field: 'comment', sortable: true, headerName: " توضیحات ", filter: 'agNumberColumnFilter', width: 170 },
      ]
    };
  }

  RefreshCompanyProduct = () => {
    this.setState({
      refresh: true,
      visible: false,
    });

  }
  ClickCrud = (mode,rowselected) => {
    switch (mode) {

      case "Add":
        this.setState({
          visible: true,
          mode: 'Add',
          product: {
            companyID: this.state.product.companyID,
            rowID: null,
          }
        });
        break;
      case "Edit":
      case "Delete":
        this.setState({
          mode: mode,
          visible: true,
          product: {
            companyID: rowselected.companyID,
            rowID: rowselected.rowID,
          }
        });
        break;
      case "Detail" :
        this.props.history.push({ pathname: '/myapp/crm/company/companydetail', state: { companyID: 1 } })
        break;

    }
  }

  render() {
    return (
      <div type>
        <AdminGrid
          showfloatingFilter={false}
          pagination={false}
          refresh={this.state.refresh}
          ClickCrud={this.ClickCrud}
          isshowInLoad={true}
          columnDefs={this.state.columnDefs}
          height="20vh"
          isshowdetail={true}
          apiname="CrmCompanyProduct/GetByCompanyId"
          parameterCompanyId={this.state.product.companyID}
          pageDetail="CrmCompanyProduct/GetByCompanyId" />
        <CompanyProductDetail
          visible={this.state.visible}
          product={this.state.product}
          mode={this.state.mode}
          parentCallback={this.RefreshCompanyProduct}>
        </CompanyProductDetail>
      </div>
    )
  }
}

export default withRouter(CompanyProductList);;
