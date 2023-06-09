import React, { Component } from "react";
import { Button, Card, Col, Form, Icon, Input, Row } from "antd";


const FormItem = Form.Item;

class AdvancedSearch extends Component {

  state = {
    expand: false,
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  // To generate mock Form.Item
  getFields() {
    const count = this.state.expand ? 10 : 6;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col lg={8} md={8} sm={12} xs={24} key={i} style={{ display: i < count ? 'block' : 'none' }}>
          <div className="gx-form-row0">
            <FormItem label={`فیلد ${i}`}>
              {getFieldDecorator(`field-${i}`)(
                <Input placeholder="محل نگه داری" />
              )}
            </FormItem>
          </div>
        </Col>
      );
    }
    return children;
  }


  render() {
    return (
      <Card className="gx-card" title="جستجوی پیشرفته">
        <Form
          className="ant-advanced-search-form"
          onSubmit={this.handleSearch}
        >
          <Row>
            {this.getFields()}
            <Col span={24} className="gx-text-left">
              <Button type="primary" htmlType="submit">جستجو</Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                پاک کردن
              </Button>
              <span className="gx-link gx-btn-link gx-mr-2" onClick={this.toggle}>
                سقوط <Icon type={this.state.expand ? 'up' : 'down'} />
              </span>
            </Col>
          </Row>
        </Form>
      </Card>
    );
  }

}

const WrappedAdvancedSearch = Form.create()(AdvancedSearch);


export default (WrappedAdvancedSearch);
