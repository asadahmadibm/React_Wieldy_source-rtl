import React, { Component } from "react";
import { Button, Select, Form, Input, Card, Col, Row, InputNumber } from 'antd';
import UserService from "../../../Services/UserService";
import AuthService from '../../../Services/AuthService'
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import InputIcon from "react-multi-date-picker/components/input_icon"
import dayjs from 'dayjs'
import moment, { locale } from 'jalali-moment';

class EcarSales extends Component {

  constructor(props) {
    super(props)
    // console.log(this.props.form.getFieldsValue());
    // this.formRef = React.createRef();
    this.state = {
      componentDisabled: true,
      sex: [],
      date: ''

    }
    console.log(this.state);
  }
  onchangebirthDate = (value) => {
    // console.log(value.year + "/" + value.month + "/" + value.day);
    // this.props.setFieldValue("birthdate", value.year + "/" + value.month + "/" + value.day);
    // console.log(x);

  }

  componentDidMount = () => {
    console.log("hello");
    let isauthenticate = AuthService.getCurrentUser();
    if (isauthenticate == null) {
      console.log("Goto Login");
      this.props.history.push('/signin');
    }
    this.setState({ sex: [{ key: 1, value: "زن" }, { key: 2, value: "مرد" }] })
    let data = UserService.GetProfile();
    this.props.form.setFieldsValue(data);

    console.log(data);


  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = values;
        data.birthdate = values.birthdate.format()
        console.log('Received values of form: ', data);
      }
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="gx-main-content">

        <Card className="gx-card" title="پروفایل کاربری">
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
                  <Input />
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
                  style={{
                    width: '100%',
                  }}
                >
                  {getFieldDecorator('sodoordate', {
                    rules: [{ required: true, message: 'تاریخ صدور را وارد نمایید' }],
                  })(
                    // <Input />
                    // <DatePickerCustom onChange={this.onchangebirthDate}/>
                    <DatePicker //className="ant-input"
                      style={{
                        width: '100%',
                      }}
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
                      {this.state.sex.map(child => <Select.Option value={child.key} >{child.value}</Select.Option >)}
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
                    span: 2,
                  }}
                  wrapperCol={{
                    span: 22,
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
              <Col lg={8} md={12} xs={24} sm={12} xl={6}  >
                <Button type="primary" htmlType="submit">اعمال تغییر </Button>
                <Button onClick={this.handleReset}>پاکسازی فرم </Button>
              </Col>
            </Row>
          </Form>
        </Card>

      </div>
    )
  }
}

export default Form.create()(EcarSales);;
