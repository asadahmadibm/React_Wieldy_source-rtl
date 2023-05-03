import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button, Select, Form, Input, Card, Col, Row, InputNumber, message } from 'antd';
import AdminGrid from "../../../../components/Admin-Grid/AdminGrid";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import CheckboxRenderer from "../../../../components/Admin-Grid/CheckboxRenderer";

class CompanyList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sex: [{ indexField: 2, valueField: "زن " }, { indexField: 1, valueField: "مرد" }],
      companyID: null,
      ostan: [],
      group: [
        // {groupID: 0, groupName: 'string' },
        // { groupID: 1, groupName: '111' },
        // { groupID: 2, groupName: 'درمانگاهها' },
        // { groupID: 3, groupName: 'کیلینیکهای جراحی محدود' }
      ],
      industry: [],
      columnDefs: [
        { field: 'companyID', sortable: true, headerName: "شناسه  ", filter: 'agNumberColumnFilter', width: 120 },
        { field: 'companyName', sortable: true, headerName: " نام", filter: 'agTextColumnFilter', width: 300 },
        // {
        //     field: 'date', sortable: true, headerName: "تاریخ معامله ", filter: 'agNumberColumnFilter', width: 130,
        //     valueFormatter: params => moment(new Date(params.value).toLocaleDateString('en-US'), 'MM/DD/YYYY').isValid() == true ? moment(new Date(params.value).toLocaleDateString('en-US'), 'MM/DD/YYYY').locale('fa').format('YYYY/MM/DD') : "1111"
        // },
        { field: 'email', sortable: true, headerName: "ایمیل  ", filter: 'agTextColumnFilter', width: 250 },
        // { field: 'groupID', sortable: true, headerName: " گروه ", filter: 'agNumberColumnFilter', width: 170 },
        {
          field: 'groupID', sortable: true, headerName: " گروه  ", filter: 'agSetColumnFilter', width: 130,
          valueFormatter: params => this.getEnumValuegroup(params.value, this.state.group),
          filterParams: {
            valueFormatter: params => this.getEnumValuegroup(params.value, this.state.group), //this.getEnumValue(Number(params.value), paymentMethod),
            values: (params) => { params.success(this.state.group.map(item => item.groupID)) }
          }
        },
        // { field: 'industryID', sortable: true, headerName: " صنعت ", filter: 'agNumberColumnFilter', width: 170 },
        {
          field: 'industryID', sortable: true, headerName: " صنعت  ", filter: 'agSetColumnFilter', width: 130,
          valueFormatter: params => this.getEnumValueindustry(params.value, this.state.industry),
          filterParams: {
            valueFormatter: params => this.getEnumValueindustry(params.value, this.state.industry), //this.getEnumValue(Number(params.value), paymentMethod),
            values: (params) => { params.success(this.state.industry.map(item => item.industryID)) }
          }
        },
        // { field: 'regionID', sortable: true, headerName: " ناحیه ", filter: 'agNumberColumnFilter', width: 170 },
        {
          field: 'regionID', sortable: true, headerName: " ناحیه  ", filter: 'agSetColumnFilter', width: 130,
          valueFormatter: params => this.getEnumValueregion(params.value, this.state.ostan),
          filterParams: {
            valueFormatter: params => this.getEnumValueregion(params.value, this.state.ostan), //this.getEnumValue(Number(params.value), paymentMethod),
            values: (params) => { params.success(this.state.ostan.map(item => item.regionID)) }
          }
        },
        // { field: 'recommenderID', sortable: true, headerName: " گروه ", filter: 'agNumberColumnFilter', width: 170 },
        {
          field: 'isCustomer', sortable: true, headerName: "مشتری", filter: 'agSetColumnFilter', width: 170,
          filterParams: {
            values: [true, false]
          },
          cellRenderer: CheckboxRenderer,

        },
        {
          field: 'isActive', sortable: true, headerName: " فعال  ", filter: 'agSetColumnFilter', width: 170,
          filterParams: {
            values: [true, false]
          },
          cellRenderer: CheckboxRenderer,

        },
        {
          field: 'unsubscribed', sortable: true, headerName: "  عدم ارسال ایمیل ", filter: 'agSetColumnFilter', width: 170,
          filterParams: {
            values: [true, false]
          },
          cellRenderer: CheckboxRenderer,

        },
        { field: 'registrar', sortable: true, headerName: "  ثبت کننده ", filter: 'agTextColumnFilter', width: 170 },
        { field: 'registerDate', sortable: true, headerName: " تاریخ ثبت ", filter: 'agTextColumnFilter', width: 170 },

        { field: 'selectiveGroup', sortable: true, headerName: " گروه انتخابی ", filter: 'agTextColumnFilter', width: 170 },

      ]
    };

  }

  getEnumValuegroup = (code, formattingInfo) => {
    let foundItem = formattingInfo.find(({ groupID }) => groupID === code);
    if (!foundItem) return;
    return foundItem.groupName;
  }

  getEnumValueindustry = (code, formattingInfo) => {
    let foundItem = formattingInfo.find(({ industryID }) => industryID === code);
    if (!foundItem) return;
    return foundItem.industryName;
  }

  getEnumValueregion = (code, formattingInfo) => {
    let foundItem = formattingInfo.find(({ regionID }) => regionID === code);
    if (!foundItem) return;
    return foundItem.regionName;
  }

  getEnumValue = (code, formattingInfo) => {
    let foundItem = formattingInfo.find(({ indexField }) => indexField === code);
    if (!foundItem) return;
    return foundItem.valueField;
  }

  componentDidMount = () => {

    this.GetDataBase(false);

  }

  GetDataBase = (shouldLog) => {
    document.body.classList.add('loading-indicator');
    axios.interceptors.request.use(function (config) {
      config.headers.IsSOCLog = (shouldLog == false ? "false" : "true");
      return config;
    });
    // const getHeader = (shouldLog) => ({
    //   "IsSOCLog": (shouldLog == false ? "false" : "true"),
    //   'Authorization': "bearer " + localStorage.getItem('authUser'),
    //   "Content-Type": 'application/json',
    // });
    // console.log(getHeader(false));
    axios.post("/CRM_Region", { id: null })
      .then(response => {

        let res = response.data.data.list;
        if (res != null) {

        }
        else {
          message.info("اطلاعات استان یافت نشد ");
        }
        document.body.classList.remove('loading-indicator')
        this.setState({ ostan: res });
        console.log(res);
      }).catch(res => {
        document.body.classList.remove('loading-indicator')
        message.error("اشکال در فراخوانی سرویس استان")
      });

    axios.get("/Group/GetAll")
      .then(response => {
        let res = response.data.data;
        if (res != null) {

        }
        else {
          message.info("اطلاعات گروه یافت نشد ");
        }
        document.body.classList.remove('loading-indicator')
        this.setState({ group: res });
        console.log(res);
      }).catch(res => {
        document.body.classList.remove('loading-indicator')
        message.error("اشکال در فراخوانی سرویس گروه")
      });

    axios.get("/Industry/GetAll")
      .then(response => {
        let res = response.data.data;
        if (res != null) {

        }
        else {
          message.info("اطلاعات صنعت یافت نشد ");
        }
        document.body.classList.remove('loading-indicator')
        this.setState({ industry: res });
        console.log(res);
      }).catch(res => {
        document.body.classList.remove('loading-indicator')
        message.error("اشکال در فراخوانی سرویس صنعت")
      });


  }


  handleCallback = (childData) => {

    this.setState({ companyID: childData })
    console.log(this.state.companyID);
  }

  render() {
    return (
      <div className="gx-main-content">
        <Card className="gx-card" title="لیست شرکتها">
          <AdminGrid isshowInLoad={true} parentCallback={this.handleCallback} columnDefs={this.state.columnDefs} height="65vh" title="لیست شرکتها" isshowdetail={true} apiname="CrmCompany" pageDetail="companyDetail" />
        </Card>

      </div>
    )
  }
}

export default withRouter(Form.create()(CompanyList));;
