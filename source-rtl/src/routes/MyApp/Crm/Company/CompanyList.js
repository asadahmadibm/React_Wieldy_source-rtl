import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button, Select, Form, Input, Card, Col, Row, InputNumber, message } from 'antd';
import AdminGrid from "../../../../components/Admin-Grid/AdminGrid";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import CheckboxRenderer from "../../../../components/Admin-Grid/CheckboxRenderer";
import AdminForm from "../../../../components/Admin-Form/AdminForm";
import httpCaller from "../../../../Services/HttpService";

class CompanyList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visibledetail: false,
      disable: false,
      refresh: false,
      rowselected: [],
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
          field: 'groupID', sortable: true, headerName: " گروه  ", filter: 'agSetColumnFilter', width: 130, widget: 'select',
          options: [],
          valueFormatter: params => this.getEnumValue(params.value, this.state.group),
          filterParams: {
            valueFormatter: params => this.getEnumValue(params.value, this.state.group), //this.getEnumValue(Number(params.value), paymentMethod),
            values: (params) => { params.success(this.state.group.map(item => item.key)) }
          }
        },
        // { field: 'industryID', sortable: true, headerName: " صنعت ", filter: 'agNumberColumnFilter', width: 170 },
        {
          field: 'industryID', sortable: true, headerName: " صنعت  ", filter: 'agSetColumnFilter', width: 130, widget: 'select',
          options: [],
          valueFormatter: params => this.getEnumValue(params.value, this.state.industry),
          filterParams: {
            valueFormatter: params => this.getEnumValue(params.value, this.state.industry), //this.getEnumValue(Number(params.value), paymentMethod),
            values: (params) => { params.success(this.state.industry.map(item => item.key)) }
          }
        },
        // { field: 'regionID', sortable: true, headerName: " ناحیه ", filter: 'agNumberColumnFilter', width: 170 },
        {
          field: 'regionID', sortable: true, headerName: " ناحیه  ", filter: 'agSetColumnFilter', width: 160
          , widget: 'select', options: [],
          valueFormatter: params => this.getEnumValue(params.value, this.state.ostan),
          filterParams: {
            valueFormatter: params => this.getEnumValue(params.value, this.state.ostan), //this.getEnumValue(Number(params.value), paymentMethod),
            values: (params) => { params.success(this.state.ostan.map(item => item.key)) }
          }
        },
        // { field: 'recommenderID', sortable: true, headerName: " گروه ", filter: 'agNumberColumnFilter', width: 170 },
        {
          field: 'isCustomer', sortable: true, headerName: "مشتری", filter: 'agSetColumnFilter', width: 170, widget: 'checkbox',
          filterParams: {
            values: [true, false]
          },
          cellRenderer: CheckboxRenderer,

        },
        {
          field: 'isActive', sortable: true, headerName: " فعال  ", filter: 'agSetColumnFilter', width: 170, widget: 'checkbox',
          filterParams: {
            values: [true, false]
          },
          cellRenderer: CheckboxRenderer,

        },
        {
          field: 'unsubscribed', sortable: true, headerName: "  عدم ارسال ایمیل ", filter: 'agSetColumnFilter', width: 170, widget: 'checkbox',
          filterParams: {
            values: [true, false]
          },
          cellRenderer: CheckboxRenderer,

        },
        { field: 'registrar', sortable: true, headerName: "  ثبت کننده ", filter: 'agTextColumnFilter', width: 170 },
        {
          field: 'registerDate', sortable: true, headerName: " تاریخ ثبت ", filter: 'agTextColumnFilter', width: 170,

          widget: 'datepicker'
        },

        { field: 'selectiveGroup', sortable: true, headerName: " گروه انتخابی ", filter: 'agTextColumnFilter', width: 170 },
        { field: 'address', sortable: true, headerName: " خیابان ", filter: 'agTextColumnFilter', width: 170 },
      ]
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

  GetDataBase = (isSOCLog) => {

    var data = { id: null };

    httpCaller.EcarSales.GetDropDown(data,(result) => {
      
      this.setState({ ostan: result.data.list });
      let columnDefs = [...this.state.columnDefs];
      const indexostansokoonat = this.state.columnDefs.findIndex(emp => emp.field === "regionID");
      let columnDefostansokoonat = { ...columnDefs[indexostansokoonat] };
      columnDefostansokoonat.options = this.state.ostan;
      columnDefs[indexostansokoonat] = columnDefostansokoonat
  
      this.setState({ columnDefs });

    }, () => { }, isSOCLog)

    httpCaller.Group.GetDropDown((result) => {
      
      this.setState({ group: result.data });
      let columnDefs = [...this.state.columnDefs];
      const indexgroupID = this.state.columnDefs.findIndex(emp => emp.field === "groupID");
      let columnDefgroupID = { ...columnDefs[indexgroupID] };
      columnDefgroupID.options = this.state.group;
      columnDefs[indexgroupID] = columnDefgroupID
      this.setState({ columnDefs });

    }, () => { }, isSOCLog)

   
    httpCaller.Industry.GetDropDown((result) => {

      this.setState({ industry: result.data });
      let columnDefs = [...this.state.columnDefs];
      const indexindustryID = this.state.columnDefs.findIndex(emp => emp.field === "industryID");
      let columnDefindustryID = { ...columnDefs[indexindustryID] };
      columnDefindustryID.options = this.state.industry;
      columnDefs[indexindustryID] = columnDefindustryID
  
      this.setState({ columnDefs });

    }, () => { }, isSOCLog)

    
  

  }

  ClickCrud = (mode, rowselected) => {
    // console.log("ClickCrud.this.state.columnDefs",this.state.columnDefs);
    switch (mode) {

      case "Add":
        // this.props.history.push({ pathname: '/myapp/crm/company/companydetail', state: { listid: null } })
        this.setState({ visibledetail: true, mode: "Add", refresh: false, columnDefs: this.state.columnDefs })
        break;
      case "Edit":
      case "Delete":
      case "Detail":
        this.setState({
          visibledetail: true,
          mode: mode,
          disable: mode == "Delete" || mode == "Detail" ? true : false,
          rowselected: rowselected,
          refresh: false,
          columnDefs: this.state.columnDefs
        })
      // this.props.history.push({ pathname: '/myapp/crm/company/companydetail', state: { listid: [{ id:rowselected.companyID.toString()}] } })

    }
  }

  ClickForm = () => {
    this.setState({ visibledetail: false, refresh: true })
  }
  Refreshlist = () => {
    this.setState({
      refresh: true,
      visible: false,
    });

  }

  render() {
    return (
      <div className="gx-main-content">
        <AdminForm
          ClickForm={this.ClickForm}
          mode={this.state.mode}
          disable={this.state.disable}
          columnDefs={this.state.columnDefs}
          title="شرکتها"
          listid={[{ id: this.state.rowselected.companyID == undefined ? "" : this.state.rowselected.companyID.toString() }]}
          apiname="CrmCompany"
          visibledetail={this.state.visibledetail}
          parentCallback={this.Refreshlist}
        />
        <Card className="gx-card" title="لیست شرکتها">
          <AdminGrid
            ClickCrud={this.ClickCrud}
            isshowInLoad={true}
            columnDefs={this.state.columnDefs}
            height="65vh" title="لیست شرکتها"
            isshowdetail={true}
            refresh={this.state.refresh}
            apiname="CrmCompany"
            pageDetail="companyDetail"
            showfloatingFilter={true} />
        </Card>

      </div>
    )
  }
}

export default withRouter(Form.create()(CompanyList));;
