import React, {Component} from "react";
import {Button, Checkbox, Form, Icon, Input} from "antd";
import {Link} from "react-router-dom";

const FormItem = Form.Item;

class SignIn extends Component {


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("values", values)
    });
  };

  render() {

    const {getFieldDecorator} = this.props.form;

    return (
      <div className="gx-login-container">
        <div className="gx-login-content">
          <div className="gx-login-header gx-text-center">
            <h1 className="gx-login-title">ورود</h1>
          </div>
          <Form onSubmit={this.handleSubmit} className="gx-login-form gx-form-row0">
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{required: true, message: 'لطفا ایمیل خود را وارد کنید'}],
              })(
                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                       placeholder="ایمیل"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{required: true, message: 'لطفا رمز عبور خود را وارد کنید'}],
              })(
                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                       type="password"
                       placeholder="رمز عبور"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>مرا به خاطر بسپار</Checkbox>
              )}
              <Link className="gx-login-form-forgot" to="/custom-views/user-auth/forgot-password">فراموشی رمز</Link>
            </FormItem>
            <FormItem className="gx-text-center">
              <Button type="primary" htmlType="ارسال">
                ورود
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(SignIn);

export default WrappedNormalLoginForm;
