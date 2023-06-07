import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button, Select, Modal, Form, Input, Card, Col, Row, Checkbox, InputNumber, message } from 'antd';

import AuthService from "../../Services/AuthService";
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import InputIcon from "react-multi-date-picker/components/input_icon"
import { DateObject } from "react-multi-date-picker";
import dayjs from 'dayjs'
import moment, { locale } from 'jalali-moment';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import httpCaller from "../../Services/HttpService";
import AdminGrid from "../Admin-Grid/AdminGrid";

class AdminForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visibledetail: props.visibledetail,
      listid: props.listid,
      apiname: props.apiname,
      mode: props.mode,
      disable: props.disable,
      title: props.title,
      columnDefs: props.columnDefs,
      subsets: props.subsets
    }

  }
  componentWillReceiveProps = (nextProps) => {
    console.log("nextProps.columnDefs", nextProps.subsets);
    if (nextProps.visibledetail != this.state.visibledetail ||
      nextProps.listid != this.state.listid ||
      nextProps.columnDefs != this.state.columnDefs) {

      this.setState({
        visibledetail: nextProps.visibledetail,
        mode: nextProps.mode,
        disable: nextProps.disable,
        columnDefs: nextProps.columnDefs,
        listid: nextProps.listid,
        subsets: nextProps.subsets
      })
      console.log("nextProps.listid", nextProps.listid);
      this.props.form.resetFields();
      if (nextProps.mode != undefined && nextProps.mode != "Add") {
        this.GetData(nextProps.listid, true);
      }
    }
  }


  GetData = async (listid, isSOCLog) => {

    await httpCaller.CRUDGrid.GetById(this.state.apiname, listid, (result) => {
      this.props.form.setFieldsValue(result.data);
    }, () => { }, isSOCLog)

  }

  prepareData = (data) => {
    console.log("data", data);
    // data.mellicode = this.state.mellicode.mellicode;
    // data.birthdate = data.birthdate.format().replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    // data.sodoordate = data.sodoordate.format().replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    console.log("columnDefs", this.state.columnDefs);
    for (var key in data) {
      console.log("key", key);
      var result = this.state.columnDefs.filter(it => { return it.field == key })
      console.log("result", result);
      var value = data[key];
      if (value == undefined) {
        console.log("result[0]['filter']",result[0]["filter"]);
        if (result[0]["filter"] == "agNumberColumnFilter") {
          data[key] = 0
        }
        if (result[0]["filter"]== "agTextColumnFilter") {
          data[key] = ""
        }
        if (result[0]["filter"]== "agSetColumnFilter") {
          data[key] = 0
        }
        
      }
    }
    console.log("data", data);
    return data;
  }

  UpsertData = (product, isSOCLog) => {

    httpCaller.CRUDGrid.Upsert(this.state.apiname, product, (result) => {
      let res = result.data;
      if (res != null) {
        toast.warning("اطلاعات کاربر ثبت شد ");
        this.setState({
          visible: false,
        });
        this.props.parentCallback();
      }
      else {
        toast.info("اطلاعات کاربر ثبت نشد ");
      }
    }, () => { }, isSOCLog)


  }

  DeleteData = (product, isSOCLog) => {
    httpCaller.CRUDGrid.Delete(this.state.apiname, product, (result) => {
      let res = result.errors;
      if (res.length == 0) {
        toast.error("اطلاعات کاربر حذف شد ");
        this.setState({
          visible: false,
        });
        this.props.parentCallback();
      }
      else {
        toast.error(res[0].desc + "اطلاعات کاربر حذف نشد ");
      }
    }, () => { }, isSOCLog)

  }

  handleSubmit = e => {
    e.preventDefault();
    let data = null;
    this.props.form.validateFields((err, values) => {
      if (!err) {

        data = this.prepareData(values);
        console.log('Received values of form: ', data);
        switch (this.state.mode) {
          case "Add":
          case "Edit":
            this.UpsertData(data, true);
            break;
          case "Delete":
            this.DeleteData(data);
            break;
          case "Detail":
            break;
        }
        this.props.ClickForm();
      }
    });

  };

  handleCancelButtonClick = () => {
    this.props.ClickForm();
  }

  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (

      <Modal
        footer={null}
        width={1000}
        title={this.state.mode === "Add" ? "ایجاد" : this.state.mode === "Edit" ? "ویرایش" : "حذف"}
        visible={this.state.visibledetail}
        onOk={this.handleSubmit}
        okButtonProps={{ style: { display: this.state.mode === "Detail" ? 'none' : '' } }}
        onCancel={this.handleCancelButtonClick}
        okType={this.state.mode === "Delete" ? "danger" : "primary"}
        okText={this.state.mode === "Add" ? "ایجاد" : this.state.mode === "Edit" ? "ویرایش" : "حذف"}>
        {/* <Card className="gx-card" style={{paddingRight:30}} title={(this.state.mode === "Add" ? "ایجاد" : this.state.mode === "Edit" ? "ویرایش" : this.state.mode === "Delete" ? "حذف" : "" ) + " " + this.state.title}> */}
        <Form

          onSubmit={this.handleSubmit}
          name="basic"
          // layout="inline"
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 14,
          }}
          autoComplete="off"
        >
          <Row >

            {this.state.columnDefs.map(child =>
              <Col lg={8} md={8} xs={24} sm={8} xl={8}  >
                <Form.Item
                  label={child.headerName}
                  name={child.field}

                >
                  {getFieldDecorator(child.field, {
                    valuePropName: child.widget == "checkbox" ? "checked" : 'value',
                    rules: [{ required: child.required, message: ' نام کاربری را وارد نمایید' }],
                  })(


                    child.widget == 'select' && child.options != undefined ?

                      <Select
                        disabled={this.state.disable}
                        showSearch
                        allowClear
                      >
                        {child.options.map(child1 => <Select.Option key={child1.key} value={child1.key} >{child1.value}</Select.Option >)}
                      </Select>
                      :
                      child.widget == 'checkbox' ?

                        <Checkbox disabled={this.state.disable} />
                        :
                        child.widget == 'datepicker' ?

                          <DatePicker
                            disabled={this.state.disable}
                            editable={!this.state.disable}
                            render={<InputIcon />}
                            calendar={persian}
                            locale={persian_fa}
                            onChange={dateObject => {
                              console.log(dateObject.format())
                            }} />
                          :

                          <Input disabled={this.state.disable} />
                  )}
                </Form.Item>
              </Col>

            )}


          </Row>
          <Row>
            <Col lg={8} md={12} xs={24} sm={12} xl={12}  >
              {this.state.mode != "Detail" ?
                <Button type={this.state.mode === "Delete" ? "danger" : "primary"} htmlType="submit"> {this.state.mode === "Add" ? "ایجاد" : this.state.mode === "Edit" ? "ویرایش" : "حذف"}</Button> : ""}
              <Button onClick={this.handleReset}>پاکسازی فرم </Button>
              <Button htmlType="button" onClick={this.handleCancelButtonClick}>بازگشت</Button>
            </Col>
          </Row>
        </Form>

        <Row>
          {
            this.state.subsets != undefined && this.state.subsets.length != 0
              ?
              this.state.subsets.map(item =>
                <Col lg={12}>
                  <Card className="gx-card" title={item.title} style={{ paddingRight: 20 }}>
                    <AdminGrid
                      isshowInLoad={true}
                      columnDefs={item.columnDefs}
                      filterExternal={item.filterExternal}
                      height="35vh" title="لیست محصولات"
                      isshowbutton={true}
                      idname={item.idname}
                      // refresh={this.state.refresh}
                      apiname={item.apiname}
                      showfloatingFilter={false} />
                  </Card>
                </Col>

              )
              : ""
          }
        </Row>


        {/* </Card> */}
      </Modal>
    )
  }
}

export default withRouter(Form.create()(AdminForm));;

