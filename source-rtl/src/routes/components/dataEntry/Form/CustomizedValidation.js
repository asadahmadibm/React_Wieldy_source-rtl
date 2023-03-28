import React from "react";
import { Card, Cascader, Col, DatePicker, Form, Input, InputNumber, Select, TimePicker } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
    md: { span: 16 },
    lg: { span: 12 },
  },
};


const CustomizedValidation = () => {
  return (
    <Card className="gx-card" title="اعتبارسنجی سفارشی">
      <Form>
        <FormItem
          {...formItemLayout}
          label="عدم موفقیت"
          validateStatus="error"
          help="باید ترکیبی از اعداد و حروف باشد"
        >
          <Input placeholder="انتخاب در دسترس نیست" id="error" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="هشدار"
          validateStatus="warning"
        >
          <Input placeholder="هشدار" id="warning-1" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="اعتبار سنجی"
          hasFeedback
          validateStatus="validating"
          help="اطلاعات در حال تأیید است ..."
        >
          <Input placeholder="من محتوای معتبرم" id="validating" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="موفقیت"
          hasFeedback
          validateStatus="success"
        >
          <Input placeholder="من محتوا هستم" id="success" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="هشدار"
          hasFeedback
          validateStatus="warning"
        >
          <Input placeholder="هشدار" id="warning" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="عدم موفقیت"
          hasFeedback
          validateStatus="error"
          help="باید ترکیبی از اعداد و حروف باشد"
        >
          <Input placeholder="انتخاب در دسترس نیست" id="error-1" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="موفقیت"
          hasFeedback
          validateStatus="success"
        >
          <DatePicker style={{ width: '100%' }} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="هشدار"
          hasFeedback
          validateStatus="warning"
        >
          <TimePicker style={{ width: '100%' }} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="خطا"
          hasFeedback
          validateStatus="error"
        >
          <Select defaultValue="1">
            <Option value="1">مورد 1</Option>
            <Option value="2">مورد 2</Option>
            <Option value="3">مورد 3</Option>
          </Select>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="اعتبار سنجی"
          hasFeedback
          validateStatus="validating"
          help="اطلاعات در حال تأیید است ..."
        >
          <Cascader defaultValue={['1']} options={[]} />
        </FormItem>

        <FormItem
          label="درون خطی"
          {...formItemLayout}
        >

          <div className="ant-row gx-form-row0">
            <Col xs={24} sm={11}>
              <FormItem validateStatus="error" help="لطفاً تاریخ صحیح را انتخاب کنید">
                <DatePicker />
              </FormItem>
            </Col>
            <Col xs={24} sm={2}>
              <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                -
          </span>
            </Col>
            <Col xs={24} sm={11}>
              <FormItem>
                <DatePicker />
              </FormItem>
            </Col>
          </div>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="موفقیت"
          hasFeedback
          validateStatus="success"
        >
          <InputNumber style={{ width: '100%' }} />
        </FormItem>
      </Form>
    </Card>
  );
};

export default CustomizedValidation;





