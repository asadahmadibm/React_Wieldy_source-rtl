import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button, Select, Form, Input, Card, Col, Row, InputNumber, message } from 'antd';
import AdminGrid from "../../../../components/Admin-Grid/AdminGrid";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

class CompanyList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sex: [{ indexField: 2, valueField: "زن " }, { indexField: 1, valueField: "مرد" }],
      companyID:null,

      columnDefs: [
          { field: 'companyID', sortable: true, headerName: "شناسه  ", filter: 'agNumberColumnFilter', width: 120 },
          { field: 'companyName', sortable: true, headerName: " نام", filter: 'agTextColumnFilter', width: 300 },
          // {
          //     field: 'date', sortable: true, headerName: "تاریخ معامله ", filter: 'agNumberColumnFilter', width: 130,
          //     valueFormatter: params => moment(new Date(params.value).toLocaleDateString('en-US'), 'MM/DD/YYYY').isValid() == true ? moment(new Date(params.value).toLocaleDateString('en-US'), 'MM/DD/YYYY').locale('fa').format('YYYY/MM/DD') : "1111"
          // },
          { field: 'email', sortable: true, headerName: "ایمیل  ", filter: 'agTextColumnFilter', width: 250 },
          { field: 'groupID', sortable: true, headerName: " گروه ", filter: 'agNumberColumnFilter', width: 170 },
          { field: 'industryID', sortable: true, headerName: " صنعت ", filter: 'agNumberColumnFilter', width: 170 },
          { field: 'regionID', sortable: true, headerName: " ناحیه ", filter: 'agNumberColumnFilter', width: 170 },
          // { field: 'recommenderID', sortable: true, headerName: " گروه ", filter: 'agNumberColumnFilter', width: 170 },

        //   {
        //     field: 'sex', sortable: true, headerName: " جنسیت ", filter: 'agSetColumnFilter', width: 130,
        //     valueFormatter: params => this.getEnumValue(params.value, this.state.sex),
        //     filterParams: {
        //         valueFormatter: params => this.getEnumValue(params.value, this.state.sex), //this.getEnumValue(Number(params.value), paymentMethod),
        //         values: (params) => { params.success(this.state.sex.map(item => item.indexField)) }
        //     }
        // },
          { field: 'isCustomer', sortable: true, headerName: "مشتری", filter: 'agTextColumnFilter', width: 170 },
          { field: 'isActive', sortable: true, headerName: " فعال  ", filter: 'agTextColumnFilter', width: 170 },
          { field: 'unsubscribed', sortable: true, headerName: "  عدم ارسال ایمیل ", filter: 'agTextColumnFilter', width: 170 },
          { field: 'registrar', sortable: true, headerName: "  ثبت کننده ", filter: 'agTextColumnFilter', width: 170 },
          { field: 'registerDate', sortable: true, headerName: " تاریخ ثبت ", filter: 'agTextColumnFilter', width: 170 },
         
          { field: 'selectiveGroup', sortable: true, headerName: " گروه انتخابی ", filter: 'agTextColumnFilter', width: 170 },

      ]
  };
   
  }

  componentDidMount = () => {

  }
  getEnumValue = (code, formattingInfo) => {
    let foundItem = formattingInfo.find(({ indexField }) => indexField === code);
    if (!foundItem) return;
    return foundItem.valueField;
}
handleCallback = (childData) =>{
        
  this.setState({companyID:childData})
   console.log(this.state.companyID);
}
  
  render() {
    return (
      <div className="gx-main-content">
      <Card className="gx-card" title="لیست شرکتها">
      <AdminGrid  isshowInLoad={true}  parentCallback = {this.handleCallback}  columnDefs={this.state.columnDefs} height="65vh" title="لیست شرکتها" isshowdetail={true} apiname="CrmCompany" pageDetail="companyDetail" />
      </Card>
      
    </div>
    )
  }
}

export default withRouter(Form.create()(CompanyList));;
