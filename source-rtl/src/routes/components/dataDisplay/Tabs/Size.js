import React from "react";
import { Card, Radio, Tabs } from "antd";

const { TabPane } = Tabs;

class Size extends React.Component {
  state = { size: 'small' };
  onChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <Card className="gx-card" title="سایز">
        <Radio.Group value={size} onChange={this.onChange} className="gx-mb-3">
          <Radio.Button value="small">کوچک</Radio.Button>
          <Radio.Button value="default">متوسط</Radio.Button>
          <Radio.Button value="large">بزرگ</Radio.Button>
        </Radio.Group>
        <Tabs defaultActiveKey="1" size={size}>
          <TabPane tab="تب 1" key="1">محتوای برگه 1</TabPane>
          <TabPane tab="تب 2" key="2">محتوای برگه 2</TabPane>
          <TabPane tab="تب 3" key="3">محتوای برگه 3</TabPane>
        </Tabs>
      </Card>
    );
  }
}

export default Size;
