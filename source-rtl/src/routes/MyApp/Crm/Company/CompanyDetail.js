import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button, Select, Form, Input, Checkbox, Card, Col, Row, InputNumber, message, Switch } from 'antd';
import CompanyProductList from "./CompanyProductList";
import CompanyTelephoneList from "./CompanyTelephoneList";
import CompanyConnectionList from "./CompanyConnectionList";
import { Tabs } from "antd";
import Widget from "components/Widget";


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
import { Label } from "recharts";

const TabPane = Tabs.TabPane;

class CompanyDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      companyID: this.props.location.state === undefined ? '' : this.props.location.state.companyID, //this.props.companyID,
      // clearform: this.props.clearform,
      crmCompanyDTO: {
        companyID: 0,
        companyName: '',
        address: '',
        email: '',
        groupID: 0,
        groupName: '',
        industryID: 0,
        industryName: '',
        regionID: 0,
        regionName: '',
        recommenderID: '',
        recommenderName: '',
        isCustomer: false,
        isActive: false,
        unsubscribed: false,
        comment: '',
        registrar: '',
        registerDate: '',
        selectiveGroup: ''
      },
      sex: [],
      ostan: [],
      group: [],
      industry: []
    }

  }

  componentDidMount = () => {
    this.setState({ sex: [{ key: 1, value: "مرد" }, { key: 2, value: "زن" }] });
    this.GetDataBase(false);
    // console.log(this.state.companyID);
    this.GetData(this.state.companyID);
    // this.setState({ companyID: this.state.companyID})
  }

  // componentWillReceiveProps = (nextProps) => {
  //   // if (this.props.companyID != nextProps.companyID) {
  //     console.log("nextProps");
  //     console.log(nextProps);
  //   if (this.state.companyID != nextProps.companyID) {

  //     this.GetData(nextProps.companyID.companyID);
  //     this.setState({ companyID: nextProps.companyID })
  //   }
  //   // if (this.state.clearform != nextProps.clearform) {
  //   //   this.handleReset();
  //   //   this.setState({ clearform: false })
  //   // }
  // }


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

  GetData = (companyID) => {
    // let data = UserService.GetProfile();
    // this.props.form.setFieldsValue(data);
    console.log("companyID");
    console.log(companyID);
    this.props.form.setFieldsValue([]);
    document.body.classList.add('loading-indicator');
    axios.get("/CrmCompany?companyID=" + companyID)
      .then(response => {
        let res = response.data.data;
        if (res != null) {
          // res.birthdate = new DateObject({ date: res.birthdate, calendar: persian, locale: persian_fa });//"1355/05/21",
          // res.sodoordate = new DateObject({ date: res.sodoordate, calendar: persian, locale: persian_fa });//"1355/05/21",
        }
        else {
          message.info("اطلاعات کاربر یافت نشد ");
        }
        document.body.classList.remove('loading-indicator')
        this.props.form.setFieldsValue(res);
        this.setState({ crmCompanyDTO: res });
        console.log(this.state.crmCompanyDTO);
        console.log("this.state.crmCompanyDTO");
      }).catch(res => {
        document.body.classList.remove('loading-indicator')
        message.error("اشکال در فراخوانی سرویس")
      });
  }

  prepareData = (data) => {
    // data.companyID = this.state.companyID.companyID;
    // data.birthdate = data.birthdate.format().replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    // data.sodoordate = data.sodoordate.format().replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    return data;
  }

  prepareData = () => {
    return {
      companyID: this.state.crmCompanyDTO.companyID,
      companyName: this.state.crmCompanyDTO.companyName,
      address: this.state.crmCompanyDTO.address,
      email: this.state.crmCompanyDTO.email,
      groupID: this.state.crmCompanyDTO.groupID,
      // groupName: this.state.crmCompanyDTO,
      industryID: this.state.crmCompanyDTO.industryID,
      // industryName: this.state.crmCompanyDTO,
      regionID: this.state.crmCompanyDTO.regionID,
      // regionName: this.state.crmCompanyDTO,
      recommenderID: this.state.crmCompanyDTO.recommenderID,
      // recommenderName: this.state.crmCompanyDTO,
      isCustomer: this.state.crmCompanyDTO.isCustomer,
      isActive: this.state.crmCompanyDTO.isActive,
      unsubscribed: this.state.crmCompanyDTO.unsubscribed,
      comment: this.state.crmCompanyDTO.comment,
      registrar: this.state.crmCompanyDTO.registrar,
      registerDate: this.state.crmCompanyDTO.registerDate,
      selectiveGroup: this.state.crmCompanyDTO.selectiveGroup
    }

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

  handlesubmitButtonClick = () => {
    var data = this.prepareData();
    toast.success("ارسال اطلاعات با موفقیت انجام شد");
    console.log('Received values of form: ', data);
    // httpCaller.Sana.UpdateCurrencyUse(data, () => {
    //     this.GetData(this.state.currentId, false);
    //     // this.props.action(1)
    // }, () => {})
  }


  handleCancelButtonClick = () => {
    this.props.history.push('/myapp/ecarsales/EcarSalesList')
  }

  handleReset = () => {
    this.setState({ crmCompanyDTO: {} });
    this.props.form.resetFields();
  };

  changeisActive = (e) => {
    this.setState({
      crmCompanyDTO: {
        ...this.state.crmCompanyDTO,
        isActive: e.target.checked
      }
    })
  }

  changeisCustomer = (e) => {
    this.setState({
      crmCompanyDTO: {
        ...this.state.crmCompanyDTO,
        isCustomer: e.target.checked
      }
    })
  }

  changeunsubscribed = (e) => {
    this.setState({
      crmCompanyDTO: {
        ...this.state.crmCompanyDTO,
        unsubscribed: e.target.checked
      }
    })
  }

  handelChangecompanyName = (e) => {
    this.setState({
      crmCompanyDTO: {
        ...this.state.crmCompanyDTO,
        companyName: e.target.value
      }
    })
  };

  handelChangeaddress = (e) => {
    this.setState({
      crmCompanyDTO: {
        ...this.state.crmCompanyDTO,
        address: e.target.value
      }
    })
  };
  handelChangeemail = (e) => {
    this.setState({
      crmCompanyDTO: {
        ...this.state.crmCompanyDTO,
        email: e.target.value
      }
    })
  };
  handelChangegroup = (value, event) => {
    this.setState({
      crmCompanyDTO: {
        ...this.state.crmCompanyDTO,
        groupID: value
      }
    })
  };

  handelChangeindustry = (value, event) => {
    this.setState({
      crmCompanyDTO: {
        ...this.state.crmCompanyDTO,
        industryID: value
      }
    })
  };
  handelChangregion = (value, event) => {
    this.setState({
      crmCompanyDTO: {
        ...this.state.crmCompanyDTO,
        regionID: value
      }
    })
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card className="gx-card" title="مشخصات شرکت" size="small"
          style={{
            marginBottom: 15,
            padding: 0
          }}
          extra={
            <div>
              <Button type="primary" onClick={this.handlesubmitButtonClick}> ثبت اطلاعات </Button>
              <Button onClick={this.handleReset}>پاکسازی فرم </Button>
              <Button htmlType="button" onClick={this.handleCancelButtonClick}>انصراف</Button>
            </div>
          }>
          <Form
            //layout="inline"
            onSubmit={this.handleSubmit}
            name="basic"
            layout="inline"
            // labelCol={{
            //   span: 10,
            // }}
            // wrapperCol={{
            //   span: 14,
            // }}
            autoComplete="off"
          >
            <Row >
              <Col lg={8} md={8} xs={24} sm={12} xl={8}  >
                <Input addonBefore="کد شرکت" value={this.state.crmCompanyDTO.companyID} readOnly />
                {/* <Form.Item

                label="کد شرکت "
                name="companyID"
               
              >
                {getFieldDecorator('companyID', {
                  rules: [{ required: true, message: ' کد شرکت را وارد نمایید' }],
                })(
                  <Input 
                 
                  />
                )}
              </Form.Item> */}
              </Col>
              <Col lg={16} md={16} xs={24} sm={12} xl={16}  >
                <ul className="gx-list-inline">

                  <li key={111}>
                    <span className="gx-link gx-btn gx-btn-white ">
                      {/* <Form.Item
                      name="isCustomer"
                    >
                      {getFieldDecorator('isCustomer', {
                        // valuePropName:this.state.isActive==true ? 'checked' : '',
                      })(
                        <Checkbox checked={this.state.crmCompanyDTO.isCustomer} >مشتری</Checkbox>
                      )}
                    </Form.Item> */}
                      <Checkbox checked={this.state.crmCompanyDTO.isCustomer} onChange={this.changeisCustomer} >مشتری</Checkbox>
                    </span>
                  </li>
                  <li key={112}>

                    <span className="gx-link gx-btn gx-btn-white ">
                      {/* <Form.Item>
                      {getFieldDecorator('isActive', {
                        // valuePropName: 'checked',
                        // initialValue: true,
                      })(
                        <Checkbox checked={this.state.crmCompanyDTO.isActive} >فعال</Checkbox>
                      )}

                    </Form.Item>  */}
                      <Checkbox checked={this.state.crmCompanyDTO.isActive} onChange={this.changeisActive}>فعال</Checkbox>
                    </span>
                  </li>
                  <li key={113}>

                    <span className="gx-link gx-btn gx-btn-white ">
                      {/* <Form.Item>
                      {getFieldDecorator('unsubscribed', {
                        valuePropName: 'checked',
                        initialValue: true,
                      })(
                        <Checkbox checked={this.state.crmCompanyDTO.unsubscribed} >عدم ارسال ایمیل </Checkbox>
                      )}

                    </Form.Item>  */}
                      <Checkbox checked={this.state.crmCompanyDTO.unsubscribed} onChange={this.changeunsubscribed}>عدم ارسال ایمیل </Checkbox>
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row gutter={[16, 24]}>


              {/* <Col span={12} xs={24} > */}
              <Col lg={8} md={12} xs={24} sm={12} xl={12}   >
                {/* <Form.Item
                label="نام شرکت "
                name="companyName"
              >
                {getFieldDecorator('companyName', {
                  rules: [{ required: true, message: ' نام شرکت را وارد نمایید' }],
                })(
                  <Input />
                )}
              </Form.Item> */}
                <Input addonBefore="نام شرکت " value={this.state.crmCompanyDTO.companyName} onChange={this.handelChangecompanyName} />
              </Col>
              {/* <Col span={8} xs={24} > */}
              <Col lg={8} md={12} xs={24} sm={12} xl={12}  >
                {/* <Form.Item
                label="گروه"
                name="groupID"
              >
                {getFieldDecorator('groupID', {
                  rules: [{ required: true, message: 'گروه  را وارد نمایید' }],
                })(

                  <Select
                    showSearch
                    allowClear
                    style={{
                      width: 200,
                    }}
                  >
                    {this.state.group.map(child => <Select.Option key={child.groupID} value={child.groupID} >{child.groupName}</Select.Option >)}
                  </Select>
                )}
              </Form.Item> */}
                <Select
                  addonBefore="گروه"
                  showSearch
                  value={this.state.crmCompanyDTO.groupID}
                  // onChange={this.handelChangegroup}
                  onSelect={(value, event) => this.handelChangegroup(value, event)}
                >
                  {this.state.group.map(child => <Select.Option key={child.groupID} value={child.groupID} >{child.groupName}</Select.Option >)}
                </Select>
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg={12} md={12} xs={24} sm={12} xl={12}   >
                {/* <Form.Item
                label="  آدرس"
                name="address"
              >
                {getFieldDecorator('address', {
                  rules: [{ required: true, message: ' آدرس را وارد نمایید' }],
                })(
                  <Input />
                )}
              </Form.Item> */}
                <Input addonBefore=" ادرس " value={this.state.crmCompanyDTO.address} onChange={this.handelChangeaddress} />

              </Col>
              <Col lg={12} md={12} xs={24} sm={12} xl={12}   >
                {/* <Form.Item
                label="صنعت"
                name="industryID"
              >
                {getFieldDecorator('industryID', {
                  rules: [{ required: true, message: 'صنعت  را وارد نمایید' }],
                })(

                  <Select
                    showSearch
                    allowClear
                    style={{
                      width: 200,
                    }}
                  >
                    {this.state.industry.map(child => <Select.Option key={child.industryID} value={child.industryID} >{child.industryName}</Select.Option >)}
                  </Select>
                )}
              </Form.Item> */}
                <span>
                  <Select
                    addonBefore="صنعت"
                    title="صنعت"
                    showSearch
                    value={this.state.crmCompanyDTO.industryID}
                    // onChange={this.handelChangegroup}
                    onSelect={(value, event) => this.handelChangeindustry(value, event)}
                  >
                    {this.state.industry.map(child => <Select.Option key={child.industryID} value={child.industryID} >{child.industryName}</Select.Option >)}
                  </Select>
                </span>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col span={12} >
                {/* <Form.Item
                label=" ایمیل "
                name="email"

              >
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: ' ایمیل را وارد نمایید' }],
                })(
                  <Input />
                )}
              </Form.Item> */}
                <Input addonBefore=" ایمیل " value={this.state.crmCompanyDTO.email} onChange={this.handelChangeemail} />
              </Col>

              <Col span={12}  >
                {/* <Form.Item
                label="ناحیه"
                name="regionID"
              >
                {getFieldDecorator('regionID  ', {
                  rules: [{ required: true, message: 'ناحیه  را وارد نمایید' }],
                })(

                  <Select
                    showSearch
                    allowClear
                    style={{
                      width: 200,
                    }}
                  >
                    {this.state.ostan.map(child => <Select.Option key={child.regionID} value={child.regionID} >{child.regionName}</Select.Option >)}
                  </Select>
                )}
              </Form.Item> */}
                <Select
                  addonBefore="ناحیه"
                  showSearch
                  value={this.state.crmCompanyDTO.regionID}
                  // onChange={this.handelChangegroup}
                  onSelect={(value, event) => this.handelChangregion(value, event)}
                >
                  {this.state.ostan.map(child => <Select.Option key={child.regionID} value={child.regionID} >{child.regionName}</Select.Option >)}
                </Select>
              </Col>


            </Row>
            <br></br>
            <Row>

            </Row>
          </Form>
        </Card>
        <Row>
          {/* <Col lg={8} md={12} xs={24} sm={12} xl={8}  > */}
          <Col xs={24} sm={24} md={12} lg={12} xl={8} >

            <Card className="gx-card" title=" محصولات" size="small"
              style={{
                marginBottom: 15
              }}
            >
              <CompanyProductList companyID={this.state.companyID}></CompanyProductList>
            </Card>
          </Col>
          {/* <Col xs={24} sm= {24} md={12} lg= {12} xl={8} >
            <Card className="gx-card" title=" شماره تماس">
              <CompanyTelephoneList  companyID={this.state.companyID}></CompanyTelephoneList>
            </Card>
          </Col>
          <Col xs={24} sm= {24} md={12} lg= {12} xl={8} >
            <Card className="gx-card" title="  رابطها">
            <CompanyConnectionList  companyID={this.state.companyID}></CompanyConnectionList>
            </Card>
          </Col> */}


          <Col xs={24} sm={24} md={12} lg={12} xl={16} >
            <Widget styleName="gx-card-tabs"
              extra={<i className="icon icon-search-new gx-pointer gx-fs-xxl gx-text-primary" />}>
              <Tabs defaultActiveKey="1" centered={false} size="small">
                <TabPane tab=" رابطها" key="2">
                  <CompanyConnectionList companyID={this.state.companyID}></CompanyConnectionList>
                </TabPane>
                <TabPane tab=" شماره تماس" key="1">
                  <CompanyTelephoneList companyID={this.state.companyID}></CompanyTelephoneList>
                </TabPane>

              </Tabs>
            </Widget>
          </Col>

        </Row>
      </div>
    )
  }
}

export default withRouter(Form.create()(CompanyDetail));;
