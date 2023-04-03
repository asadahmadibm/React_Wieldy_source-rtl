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

class EcarSalesFilter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      componentDisabled: true,
      sex: [],
      date: '',
      disable:false

    }
  }

  componentDidMount = () => {

  }

   handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSetMelliCode(values);   
        this.setState({disable:true})
      }
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
    this.setState({disable:false});
    this.props.onClearSearch(true);   
    
  };


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
                  label="کد ملی "
                  name="mellicode"
                >
                  {getFieldDecorator('mellicode', {
                    rules: [{ required: true, message: ' کد ملی را وارد نمایید' }],
                  })(
                    <Input disabled={this.state.disable}/>
                  )}
                </Form.Item>
              </Col>
              <Button type="primary" htmlType="submit">جستجو </Button>
              <Button type="danger" onClick={this.handleReset}>حذف جستجو </Button>
            </Row>
          </Form>
    )
  }
}

export default withRouter(Form.create()(EcarSalesFilter));;
