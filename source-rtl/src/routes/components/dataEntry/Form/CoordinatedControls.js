import React, { Component } from "react";
import { Button, Card, Form, Input, Select } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

class CoordinatedControls extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleSelectChange = (value) => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card className="gx-card" title="کنترل های هماهنگ">
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="نوشته"
            labelCol={{ xs: 24, sm: 5 }}
            wrapperCol={{ xs: 24, sm: 12 }}
          >
            {getFieldDecorator('note', {
              rules: [{ required: true, message: 'لطفا یادداشت خود را وارد کنید!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            label="جنسیت"
            labelCol={{ xs: 24, sm: 5 }}
            wrapperCol={{ xs: 24, sm: 12 }}
          >
            {getFieldDecorator('gender', {
              rules: [{ required: true, message: 'لطفا جنسیت خود را انتخاب کنید!' }],
            })(
              <Select
                placeholder="یک گزینه را انتخاب کنید و متن ورودی را در بالا تغییر دهید"
                onChange={this.handleSelectChange}
              >
                <Option value="male">مرد</Option>
                <Option value="female">زن</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            wrapperCol={{ xs: 24, sm: { span: 12, offset: 5 } }}
          >
            <Button type="primary" htmlType="ارسال">
              ارسال
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }

}

const WrappedApp = Form.create()(CoordinatedControls);


export default (WrappedApp);






