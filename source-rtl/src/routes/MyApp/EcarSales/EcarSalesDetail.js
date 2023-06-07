import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button, Select, Form, Input, Card, Col, Row, InputNumber, message } from 'antd';

import UserService from "../../../Services/UserService";
import AuthService from '../../../Services/AuthService'
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
import httpCaller from "../../../Services/HttpService";

class EcarSalesDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mellicode: '',//this.props.mellicode,
      clearform: this.props.clearform,
      sex: [],
      ostan: [],
      citysodoor: [],
      citysokoonat: [],
      citybirth: []
    }

  }

  componentDidMount = () => {
    this.setState({ sex: [{ key: 1, value: "مرد" }, { key: 2, value: "زن" }] });
    this.GetDataBase(false);
  }

  componentWillReceiveProps = (nextProps) => {
    console.log("nextPropsmellicode", nextProps.mellicode);
    if (nextProps.mellicode.mellicode != null) {
      //if (this.props.mellicode != nextProps.mellicode) {
      if (this.state.mellicode != nextProps.mellicode) {

        this.GetData(nextProps.mellicode.mellicode,true);
        this.setState({ mellicode: nextProps.mellicode })
      }
      if (this.state.clearform != nextProps.clearform) {
        this.handleReset();
        this.setState({ clearform: false })
      }
    }
  }

  GetDataBase = (isSOCLog) => {
    var data = { id: 1 };
    httpCaller.EcarSales.GetDropDown(data, (result) => {
      console.log("result.data.list", result.data.list);
      this.setState({ ostan: result.data.list });
    }, () => { }, isSOCLog)
  }

  GetData = (mellicode,isSOCLog) => {
    this.props.form.setFieldsValue([]);

    var data =  [{ id: mellicode }];

    httpCaller.CRUDGrid.GetById("EcarSales",data, (result) => {
      console.log("result.data", result.data);
      let res = result.data;
      if (res != null) {
        res.birthdate = new DateObject({ date: res.birthdate, calendar: persian, locale: persian_fa });//"1355/05/21",
        res.sodoordate = new DateObject({ date: res.sodoordate, calendar: persian, locale: persian_fa });//"1355/05/21",
        this.props.form.setFieldsValue(res);
        this.onchangeostanbirth(this.props.form.getFieldValue('ostanbirth'));
        this.onchangeostansodoor(this.props.form.getFieldValue('ostansodoor'));
        this.onchangeostansokoonat(this.props.form.getFieldValue('ostansokoonat'));
      }
      else {
        message.info("اطلاعات کاربر یافت نشد ");
      }
      
    }, () => { }, isSOCLog)

  }

  prepareData = (data) => {
    data.mellicode = this.state.mellicode.mellicode;
    data.birthdate = data.birthdate.format().replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    data.sodoordate = data.sodoordate.format().replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    return data;
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        var data = this.prepareData(values);
        toast.success("ارسال اطلاعات با موفقیت انجام شد");
        console.log(this.state.mellicode);
        console.log('Received values of form: ', data);
      }
    });
  };

  handleCancelButtonClick = () => {
    this.props.history.push('/myapp/ecarsales/EcarSalesList')
  }

  handleReset = () => {
    this.setState({ ecarsaleInfo: {} });
    this.props.form.resetFields();
  };

  onchangeostansodoor = (value) => {

    if (value == undefined) {
      this.props.form.setFieldsValue({
        citysodoor: ''
      });
      this.setState({ citysodoor: [] })
      return;
    }
    var data = { id: value }
    httpCaller.EcarSales.GetDropDown(data, (result) => {
      console.log("result.data.list", result.data.list);
      this.setState({ citysodoor: result.data.list });
    }, () => { }, false)

  }
  onchangeostansokoonat = (value) => {

    if (value == undefined) {
      this.props.form.setFieldsValue({
        citysokoonat: ''
      });
      this.setState({ citysokoonat: [] })
      return;
    }
    var data = { id: value }
    httpCaller.EcarSales.GetDropDown(data, (result) => {
      console.log("result.data.list", result.data.list);
      this.setState({ citysokoonat: result.data.list });
    }, () => { }, false)

  }
  onchangeostanbirth = (value) => {
    console.log("onchangeostanbirth");
    console.log(value);
    if (value == undefined) {
      this.props.form.setFieldsValue({
        citybirth: ''
      });
      this.setState({ citybirth: [] })
      return;
    }

    var data = { id: value }
    httpCaller.EcarSales.GetDropDown(data, (result) => {
      console.log("result.data.list", result.data.list);
      this.setState({ citybirth: result.data.list });
    }, () => { }, false)

  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        //layout="inline"
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
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label="نام "
              name="name"
            >
              {getFieldDecorator('name', {
                rules: [{ required: true, message: ' نام کاربری را وارد نمایید' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label=" نام خانوادگی"
              name="family"
            >
              {getFieldDecorator('family', {
                rules: [{ required: true, message: ' خانوادگی را وارد نمایید' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label="نام پدر "
              name="fathername"

            >
              {getFieldDecorator('fathername', {
                rules: [{ required: true, message: ' پدر را وارد نمایید' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>

          {/* <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label=" کد ملی"
              name="mellicode"
            >  {getFieldDecorator('mellicode', {
              rules: [{ required: true, message: 'کد ملی را وارد نمایید' }],
            })(
              <Input />
            )}
            </Form.Item>
          </Col> */}
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label=" شماره شناسنامه"
              name="shenasnameno"
            >
              {getFieldDecorator('shenasnameno', {
                rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label=" تاریخ تولد"
              name="birthdate"
            >

              {getFieldDecorator('birthdate', {
                rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
              })(
                // <Input />
                // <DatePickerCustom onChange={this.onchangebirthDate}/>
                <DatePicker
                  // style={{
                  //   backgroundColor: "aliceblue",
                  //   height: "24px",
                  //   borderRadius: "8px",
                  //   fontSize: "14px",
                  //   padding: "3px 10px"
                  // }}
                  render={<InputIcon />}
                  disabled={true}
                  editable={false}
                  calendar={persian}
                  locale={persian_fa}
                  onChange={dateObject => {
                    console.log(dateObject.format())
                  }}></DatePicker>
              )}


            </Form.Item>
          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label=" تاریخ صدور"
              name="sodoordate"
            // style={{
            //   width: '100%',
            // }}
            >
              {getFieldDecorator('sodoordate', {
                rules: [{ required: true, message: 'تاریخ صدور را وارد نمایید' }],
              })(
                // <Input />
                // <DatePickerCustom onChange={this.onchangebirthDate}/>
                <DatePicker //inputClass="ant-input"
                  // style={{
                  //   width: "100%",
                  //   boxSizing: "border-box",
                  //   height: "36px"
                  // }}
                  // containerStyle={{
                  //   width: "100%"
                  // }}
                  render={<InputIcon />}
                  calendar={persian}
                  locale={persian_fa}
                  onChange={dateObject => {
                    console.log(dateObject.format())
                  }}></DatePicker>
              )}
            </Form.Item>

          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label="  جنسیت"
              name="sex"
            >
              {getFieldDecorator('sex', {
                rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
              })(

                <Select
                  showSearch
                  allowClear
                // style={{
                //     width: 100,
                // }}
                >
                  {this.state.sex.map(child => <Select.Option key={child.key} value={child.key} >{child.value}</Select.Option >)}
                  {/* <Select value={2}>زن</Select>
                      <Select value={1}>مزد</Select> */}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label="  شماره موبایل"
              name="mobile"
            >
              {getFieldDecorator('mobile', {
                // rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label=" شماره ثابت"
              name="tel"
            >
              {getFieldDecorator('tel', {
                // rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label=" کد پستی"
              name="posticode"
            >
              {getFieldDecorator('posticode', {
                // rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label=" استان محل صدور "
              name="ostansodoor"
            >
              {getFieldDecorator('ostansodoor', {
                // rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
              })(


                <Select
                  onChange={this.onchangeostansodoor}
                  showSearch
                  allowClear
                // style={{
                //     width: 100,
                // }}
                >
                  {this.state.ostan.map(child => <Select.Option key={child.key} value={child.key} >{child.value}</Select.Option >)}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label=" شهر محل صدور "
              name="citysodoor"
            >
              {getFieldDecorator('citysodoor', {
                // rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
              })(


                <Select
                  showSearch
                  allowClear
                // style={{
                //     width: 100,
                // }}
                >
                  {this.state.citysodoor.map(child => <Select.Option key={child.key} value={child.key} >{child.value}</Select.Option >)}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label=" استان محل تولد "
              name="ostanbirth"
            >
              {getFieldDecorator('ostanbirth', {
                // rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
              })(


                <Select
                  onChange={this.onchangeostanbirth}
                  showSearch
                  allowClear
                // style={{
                //     width: 100,
                // }}
                >
                  {this.state.ostan.map(child => <Select.Option key={child.key} value={child.key} >{child.value}</Select.Option >)}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label=" شهر محل تولد "
              name="citybirth"
            >
              {getFieldDecorator('citybirth', {
                // rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
              })(


                <Select
                  showSearch
                  allowClear
                // style={{
                //     width: 100,
                // }}
                >
                  {this.state.citybirth.map(child => <Select.Option key={child.key} value={child.key} >{child.value}</Select.Option >)}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label=" استان محل سکونت "
              name="ostansokoonat"
            >
              {getFieldDecorator('ostansokoonat', {
                // rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
              })(


                <Select
                  onChange={this.onchangeostansokoonat}
                  showSearch
                  allowClear
                // style={{
                //     width: 100,
                // }}
                >
                  {this.state.ostan.map(child => <Select.Option key={child.key} value={child.key} >{child.value}</Select.Option >)}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label=" شهر محل سکونت "
              name="citysokoonat"
            >
              {getFieldDecorator('citysokoonat', {
                // rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
              })(


                <Select
                  showSearch
                  allowClear
                // style={{
                //     width: 100,
                // }}
                >
                  {this.state.citysokoonat.map(child => <Select.Option key={child.key} value={child.key} >{child.value}</Select.Option >)}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label="  خیابان"
              name="khiyaban"
            >
              {getFieldDecorator('khiyaban', {
                // rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label="  کوچه"
              name="kooche"
            >
              {getFieldDecorator('kooche', {
                // rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label="  پلاک"
              name="pelak"
            >
              {getFieldDecorator('pelak', {
                // rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
            <Form.Item
              label="  کد منطقه"
              name="mantaghecode"
            >
              {getFieldDecorator('mantaghecode', {
                // rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col lg={18} md={18} xs={18} sm={18} xl={18}  >
            <Form.Item
              label="   نشانی"
              name="address"
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 20,
              }}
            >
              {getFieldDecorator('address', {
                // rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col lg={8} md={12} xs={24} sm={12} xl={12}  >
            <Button type="primary" htmlType="submit"> ثبت اطلاعات </Button>
            <Button onClick={this.handleReset}>پاکسازی فرم </Button>
            <Button htmlType="button" onClick={this.handleCancelButtonClick}>انصراف</Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default withRouter(Form.create()(EcarSalesDetail));;
