import React, { Component } from "react";
import { withRouter } from "react-router";
import AdminGrid from "../../../../components/Admin-Grid/AdminGrid";
import { Button } from "antd";
import 'react-toastify/dist/ReactToastify.css';
import CompanyProductAdd from "./CompanyProductAdd";

class CompanyProductList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      refresh: false,
      product: {
        companyID: props.companyID,
        productID: 0,
        qty: 0
      },
      visible: false,
      columnDefs: [

        { field: 'companyID' ,hide:true, sortable: true, headerName: "شناسه  ", filter: 'agNumberColumnFilter', width: 50 },
        { field: 'rowID', sortable: true, headerName: " ردیف ", filter: 'agNumberColumnFilter', width: 75 },
        { field: 'productID', sortable: true, headerName: " کد محصول", filter: 'agTextColumnFilter', width: 120 },
        { field: 'qty', sortable: true, headerName: "تعداد  ", filter: 'agTextColumnFilter', width: 250 },
        { field: 'comment', sortable: true, headerName: " توضیحات ", filter: 'agNumberColumnFilter', width: 170 },
      ]
    };
  }
  handleCallback = (childData) => {
    this.setState({
      visible: false,
      refresh:false,
      product: {
        companyID: childData.companyID,
        rowID: childData.rowID,
      }
    })
    // console.log("childData",this.state.product);
  }
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };
  showModalAdd = () => {
    this.setState({
      visible: true,
      mode: 'Add',
      product: {
        companyID: this.state.product.companyID,
        rowID: null,
      }
    })
  };
  showModalEdit = () => {

    this.setState({
      mode: 'Edit',
      visible: true,
    });
  };
  showModalDelete = () => {

    this.setState({
      mode: 'Delete',
      visible: true,
    });
  };
  RefreshCompanyProduct = () => {
    this.setState({
      refresh: true,
      visible: false,
    });
   
  }

  render() {
    return (
      <div type>
        <Button.Group>
          <Button value="Add" onClick={this.showModalAdd}>ایجاد</Button>
          <Button value="Edit" onClick={this.showModalEdit}>ویرایش</Button>
          <Button value="Delete" onClick={this.showModalDelete}>حذف</Button>
        </Button.Group>
        <AdminGrid showfloatingFilter={false} pagination={false} refresh={this.state.refresh} parentCallback={this.handleCallback} isshowInLoad={true} columnDefs={this.state.columnDefs} height="20vh" isshowdetail={false} apiname="CrmCompanyProduct/GetByCompanyId" parameterCompanyId={this.state.product.companyID} pageDetail="CrmCompanyProduct/GetByCompanyId" />
        <CompanyProductAdd visible={this.state.visible} product={this.state.product} mode={this.state.mode} parentCallback={this.RefreshCompanyProduct}></CompanyProductAdd>
      </div>
    )
  }
}

export default withRouter(CompanyProductList);;
