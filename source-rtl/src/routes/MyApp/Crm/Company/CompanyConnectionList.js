import React, { Component } from "react";
import { withRouter } from "react-router";
import AdminGrid from "../../../../components/Admin-Grid/AdminGrid";
import { Button } from "antd";
import 'react-toastify/dist/ReactToastify.css';
import CompanyConnectionDetail from "./CompanyConnectionDetail";
import { toast } from "react-toastify";
import CheckboxRenderer from "../../../../components/Admin-Grid/CheckboxRenderer";

class CompanyConnectionList extends Component {

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

        { field: 'companyID', hide: true, sortable: true, headerName: "شناسه  ", filter: 'agNumberColumnFilter', width: 120 },
        { field: 'rowID', sortable: true, headerName: " ردیف ", filter: 'agNumberColumnFilter', width: 75 },
        { field: 'fullName', sortable: true, headerName: " نام و نام خانوادگی ", filter: 'agTextColumnFilter', width: 150 },
        { field: 'position', sortable: true, headerName: "سمت  ", filter: 'agTextColumnFilter', width: 250 },
        { field: 'telphone', sortable: true, headerName: "تلفن  ", filter: 'agTextColumnFilter', width: 250 },
        { field: 'email', sortable: true, headerName: " ایمیل ", filter: 'agNumberColumnFilter', width: 170 },
        {
          field: 'isActive', sortable: true, headerName: "فعال", filter: 'agSetColumnFilter', width: 170,
          filterParams: {
            values: [true, false]
          },
          cellRenderer: CheckboxRenderer,

        },
        {
          field: 'unsubscribed', sortable: true, headerName: "عدم ارسال ایمیل ", filter: 'agSetColumnFilter', width: 170,
          filterParams: {
            values: [true, false]
          },
          cellRenderer: CheckboxRenderer,

        },

      ]
    };
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState({
      visible: nextProps.visible,
      refresh:false
    })
  }

  RefreshCompanyProduct = () => {
    this.setState({
      refresh: true,
      visible: false,
    });

  }
  ClickCrud = (mode, rowselected) => {
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
      case "Detail":
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
          apiname="CrmCompanyConnection/GetByCompanyId"
          parameterCompanyId={this.state.product.companyID}
          pageDetail="CrmCompanyProduct/GetByCompanyId" />
        <CompanyConnectionDetail
          visible={this.state.visible}
          product={this.state.product}
          mode={this.state.mode}
          parentCallback={this.RefreshCompanyProduct}>
        </CompanyConnectionDetail>
      </div>
    )
  }
}

export default withRouter(CompanyConnectionList);;
