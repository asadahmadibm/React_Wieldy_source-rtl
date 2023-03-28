import React, { Component } from "react";
import { AutoComplete, Card, Cascader, Col, DatePicker, Input, InputNumber, Select } from "antd";

const InputGroup = Input.Group;
const Option = Select.Option;

const options = [{
  value: 'zhejiang',
  label: 'زیبا',
  children: [{
    value: 'hangzhou',
    label: 'حسینی',
    children: [{
      value: 'xihu',
      label: 'نزدیک دریاچه',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'حسن',
  children: [{
    value: 'nanjing',
    label: 'امیدی',
    children: [{
      value: 'zhonghuamen',
      label: 'خیابان اصلی',
    }],
  }],
}];

class InputGroups extends Component {
  state = {
    dataSource: [],
  };
  handleChange = (value) => {
    this.setState({
      dataSource: !value || value.indexOf('@') >= 0 ? [] : [
        `${value}@gmail.com`,
        `${value}@163.com`,
        `${value}@qq.com`,
      ],
    });
  };

  render() {
    return (
      <Card className="gx-card" title="ورودی گروهی">
        <InputGroup size="large" className="gx-mb-3">
          <Col sm={5} xs={12}>
            <Input defaultValue="0571" />
          </Col>

          <Col sm={8} xs={12}>
            <Input defaultValue="26888888" />
          </Col>
        </InputGroup>

        <InputGroup compact className="gx-mb-3">
          <Input style={{ width: '30%' }} defaultValue="0571" />
          <Input style={{ width: '50%' }} defaultValue="26888888" />
        </InputGroup>

        <InputGroup compact className="gx-mb-3">
          <Select defaultValue="Zhejiang">
            <Option value="Zhejiang">زیبا</Option>
            <Option value="Jiangsu">حسینی</Option>
          </Select>
          <Input style={{ width: '50%' }} defaultValue="منطقه اول " />
        </InputGroup>

        <InputGroup compact className="gx-mb-3">
          <Select defaultValue="Option1">
            <Option value="Option1">ویژگی 1</Option>
            <Option value="Option2">ویژگی 2</Option>
          </Select>
          <Input style={{ width: '50%' }} defaultValue="محتوای ورودی" />
          <InputNumber />
        </InputGroup>

        <InputGroup compact className="gx-mb-3">
          <Input style={{ width: '50%' }} defaultValue="محتوای ورودی" />
          <DatePicker />
        </InputGroup>

        <InputGroup compact className="gx-mb-3">
          <Select defaultValue="Option1-1">
            <Option value="Option1-1">ویژگی 1-1</Option>
            <Option value="Option1-2">ویژگی 1-2</Option>
          </Select>
          <Select defaultValue="Option2-2">
            <Option value="Option2-1">ویژگی 2-1</Option>
            <Option value="Option2-2">ویژگی 2-2</Option>
          </Select>
        </InputGroup>

        <InputGroup compact className="gx-mb-3">
          <Select defaultValue="1">
            <Option value="1">بین</Option>
            <Option value="2">به جز</Option>
          </Select>
          <Input style={{ width: 100, textAlign: 'center' }} placeholder="کمترین" />
          <Input className="gx-border-lt-xs"
            style={{ width: 30, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff' }} placeholder="~"
            disabled />
          <Input className="gx-border-lt-xs" style={{ width: 100, textAlign: 'center', borderLeft: 0 }}
            placeholder="بیشترین" />
        </InputGroup>

        <InputGroup compact className="gx-mb-3">
          <Select defaultValue="ثبت نام">
            <Option value="Sign Up">ثبت نام</Option>
            <Option value="Sign In">ورود</Option>
          </Select>
          <AutoComplete
            dataSource={this.state.dataSource}
            style={{ width: 200 }}
            onChange={this.handleChange}
            placeholder="ایمیل"
          />
        </InputGroup>

        <InputGroup compact className="gx-mb-3">
          <Select style={{ width: '30%' }} defaultValue="Home">
            <Option value="Home">خانه</Option>
            <Option value="Company">شرکت</Option>
          </Select>
          <Cascader style={{ width: '70%' }} options={options} placeholder="انتخاب آدرس" />
        </InputGroup>
      </Card>
    );
  }
}

export default InputGroups;
