import React from "react";
import { Button, Form, Input, Select } from "antd";
import Widget from "components/Widget/index";

const Option = Select.Option;
const FormItem = Form.Item;
const CurrencyCalculator = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Widget
      title={<h2 className="h4 gx-mb-0 gx-text-capitalize">ماشین حساب ارز</h2>}>
      <p className="gx-mb-2">1.87 مالیات برابر است</p>
      <h1 className="gx-mb-2 gx-text-primary gx-font-weight-medium gx-fs-xxl">1140000 ریال</h1>
      <p className="gx-text-grey gx-fs-sm gx-mb-3 gx-mb-lg-4">1 درصد مالیات = 100000 ریال</p>
      <Form layout="inline" className="gx-form-inline-label-up gx-form-inline-currency">
        <FormItem label="از" className="gx-form-item-one-fourth">
          <Select defaultValue="ریال" onChange={handleChange}>
            <Option value="jack">مالیات</Option>
            <Option value="lucy">ریال</Option>
          </Select>
        </FormItem>
        <FormItem label="به" className="gx-form-item-one-fourth">
          <Select defaultValue="ریال" onChange={handleChange}>
            <Option value="jack">مالیات</Option>
            <Option value="lucy">ریال</Option>
          </Select>
        </FormItem>
        <FormItem label="مقدار (ریال)" className="gx-form-item-two-fourth">
          <Input placeholder="0.0" />
        </FormItem>
        <FormItem className="gx-d-block gx-mb-1">
          <Button className="gx-mb-0" type="primary">انتقال اکنون</Button>
        </FormItem>
      </Form>
    </Widget>
  );
};

export default CurrencyCalculator;
