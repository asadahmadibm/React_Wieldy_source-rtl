import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button, Select, Form, Input, Card, Col, Row, InputNumber, message } from 'antd';
import AdminGrid from "../../../components/Admin-Grid/AdminGrid";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

class EcarSalesList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sex: [{ indexField: 2, valueField: "زن " }, { indexField: 1, valueField: "مرد" }],
      mellicode:'',

      columnDefs: [
          { field: 'id', sortable: true, headerName: "شناسه  ", filter: 'agNumberColumnFilter', width: 120 },
          { field: 'name', sortable: true, headerName: " نام", filter: 'agTextColumnFilter', width: 138 },
          // {
          //     field: 'date', sortable: true, headerName: "تاریخ معامله ", filter: 'agNumberColumnFilter', width: 130,
          //     valueFormatter: params => moment(new Date(params.value).toLocaleDateString('en-US'), 'MM/DD/YYYY').isValid() == true ? moment(new Date(params.value).toLocaleDateString('en-US'), 'MM/DD/YYYY').locale('fa').format('YYYY/MM/DD') : "1111"
          // },
          { field: 'family', sortable: true, headerName: "نام خانوادگی ", filter: 'agTextColumnFilter', width: 170 },
          { field: 'mellicode', sortable: true, headerName: "کد ملی ", filter: 'agTextColumnFilter', width: 170 },
          {
            field: 'sex', sortable: true, headerName: " جنسیت ", filter: 'agSetColumnFilter', width: 130,
            valueFormatter: params => this.getEnumValue(params.value, this.state.sex),
            filterParams: {
                valueFormatter: params => this.getEnumValue(params.value, this.state.sex), //this.getEnumValue(Number(params.value), paymentMethod),
                values: (params) => { params.success(this.state.sex.map(item => item.indexField)) }
            }
        },
          { field: 'shenasnameno', sortable: true, headerName: " شماره شناسنامه ", filter: 'agTextColumnFilter', width: 170 },
          { field: 'birthdate', sortable: true, headerName: " تاریخ تولد ", filter: 'agTextColumnFilter', width: 170 },
          { field: 'sodoordate', sortable: true, headerName: " تاریخ صدور ", filter: 'agTextColumnFilter', width: 170 },
          { field: 'fathername', sortable: true, headerName: " نام پدر ", filter: 'agTextColumnFilter', width: 170 },
          { field: 'mobile', sortable: true, headerName: " موبایل ", filter: 'agTextColumnFilter', width: 170 },
          { field: 'tel', sortable: true, headerName: " تلفن ", filter: 'agTextColumnFilter', width: 170 },
          { field: 'posticode', sortable: true, headerName: " کدپستی ", filter: 'agTextColumnFilter', width: 170 },
          { field: 'ostansodoor', sortable: true, headerName: "استان صدور  ", filter: 'agNumberColumnFilter', width: 120 },
          { field: 'citysodoor', sortable: true, headerName: "شهر صدور  ", filter: 'agNumberColumnFilter', width: 120 },
          { field: 'birthostan', sortable: true, headerName: "استان تولد  ", filter: 'agNumberColumnFilter', width: 120 },
          { field: 'birthcity', sortable: true, headerName: "شهر تولد  ", filter: 'agNumberColumnFilter', width: 120 },
          { field: 'ostansokoonat', sortable: true, headerName: "استان سکونت  ", filter: 'agNumberColumnFilter', width: 120 },
          { field: 'citysokoonat', sortable: true, headerName: "شهر سکونت  ", filter: 'agNumberColumnFilter', width: 120 },
         
          { field: 'khiyaban', sortable: true, headerName: " خیابان ", filter: 'agTextColumnFilter', width: 170 },
          { field: 'kooche', sortable: true, headerName: " کوچه ", filter: 'agTextColumnFilter', width: 170 },
          { field: 'pelak', sortable: true, headerName: " پلاک ", filter: 'agTextColumnFilter', width: 170 },
          { field: 'mantaghecode', sortable: true, headerName: " کد منطقه ", filter: 'agTextColumnFilter', width: 170 },
          { field: 'address', sortable: true, headerName: " ادرس ", filter: 'agTextColumnFilter', width: 170 },

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
        
  this.setState({mellicode:childData})
   console.log(this.state.mellicode);
}
  
  render() {
    return (
      <div className="gx-main-content">
      <Card className="gx-card" title="لیست کاربران">
      <AdminGrid  isshowInLoad={true}  parentCallback = {this.handleCallback}  columnDefs={this.state.columnDefs} height="65vh" title="لیست کاربران" isshowdetail={true} apiname="EcarSales" pageDetail="index" />
      </Card>
      
    </div>
    )
  }
}

export default withRouter(Form.create()(EcarSalesList));;
