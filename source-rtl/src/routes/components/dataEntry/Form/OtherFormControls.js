import React, { Component } from "react";
import { Button, Card, Form, Icon, InputNumber, Radio, Rate, Select, Slider, Switch, Upload } from "antd";

import "./otherFormControls.less";

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class OtherFormControls extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { xs: 24, sm: 6 },
      wrapperCol: { xs: 24, sm: 14 },
    };
    return (
      <Card className="gx-card" title="سایر فرم های کنترل">
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="متن ساده"
          >
            <span className="ant-form-text">چین</span>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="انتخاب"
            hasFeedback
          >
            {getFieldDecorator('select', {
              rules: [
                { required: true, message: 'لطفا کشور خود را انتخاب کنید!' },
              ],
            })(
              <Select placeholder="لطفاً یک کشور را انتخاب کنید">
                <Option value="چین">چین</Option>
                <Option value="use">امریکا</Option>
              </Select>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="[چندگانه] انتخاب کنید"
          >
            {getFieldDecorator('select-multiple', {
              rules: [
                { required: true, message: 'لطفا رنگ های مورد علاقه خود را انتخاب کنید!', type: 'array' },
              ],
            })(
              <Select mode="multiple" placeholder="لطفا رنگ های مورد علاقه را انتخاب کنید">
                <Option value="red">قرمز</Option>
                <Option value="green">سبز</Option>
                <Option value="blue">آبی</Option>
              </Select>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="شماره ورودی"
          >
            {getFieldDecorator('input-number', { initialValue: 3 })(
              <InputNumber min={1} max={10} />
            )}
            <span className="ant-form-text"> ماشین آلات</span>
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="تعویض"
          >
            {getFieldDecorator('switch', { valuePropName: 'checked' })(
              <Switch />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="اسلایدر"
          >
            {getFieldDecorator('slider')(
              <Slider marks={{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }} />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="گروه رادیو"
          >
            {getFieldDecorator('radio-group')(
              <RadioGroup>
                <Radio value="a">مورد 1</Radio>
                <Radio value="b">مورد 2</Radio>
                <Radio value="c">مورد 3</Radio>
              </RadioGroup>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="دکمه رادیویی"
          >
            {getFieldDecorator('radio-button')(
              <RadioGroup>
                <RadioButton value="a">مورد 1</RadioButton>
                <RadioButton value="b">مورد 2</RadioButton>
                <RadioButton value="c">مورد 3</RadioButton>
              </RadioGroup>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="امتیاز"
          >
            {getFieldDecorator('rate', {
              initialValue: 3.5,
            })(
              <Rate />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="آپلود"
            extra="longgggggggggggggggggggggggggggggggggg"
          >
            {getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <Icon type="upload" /> برای بارگذاری کلیک کنید
                </Button>
              </Upload>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="هشدار"
          >
            <div className="dropbox">
              {getFieldDecorator('dragger', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">برای بارگیری ، روی این منطقه کلیک کنید یا بکشید</p>
                  <p className="ant-upload-hint">پشتیبانی از بارگذاری مجدد یا فله.</p>
                </Upload.Dragger>
              )}
            </div>
          </FormItem>

          <FormItem
            wrapperCol={{ xs: 24, sm: { span: 14, offset: 6 } }}>
            <Button type="primary" htmlType="ارسال">ارسال</Button>
          </FormItem>
        </Form>
      </Card>
    );
  }
}

const WrappedDemo = Form.create()(OtherFormControls);


export default WrappedDemo;
