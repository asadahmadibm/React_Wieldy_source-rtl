import React, { Component } from "react";
import { Button, Card, Form, Icon, Input } from "antd";

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Basic extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  render() {

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <Card className="gx-card" title="پایه">
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem
            validateStatus={userNameError ? 'error' : ''}
            help={userNameError || ''}>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'لطفا نام کاربری خود را وارد کنید!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="نام کاربری" />
            )}
          </FormItem>
          <FormItem
            validateStatus={passwordError ? 'error' : ''}
            help={passwordError || ''}
          >
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'لطفا رمز عبور خود را وارد کنید' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="Password"
                placeholder="رمز عبور" />
            )}
          </FormItem>
          <FormItem>
            <Button className="gx-mb-0"
              type="primary"
              htmlType="ارسال"
              disabled={hasErrors(getFieldsError())}
            >
              ورود
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }

}

const WrappedNormalLoginForm = Form.create()(Basic);


export default WrappedNormalLoginForm;

