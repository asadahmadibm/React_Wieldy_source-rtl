import React from "react";
import { Card, Divider, Form, Icon, Radio, Switch, Table } from "antd";

const FormItem = Form.Item;

const columns = [{
  title: 'نام',
  dataIndex: 'name',
  key: 'name',
  width: 150,
  render: text => <span className="gx-link">{text}</span>,
}, {
  title: 'سن',
  dataIndex: 'age',
  key: 'age',
  width: 70,
}, {
  title: 'آدرس',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'عمل',
  key: 'action',
  width: 360,
  render: (text, record) => (
    <span>
      <span className="gx-link">عمل 一 {record.name}</span>
      <Divider type="vertical" />
      <span className="gx-link">حذف</span>
      <Divider type="vertical" />
      <span className="gx-link ant-dropdown-link">
        اقدامات بیشتر <Icon type="down" />
      </span>
    </span>
  ),
}];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'نیما زمانی',
    age: `${i}2`,
    address: `شماره نیویورک ${i} دریاچه پارک`,
    description: `نام من جان براون است ، من  ${i}2 ساله هستم, زندگی در نیویورک شماره${i} دریاچه پارک`,
  });
}

const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'عنوان هدر در اینجاست';
const showHeader = true;
const footer = () => 'فوتر در اینجاست';
const scroll = { y: 240 };
const pagination = { position: 'bottom' };

class Dynamic extends React.Component {
  state = {
    bordered: false,
    loading: false,
    pagination,
    size: 'default',
    expandedRowRender,
    title: undefined,
    showHeader,
    footer,
    rowSelection: {},
    scroll: undefined,
  };

  handleToggle = (prop) => {
    return (enable) => {
      this.setState({ [prop]: enable });
    };
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  handleExpandChange = (enable) => {
    this.setState({ expandedRowRender: enable ? expandedRowRender : undefined });
  };

  handleTitleChange = (enable) => {
    this.setState({ title: enable ? title : undefined });
  };

  handleHeaderChange = (enable) => {
    this.setState({ showHeader: enable ? showHeader : false });
  };

  handleFooterChange = (enable) => {
    this.setState({ footer: enable ? footer : undefined });
  };

  handleRowSelectionChange = (enable) => {
    this.setState({ rowSelection: enable ? {} : undefined });
  };

  handleScollChange = (enable) => {
    this.setState({ scroll: enable ? scroll : undefined });
  };

  handlePaginationChange = (e) => {
    const { value } = e.target;
    this.setState({
      pagination: value === 'none' ? false : { position: value },
    });
  };

  render() {
    const state = this.state;
    return (
      <Card title="پویا">
        <div className="components-table-demo-control-bar">
          <Form layout="inline">
            <FormItem label="هم مرز">
              <Switch checked={state.bordered} onChange={this.handleToggle('bordered')} />
            </FormItem>
            <FormItem label="بارگذاری">
              <Switch checked={state.loading} onChange={this.handleToggle('loading')} />
            </FormItem>
            <FormItem label="عنوان">
              <Switch checked={!!state.title} onChange={this.handleTitleChange} />
            </FormItem>
            <FormItem label="عنوان ستون">
              <Switch checked={!!state.showHeader} onChange={this.handleHeaderChange} />
            </FormItem>
            <FormItem label="پاورقی">
              <Switch checked={!!state.footer} onChange={this.handleFooterChange} />
            </FormItem>
            <FormItem label="قابل گسترش است">
              <Switch checked={!!state.expandedRowRender} onChange={this.handleExpandChange} />
            </FormItem>
            <FormItem label="کادر انتخاب">
              <Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange} />
            </FormItem>
            <FormItem label="هدر ثابت">
              <Switch checked={!!state.scroll} onChange={this.handleScollChange} />
            </FormItem>
            <FormItem label="سایز">
              <Radio.Group size="default" value={state.size} onChange={this.handleSizeChange}>
                <Radio.Button value="default">متوسط</Radio.Button>
                <Radio.Button value="middle">متوسط</Radio.Button>
                <Radio.Button value="small">کوچک</Radio.Button>
              </Radio.Group>
            </FormItem>
            <FormItem label="صفحه بندی">
              <Radio.Group
                value={state.pagination ? state.pagination.position : 'none'}
                onChange={this.handlePaginationChange}
              >
                <Radio.Button value="top">بالا</Radio.Button>
                <Radio.Button value="bottom">پایین</Radio.Button>
                <Radio.Button value="both">هر دو</Radio.Button>
                <Radio.Button value="none">هیچ کدام</Radio.Button>
              </Radio.Group>
            </FormItem>
          </Form>
        </div>
        <Table className="gx-table-responsive" {...this.state} columns={columns} dataSource={data} />
      </Card>
    );
  }
}

export default Dynamic;
