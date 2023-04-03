import React, { Component } from "react";
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
import axios from 'axios';

class EcarSales extends Component {

  constructor(props) {
    super(props)
    this.state = {
      componentDisabled: true,
      sex: [],
      date: ''

    }
  }

  componentDidMount = () => {

    this.setState({ sex: [{ key: 1, value: "مرد" }, { key: 2, value: "زن" }] })

    this.GetData();



  }

  GetData = () => {
    // let data = UserService.GetProfile();
    // this.props.form.setFieldsValue(data);
    document.body.classList.add('loading-indicator');
    axios.post("/EcarSales", { userName: "demo@example.com" })
      .then(response => {
        let res = response.data.data;
        if (res != null) {
          res.birthdate = new DateObject({ date: res.birthdate, calendar: persian, locale: persian_fa });//"1355/05/21",
          res.sodoordate = new DateObject({ date: res.sodoordate, calendar: persian, locale: persian_fa });//"1355/05/21",
        }
        else {
          message.info("اطلاعات کاربر یافت نشد ");
        }
        document.body.classList.remove('loading-indicator')
        this.props.form.setFieldsValue(res);
      }).catch(res=>{
        document.body.classList.remove('loading-indicator')
        message.error("اشکال در فراخوانی سرویس")
      });
  }

  prepareData = (data) => {
    data.birthdate = data.birthdate.format().replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
    data.sodoordate = data.sodoordate.format().replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
    return data;
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        var data = this.prepareData(values);
        toast.success("ارسال اطلاعات با موفقیت انجام شد");
        console.log('Received values of form: ', data);
      }
    });
  };

  handleCancelButtonClick = () => {
    this.props.history.push('/main/dashboard/crypto')
  }

  handleReset = () => {
    this.setState({ ecarsaleInfo: {} });
    this.props.form.resetFields();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="gx-main-content">
        <Card className="gx-card" title="پروفایل کاربری">
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

              <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
                <Form.Item
                  label=" کد ملی"
                  name="mellicode"
                >  {getFieldDecorator('mellicode', {
                  rules: [{ required: true, message: 'کد ملی را وارد نمایید' }],
                })(
                  <InputNumber
                    style={{
                      width: '100%',
                    }}
                  />
                )}
                </Form.Item>
              </Col>
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
                      {this.state.sex.map(child => <Select key={child.key} value={child.key} >{child.value}</Select >)}
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
                      showSearch
                      allowClear
                    // style={{
                    //     width: 100,
                    // }}
                    >
                      <Select value="1">همدان</Select>
                      <Select value="2">تهران</Select>
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
                      <Select value="1">همدان</Select>
                      <Select value="2">تهران</Select>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
                <Form.Item
                  label=" استان محل تولد "
                  name="birthostan"
                >
                  {getFieldDecorator('birthostan', {
                    // rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
                  })(


                    <Select
                      showSearch
                      allowClear
                    // style={{
                    //     width: 100,
                    // }}
                    >
                      <Select value="1">همدان</Select>
                      <Select value="2">تهران</Select>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
                <Form.Item
                  label=" شهر محل تولد "
                  name="birthcity"
                >
                  {getFieldDecorator('birthcity', {
                    // rules: [{ required: true, message: 'تاریخ تولد را وارد نمایید' }],
                  })(


                    <Select
                      showSearch
                      allowClear
                    // style={{
                    //     width: 100,
                    // }}
                    >
                      <Select value="1">همدان</Select>
                      <Select value="2">تهران</Select>
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
                      showSearch
                      allowClear
                    // style={{
                    //     width: 100,
                    // }}
                    >
                      <Select value="1">همدان</Select>
                      <Select value="2">تهران</Select>
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
                      <Select value="1">همدان</Select>
                      <Select value="2">تهران</Select>
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
                <Button type="primary" htmlType="submit">اعمال تغییر </Button>
                <Button onClick={this.handleReset}>پاکسازی فرم </Button>
                <Button htmlType="button" onClick={this.handleCancelButtonClick}>انصراف</Button>
              </Col>
            </Row>
          </Form>

        </Card>
       
      </div>
    )
  }
}

export default Form.create()(EcarSales);;
