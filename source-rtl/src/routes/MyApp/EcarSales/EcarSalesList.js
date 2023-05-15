import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button, Select, Form, Input, Card, Col, Row, InputNumber, message } from 'antd';
import AdminGrid from "../../../components/Admin-Grid/AdminGrid";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import AdminForm from "../../../components/Admin-Form/AdminForm";

class EcarSalesList extends Component {

  constructor(props) {
    super(props)
    let sexarray = [{ indexField: 2, valueField: "زن " }, { indexField: 1, valueField: "مرد" }]
    this.state = {
      visibledetail:false,
      refresh: false,
      rowselected: [],
      sex: sexarray,
      mellicode: '',

      columnDefs: [
        { field: 'id', sortable: true, headerName: "شناسه  ", filter: 'agNumberColumnFilter', width: 120, required: true },
        { field: 'name', sortable: true, headerName: " نام", filter: 'agTextColumnFilter', width: 138 },
        // {
        //     field: 'date', sortable: true, headerName: "تاریخ معامله ", filter: 'agNumberColumnFilter', width: 130,
        //     valueFormatter: params => moment(new Date(params.value).toLocaleDateString('en-US'), 'MM/DD/YYYY').isValid() == true ? moment(new Date(params.value).toLocaleDateString('en-US'), 'MM/DD/YYYY').locale('fa').format('YYYY/MM/DD') : "1111"
        // },
        { field: 'family', sortable: true, headerName: "نام خانوادگی ", filter: 'agTextColumnFilter', width: 170 },
        { field: 'mellicode', sortable: true, headerName: "کد ملی ", filter: 'agTextColumnFilter', width: 170 },
        {
          field: 'sex', sortable: true, headerName: " جنسیت ", filter: 'agSetColumnFilter', width: 130, widget: 'select',
          options: sexarray,
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


  ClickCrud = (mode, rowselected) => {
    console.log("rowselected", rowselected);
    switch (mode) {

      case "Add":
        this.setState({ visibledetail: true, mode: "Add",refresh:false })
        // this.props.history.push({ pathname: '/myapp/EcarSales', state: { mellicode: null } })
        break;
      case "Edit":
      case "Delete":
      case "Detail":
        this.setState({ visibledetail: true, mode: mode, rowselected: rowselected,refresh:false })
        // this.props.history.push({ pathname: '/myapp/EcarSales', state: { mellicode: rowselected.mellicode } })
        break;
    }
  }

  ClickForm = () => {
    this.setState({ visibledetail: false, refresh: true })
  }


  render() {
    return (
      <div className="gx-main-content">
        <AdminForm
          ClickForm={this.ClickForm}
          mode={this.state.mode}
          columnDefs={this.state.columnDefs}
          title="کاربران"
          listid={[{id:this.state.rowselected.mellicode}]}
          apiname="EcarSales"
          visibledetail={this.state.visibledetail}
        />

        <Card className="gx-card" title="لیست کاربران">
          <AdminGrid
            ClickCrud={this.ClickCrud}
            isshowInLoad={true}
            columnDefs={this.state.columnDefs}
            height="65vh"
            title="لیست کاربران"
            isshowdetail={true}
            apiname="EcarSales"
            pageDetail="index"
            refresh={this.state.refresh} />
        </Card>
      </div>
    )
  }
}

export default withRouter(Form.create()(EcarSalesList));;
