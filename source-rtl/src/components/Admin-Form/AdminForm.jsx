import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button, Select, Modal, Form, Input, Card, Col, Row, InputNumber, message } from 'antd';

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

class AdminForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visibledetail: props.visibledetail,
      listid: props.listid,
      apiname: props.apiname,
      mode: props.mode,
      title: props.title,
      columnDefs: props.columnDefs
    }

  }

  componentDidMount = () => {
    console.log("this.state.id)", this.state.id);
    // this.GetData(this.state.id);
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.visibledetail != this.state.visibledetail) {

      this.setState({
        visibledetail: nextProps.visibledetail,
        mode: nextProps.mode,
      })
      this.props.form.resetFields();
      if (nextProps.mode != undefined && nextProps.mode != "Add") {
        this.GetData(nextProps.listid);
        // console.log("this.state.product", this.state);
      }
    }
  }


  GetData = (listid) => {
    // let data = UserService.GetProfile();
    // this.props.form.setFieldsValue(data);
    this.props.form.resetFields();
    document.body.classList.add('loading-indicator');
    console.log("JSON.stringify(listid) ",listid );
    axios.post("/" + this.state.apiname + "/GetById" ,listid   )
      .then(response => {
        let res = response.data.data;
        if (res != null) {
          //   res.birthdate = new DateObject({ date: res.birthdate, calendar: persian, locale: persian_fa });//"1355/05/21",
          //   res.sodoordate = new DateObject({ date: res.sodoordate, calendar: persian, locale: persian_fa });//"1355/05/21",
        }
        else {
          message.info("اطلاعات کاربر یافت نشد ");
        }
        document.body.classList.remove('loading-indicator')
        this.props.form.setFieldsValue(res);
        console.log(res);
      }).catch(res => {
        document.body.classList.remove('loading-indicator')
        message.error("اشکال در فراخوانی سرویس")
      });
  }

  prepareData = (data) => {
    // data.mellicode = this.state.mellicode.mellicode;
    // data.birthdate = data.birthdate.format().replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    // data.sodoordate = data.sodoordate.format().replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    return data;
  }

  AddData = (product) => {
    // const CreateCompanyProductDTO = {
    //   CompanyId: product.companyID,
    //   ProductID: product.productID,
    //   rowID: product.rowID,
    //   Qty: product.qty,
    //   Comment : product.comment,
    // }
    // console.log("product");
    // console.log(product);
    document.body.classList.add('loading-indicator');
    axios.post("/" + this.state.apiname + "/Insert", product)
      .then(response => {
        toast.info("اطلاعات کاربر ایجاد شد ");
        let res = response.data.data;
        if (res != null) {
          this.setState({
            visible: false,
          });
          this.props.parentCallback();
          // res.birthdate = new DateObject({ date: res.birthdate, calendar: persian, locale: persian_fa });//"1355/05/21",
          // res.sodoordate = new DateObject({ date: res.sodoordate, calendar: persian, locale: persian_fa });//"1355/05/21",
        }
        else {
          toast.info("اطلاعات کاربر ایجاد نشد ");
        }
        document.body.classList.remove('loading-indicator')

      }).catch(res => {
        document.body.classList.remove('loading-indicator')
        toast.error("اشکال در فراخوانی سرویس")
      });
  }

  UpdateData = (product) => {
    // const CreateCompanyProductDTO = {
    //   CompanyId: product.companyID,
    //   ProductID: product.productID,
    //   rowID: product.rowID,
    //   Qty: product.qty,
    //   Comment : product.comment,
    // }
    // console.log("product");
    // console.log(product);
    document.body.classList.add('loading-indicator');
    axios.post("/" + this.state.apiname + "/Update", product)
      // .then((response) => {
      //   // Return a promise with an artificial delay.
      //   return new Promise((resolve) => {
      //     setTimeout(() => {
      //       resolve(response.data);
      //     }, 2e3);
      //   });
      // })
      .then(data => {
        let res = data.data.data;
        if (res != null) {
          toast.warning("اطلاعات کاربر ویرایش شد ");
          this.setState({
            visible: false,
          });
          this.props.parentCallback();
          // res.birthdate = new DateObject({ date: res.birthdate, calendar: persian, locale: persian_fa });//"1355/05/21",
          // res.sodoordate = new DateObject({ date: res.sodoordate, calendar: persian, locale: persian_fa });//"1355/05/21",
        }
        else {
          toast.info("اطلاعات کاربر ایجاد نشد ");
        }
        document.body.classList.remove('loading-indicator')

      }).catch(res => {
        document.body.classList.remove('loading-indicator')
        toast.error("اشکال در فراخوانی سرویس")
      });
  }

  DeleteData = (product) => {
    const list = [{
      CompanyId: product.companyID,
      rowID: product.rowID,
    }]
    console.log("product");
    console.log(product);
    document.body.classList.add('loading-indicator');
    axios.delete("/" + this.state.apiname + "/Delete", { data: list })
      .then(response => {
        let res = response.data.errors;
        if (res.length == 0) {
          toast.error("اطلاعات کاربر حذف شد ");
          this.setState({
            visible: false,
          });
          this.props.parentCallback();
          // res.birthdate = new DateObject({ date: res.birthdate, calendar: persian, locale: persian_fa });//"1355/05/21",
          // res.sodoordate = new DateObject({ date: res.sodoordate, calendar: persian, locale: persian_fa });//"1355/05/21",
        }
        else {
          toast.error(res[0] + "اطلاعات کاربر حذف نشد ");
        }
        document.body.classList.remove('loading-indicator')

      }).catch(res => {
        document.body.classList.remove('loading-indicator')
        toast.error("اشکال در فراخوانی سرویس")
      });
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
            this.AddData(data);
            break;
          case "Edit":
            this.UpdateData(data);
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
        width={1000}
        title={this.state.mode === "Add" ? "ایجاد" : this.state.mode === "Edit" ? "ویرایش" : "حذف"}
        visible={this.state.visibledetail}
        onOk={this.handleSubmit}
        onCancel={this.handleCancelButtonClick}
        okType={this.state.mode === "Delete" ? "danger" : "primary"}
        okText={this.state.mode === "Add" ? "ایجاد" : this.state.mode === "Edit" ? "ویرایش" : "حذف"}>
        {/* <Card className="gx-card" title={(this.state.mode === "Add" ? "ایجاد" : this.state.mode === "Edit" ? "ویرایش" : "حذف") + " " + this.state.title}> */}
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
              <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
                <Form.Item
                  label={child.headerName}
                  name={child.field}
                >
                  {getFieldDecorator(child.field, {
                    rules: [{ required: child.required, message: ' نام کاربری را وارد نمایید' }],
                  })(
                    
                    child.widget == 'select' && child.options!=undefined && child.options.length>0 ?
                      
                      <Select
                        showSearch
                        allowClear
                      >
                        {child.options.map(child1 => <Select.Option key={child1.indexField} value={child1.indexField} >{child1.valueField}</Select.Option >)}
                      </Select>
                      :
                      <Input />
                  )}
                </Form.Item>
              </Col>

            )}


          </Row>
          {/* <Row>
              <Col lg={8} md={12} xs={24} sm={12} xl={12}  >
                <Button type={this.state.mode === "Delete" ? "danger" : "primary"} htmlType="submit"> {this.state.mode === "Add" ? "ایجاد" : this.state.mode === "Edit" ? "ویرایش" : "حذف"}</Button>
                <Button onClick={this.handleReset}>پاکسازی فرم </Button>
                <Button htmlType="button" onClick={this.handleCancelButtonClick}>بازگشت</Button>
              </Col>
            </Row> */}
        </Form>
        {/* </Card> */}
      </Modal>
    )
  }
}

export default withRouter(Form.create()(AdminForm));;

