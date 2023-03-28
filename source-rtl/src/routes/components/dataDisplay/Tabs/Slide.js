import React from "react";
import { Card, Radio, Tabs } from "antd";

const TabPane = Tabs.TabPane;

class Slide extends React.Component {
  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }

  render() {
    const { mode } = this.state;
    return (
      <Card className="gx-card" title="اسلاید">
        <Radio.Group onChange={this.handleModeChange} value={mode} className="gx-mb-2">
          <Radio.Button value="top">افقی</Radio.Button>
          <Radio.Button value="left">عمودی</Radio.Button>
        </Radio.Group>
        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
          style={{ height: 220 }}
        >
          <TabPane tab="تب 1" key="1">محتوای برگه 1</TabPane>
          <TabPane tab="تب 2" key="2">محتوای برگه 2</TabPane>
          <TabPane tab="تب 3" key="3">محتوای برگه 3</TabPane>
          <TabPane tab="تب 4" key="4">محتوای برگه 4</TabPane>
          <TabPane tab="تب 5" key="5">محتوای برگه 5</TabPane>
          <TabPane tab="تب 6" key="6">محتوای برگه 6</TabPane>
          <TabPane tab="تب 7" key="7">محتوای برگه 7</TabPane>
          <TabPane tab="تب 8" key="8">محتوای برگه 8</TabPane>
          <TabPane tab="تب 9" key="9">محتوای برگه 9</TabPane>
          <TabPane tab="تب 10" key="10"> 10 محتوای برگه </TabPane>
          <TabPane tab="تب 11" key="11">11 محتوای برگه</TabPane>
        </Tabs>
      </Card>
    );
  }
}

export default Slide;
