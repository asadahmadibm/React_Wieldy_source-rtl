import React, {Component} from "react";
import {Avatar, Button, Form, Input} from "antd";
import IntlMessages from "util/IntlMessages";
import avatar3 from '../../../../ad-images/avatar-3.png';

const FormItem = Form.Item;


class LockScreen extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;

    return (
      <div className="gx-login-container">
        <div className="gx-login-content gx-text-center">

          <div className="gx-login-header">
            <Avatar shape="circle" className="gx-size-120" src={avatar3} />
          </div>
          <div className="gx-mb-4">
            <h3>رضا محمدی</h3>
            <p><IntlMessages id="appModule.enterPasswordUnlock"/></p>
          </div>

          <Form onSubmit={this.handleSubmit} className="gx-login-form gx-form-row0">
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{required: true, message: 'لطفا رمز عبور خود را وارد کنید'}],
              })(
                <Input type="password" placeholder="رمز عبور"/>
              )}
            </FormItem>

            <FormItem>
              <Button type="primary" htmlType="ارسال">
                <IntlMessages id="app.userAuth.unLock"></IntlMessages>
              </Button>
            </FormItem>
          </Form>

        </div>
      </div>
    );
  }
}

const WrappedLockScreenForm = Form.create()(LockScreen);

export default (WrappedLockScreenForm);
