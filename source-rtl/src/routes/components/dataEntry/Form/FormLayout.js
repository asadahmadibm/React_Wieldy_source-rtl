import React, {Component} from "react";
import {Button, Card, Form, Input, Radio} from "antd";

const FormItem = Form.Item;

class FormLayout extends Component {

  handleFormLayoutChange = (e) => {
    this.setState({formLayout: e.target.value});
  }

  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }

  render() {
    const {formLayout} = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: {xs: 24, sm: 6},
      wrapperCol: {xs: 24, sm: 14},
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: {xs: 24, sm: {span: 14, offset: 6}},
    } : null;
    return (
      <Card className="gx-card" title="چیدمان فرم">
        <Form layout={formLayout}>
          <FormItem
            label="چیدمان فرم"
            {...formItemLayout}
          >
            <Radio.Group defaultValue="horizontal" onChange={this.handleFormLayoutChange}>
              <Radio.Button value="horizontal">افقی</Radio.Button>
              <Radio.Button value="vertical">عمودی</Radio.Button>
              <Radio.Button value="inline">خطی</Radio.Button>
            </Radio.Group>
          </FormItem>
          <FormItem
            label="زمینه الف"
            {...formItemLayout}
          >
            <Input placeholder="محل نگهدارنده ورودی"/>
          </FormItem>
          <FormItem
            label="زمینه ب"
            {...formItemLayout}
          >
            <Input placeholder="محل نگهدارنده ورودی"/>
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <Button type="primary">ارسال</Button>
          </FormItem>
        </Form>
      </Card>
    );
  }

}

export default FormLayout;






