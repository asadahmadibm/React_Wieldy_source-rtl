import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button, Select, Form, Input, Card, Col, Row, InputNumber, message } from 'antd';
import AdminGrid from "../../../components/Admin-Grid/AdminGrid";
import httpCaller from "../../../Services/HttpService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import AdminForm from "../../../components/Admin-Form/AdminForm";

class EcarSalesList extends Component {

  constructor(props) {
    super(props)
    let sexarray = [{ key: 2, value: "زن " }, { key: 1, value: "مرد" }]
    this.state = {
      sex: sexarray,
      mellicode: '',
      ostan: [],
      city: [],

      columnDefs: [
        { field: 'id', sortable: true, headerName: "شناسه  ", filter: 'agNumberColumnFilter', width: 120,  },
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
            values: (params) => { params.success(this.state.sex.map(item => item.key)) }
          }
        },
        { field: 'shenasnameno', sortable: true, headerName: " شماره شناسنامه ", filter: 'agTextColumnFilter', width: 170 },
        { field: 'birthdate', sortable: true, headerName: " تاریخ تولد ", filter: 'agTextColumnFilter', width: 170 , widget: 'datepicker'},
        { field: 'sodoordate', sortable: true, headerName: " تاریخ صدور ", filter: 'agTextColumnFilter', width: 170 },
        { field: 'fathername', sortable: true, headerName: " نام پدر ", filter: 'agTextColumnFilter', width: 170 },
        { field: 'mobile', sortable: true, headerName: " موبایل ", filter: 'agTextColumnFilter', width: 170 },
        { field: 'tel', sortable: true, headerName: " تلفن ", filter: 'agTextColumnFilter', width: 170 },
        { field: 'posticode', sortable: true, headerName: " کدپستی ", filter: 'agTextColumnFilter', width: 170 },
        {
          field: 'ostansodoor', sortable: true, headerName: "استان صدور  ", filter: 'agSetColumnFilter', width: 160
          , widget: 'select', options: [],
          valueFormatter: params => this.getEnumValue(params.value, this.state.ostan),
          filterParams: {
            valueFormatter: params => this.getEnumValue(params.value, this.state.ostan), //this.getEnumValue(Number(params.value), paymentMethod),
            values: (params) => { params.success(this.state.ostan.map(item => item.key)) }
          }
        },
        {
          field: 'citysodoor', sortable: true, headerName: "شهر صدور  ", filter: 'agSetColumnFilter', width: 160
          , widget: 'select', options: [],
          valueFormatter: params => this.getEnumValue(params.value, this.state.city),
          filterParams: {
            valueFormatter: params => this.getEnumValue(params.value, this.state.city), //this.getEnumValue(Number(params.value), paymentMethod),
            values: (params) => { params.success(this.state.city.map(item => item.key)) }
          }
        },
        {
          field: 'ostanbirth', sortable: true, headerName: "استان تولد  ", filter: 'agNumberColumnFilter', width: 160
          , widget: 'select', options: [],
          valueFormatter: params => this.getEnumValue(params.value, this.state.ostan),
          filterParams: {
            valueFormatter: params => this.getEnumValue(params.value, this.state.ostan), //this.getEnumValue(Number(params.value), paymentMethod),
            values: (params) => { params.success(this.state.ostan.map(item => item.key)) }
          }
        },
        {
          field: 'citybirth', sortable: true, headerName: "شهر تولد  ", filter: 'agNumberColumnFilter', width: 160
          , widget: 'select', options: [],
          valueFormatter: params => this.getEnumValue(params.value, this.state.city),
          filterParams: {
            valueFormatter: params => this.getEnumValue(params.value, this.state.city), //this.getEnumValue(Number(params.value), paymentMethod),
            values: (params) => { params.success(this.state.city.map(item => item.key)) }
          }
        },
        {
          field: 'ostansokoonat', sortable: true, headerName: "استان سکونت  ", filter: 'agNumberColumnFilter', width: 160
          , widget: 'select', options: [],
          valueFormatter: params => this.getEnumValue(params.value, this.state.ostan),
          filterParams: {
            valueFormatter: params => this.getEnumValue(params.value, this.state.ostan), //this.getEnumValue(Number(params.value), paymentMethod),
            values: (params) => { params.success(this.state.ostan.map(item => item.key)) }
          }
        },
        {
          field: 'citysokoonat', sortable: true, headerName: "شهر سکونت  ", filter: 'agNumberColumnFilter', width: 160
          , widget: 'select', options: [],
          valueFormatter: params => this.getEnumValue(params.value, this.state.city),
          filterParams: {
            valueFormatter: params => this.getEnumValue(params.value, this.state.city), //this.getEnumValue(Number(params.value), paymentMethod),
            values: (params) => { params.success(this.state.city.map(item => item.key)) }
          }
        },

        { field: 'khiyaban', sortable: true, headerName: " خیابان ", filter: 'agTextColumnFilter', width: 170 },
        { field: 'kooche', sortable: true, headerName: " کوچه ", filter: 'agTextColumnFilter', width: 170 },
        { field: 'pelak', sortable: true, headerName: " پلاک ", filter: 'agTextColumnFilter', width: 170 },
        { field: 'mantaghecode', sortable: true, headerName: " کد منطقه ", filter: 'agTextColumnFilter', width: 170 },
        { field: 'address', sortable: true, headerName: " ادرس ", filter: 'agTextColumnFilter', width: 170 },

      ],
      subsets: []
    };

  }

  getEnumValue = (code, formattingInfo) => {
    let foundItem = formattingInfo.find(({ key }) => key === code);
    if (!foundItem) return;
    return foundItem.value;
  }

  componentDidMount = () => {
    this.GetDataBase(false);
  }

  prepareData = (pageIdx) => {
    return {
      pageIndex: parseInt(pageIdx),
      pageSize: parseInt(this.state.pageSize),
    }
  }

  prepareDataParent = () => {
    return {
      id: 1,
    }
  }
  GetDataBase = (isSOCLog) => {

    var data = {id: 1};
    httpCaller.EcarSales.GetDropDown(data,(result) => {
      this.setState({ ostan: result.data.list });
      let columnDefs = [...this.state.columnDefs];
      const indexostansodoor = this.state.columnDefs.findIndex(emp => emp.field === "ostansodoor");
      let columnDefostansodoor = { ...columnDefs[indexostansodoor] };
      columnDefostansodoor.options = this.state.ostan;
      columnDefs[indexostansodoor] = columnDefostansodoor
      
      const indexostanbirth = this.state.columnDefs.findIndex(emp => emp.field === "ostanbirth");
      let columnDefostanbirth = { ...columnDefs[indexostanbirth] };
      columnDefostanbirth.options = this.state.ostan;
      columnDefs[indexostanbirth] = columnDefostanbirth
  
  
      const indexostansokoonat = this.state.columnDefs.findIndex(emp => emp.field === "ostansokoonat");
      let columnDefostansokoonat = { ...columnDefs[indexostansokoonat] };
      columnDefostansokoonat.options = this.state.ostan;
      columnDefs[indexostansokoonat] = columnDefostansokoonat

      this.setState({columnDefs})
  

  
    }
    , () => { }, isSOCLog)

    var data = { id: null };

    httpCaller.EcarSales.GetDropDown(data,(result) => {

      this.setState({ city: result.data.list });

      let columnDefs = [...this.state.columnDefs];
      const indexcitysodoor = this.state.columnDefs.findIndex(emp => emp.field === "citysodoor");
      let columnDefcitysodoor = { ...columnDefs[indexcitysodoor] };
      columnDefcitysodoor.options = this.state.city;
      columnDefs[indexcitysodoor] = columnDefcitysodoor
  
      const indexcitybirth = this.state.columnDefs.findIndex(emp => emp.field === "citybirth");
      let columnDefcitybirth = { ...columnDefs[indexcitybirth] };
      columnDefcitybirth.options = this.state.city;
      columnDefs[indexcitybirth] = columnDefcitybirth
  
  
      const indexcitysokoonat = this.state.columnDefs.findIndex(emp => emp.field === "citysokoonat");
      let columnDefcitysokoonat = { ...columnDefs[indexcitysokoonat] };
      columnDefcitysokoonat.options = this.state.city;
      columnDefs[indexcitysokoonat] = columnDefcitysokoonat

      this.setState({columnDefs})

    }, () => { }, isSOCLog)

  }

  render() {
    return (
        <Card className="gx-card" title="لیست کاربران">
          <AdminGrid
            isshowInLoad={true}
            columnDefs={this.state.columnDefs}
            idname="mellicode"
            height="65vh"
            title="لیست کاربران"
            isshowbutton={true}
            apiname="EcarSales"
            refresh={this.state.refresh} />
        </Card>
    )
  }
}

export default withRouter(Form.create()(EcarSalesList));;
