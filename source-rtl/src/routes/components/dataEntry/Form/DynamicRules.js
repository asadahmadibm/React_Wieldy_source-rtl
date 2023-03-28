import React, { Component } from "react";
import { Button, Card, Checkbox, Form, Input } from "antd";

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { xs: 24, sm: 6 },
  wrapperCol: { xs: 24, sm: 14 },
};
const formTailLayout = {
  labelCol: { xs: 24, sm: 6 },
  wrapperCol: { xs: 24, sm: { span: 14, offset: 6 } },
};

class DynamicRules extends Component {
  state = {
    checkNick: false,
  };
  check = () => {
    this.props.form.validateFields(
      (err) => {
        if (!err) {
          console.info('success');
        }
      },
    );
  };
  handleChange = (e) => {
    this.setState({
      checkNick: e.target.checked,
    }, () => {
      this.props.form.validateFields(['nickname'], { force: true });
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card className="gx-card" title="قوانین پویا">
        <Form>
          <FormItem {...formItemLayout} label="نام">
            {getFieldDecorator('username', {
              rules: [{
                required: true,
                message: 'لطفا نام خود را وارد کنید',
              }],
            })(
              <Input placeholder="لطفا نام خود را وارد کنید" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="نام مستعار">
            {getFieldDecorator('nickname-1', {
              rules: [{
                required: this.state.checkNick,
                message: 'لطفا نام مستعار خود را وارد کنید',
              }],
            })(
              <Input placeholder="لطفا نام مستعار خود را وارد کنید" />
            )}
          </FormItem>
          <FormItem {...formTailLayout}>
            <Checkbox
              value={this.state.checkNick}
              onChange={this.handleChange}
            >
              نام مستعار لازم است
            </Checkbox>
          </FormItem>
          <FormItem {...formTailLayout}>
            <Button type="primary" onClick={this.check}>
              بررسی
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }
}

const WrappedDynamicRule = Form.create()(DynamicRules);

export default (WrappedDynamicRule);

