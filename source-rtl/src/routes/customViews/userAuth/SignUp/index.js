import React, {Component} from "react";
import {Button, Checkbox, Form, Icon, Input} from "antd";
import {Link} from "react-router-dom";

const FormItem = Form.Item;

class SignUP extends Component {


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
            <h1 className="gx-login-title">ثبت نام</h1>
          </div>
          <Form onSubmit={this.handleSubmit} className="gx-login-form gx-form-row0">
            <FormItem>
              {getFieldDecorator('uaername', {
                rules: [{required: true, message: 'لطفا نام کاربری خود را وارد کنید!'}],
              })(
                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                       placeholder="نام کاربری"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{required: true, message: 'لطفا ایمیل خود را وارد کنید!'}],
              })(
                <Input prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                       placeholder="ایمیل"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{required: true, message: 'لطفا رمز عبور خود را وارد کنید'}],
              })(
                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                       placeholder="رمز عبور"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('confirm-password', {
                rules: [{required: true, message: 'لطفا رمز عبور خود را وارد کنید'}],
              })(
                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                       placeholder="تکرار رمز عبور"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>مرا به خاطر بسپار</Checkbox>
              )}
              <Link className="gx-login-form-forgot" to="/custom-views/user-auth/forgot-password">رمز عبور را فراموش کرده اید</Link>
            </FormItem>
            <FormItem className="gx-text-center">
              <Button type="primary" htmlType="ارسال">
              ثبت نام
              </Button>
            </FormItem>
          </Form>
          <div className="gx-flex-row">
            <span className="gx-mb-2 gx-ml-3">یا ثبت نام با استفاده از:</span>
            <ul className="gx-social-link">
              <li>
                <Icon type="google" onClick={() => {
                  this.props.showAuthLoader();
                  this.props.userGoogleSignIn();
                }}/>
              </li>
              <li>
                <Icon type="facebook" onClick={() => {
                  this.props.showAuthLoader();
                  this.props.userFacebookSignIn();
                }}/>
              </li>
              <li>
                <Icon type="github" onClick={() => {
                  this.props.showAuthLoader();
                  this.props.userGithubSignIn();
                }}/>
              </li>
              <li>
                <Icon type="twitter" onClick={() => {
                  this.props.showAuthLoader();
                  this.props.userTwitterSignIn();
                }}/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const WrappedNormalSignUpForm = Form.create()(SignUP);

export default WrappedNormalSignUpForm;
