import React, { Component } from "react";
import { AutoComplete, Button, Card, Cascader, Checkbox, Col, Form, Icon, Input, Row, Select, Tooltip } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
  value: 'zhejiang',
  label: 'زیبا',
  children: [{
    value: 'hangzhou',
    label: 'حسینی',
    children: [{
      value: 'xihu',
      label: 'نزدیک دریاچه',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'حسن',
  children: [{
    value: 'nanjing',
    label: 'امیدی',
    children: [{
      value: 'zhonghuamen',
      label: 'خیابان اصلی',
    }],
  }],
}];


class Registration extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('دو کلمه عبور که وارد می کنید متناقض است!');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Card className="gx-card" title="فرم ثبت نام">
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="ایمیل"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'ورودی الکترونیکی معتبر نیست!',
              }, {
                required: true, message: 'لطفا نامه الکترونیکی خود را وارد کنید!',
              }],
            })(
              <Input id="email1" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="رمز عبور"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'لطفا رمز عبور خود را وارد کنید',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type="password" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="رمز عبور را تأیید کنید"
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'لطفا رمز خود را تأیید کنید!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                نام مستعار
                <Tooltip title="چه می خواهید دیگران با شما تماس بگیرند؟">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: 'لطفا نام مستعار خود را وارد کنید!', whitespace: true }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="اقامتگاه عادت"
          >
            {getFieldDecorator('residence', {
              initialValue: ['zhejiang', 'hangzhou', 'xihu'],
              rules: [{ type: 'array', required: true, message: 'لطفاً محل اقامت عادت خود را انتخاب کنید!' }],
            })(
              <Cascader options={residences} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="شماره تلفن"
          >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'لطفا شماره تلفن خود را وارد کنید!' }],
            })(
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="وب سایت"
          >
            {getFieldDecorator('website', {
              rules: [{ required: true, message: 'لطفاً وارد وب سایت شوید!' }],
            })(
              <AutoComplete
                dataSource={websiteOptions}
                onChange={this.handleWebsiteChange}
                placeholder="وب سایت"
              >
                <Input />
              </AutoComplete>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="کد"
            extra="ما باید مطمئن شویم که شما یک انسان هستید."
          >
            <Row>
              <Col span={24} sm={12}>
                {getFieldDecorator('captcha', {
                  rules: [{ required: true, message: 'لطفا کد ای که گرفتید را وارد کنید!' }],
                })(
                  <Input />
                )}
              </Col>
              <Col span={24} sm={12}>
                <Button>کد رو بگیر</Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>من خوانده ام <span className="gx-link">توافق</span></Checkbox>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="ارسال">ثبت نام</Button>
          </FormItem>
        </Form>
      </Card>
    );
  }

}

const RegistrationForm = Form.create()(Registration);
export default RegistrationForm;
