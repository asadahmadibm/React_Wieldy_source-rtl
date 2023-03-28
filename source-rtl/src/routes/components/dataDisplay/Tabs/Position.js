import React from "react";
import { Card, Select, Tabs } from "antd";

const TabPane = Tabs.TabPane;
const Option = Select.Option;

class Position extends React.Component {
  state = {
    tabPosition: 'top',
  };
  changeTabPosition = (tabPosition) => {
    this.setState({ tabPosition });
  };

  render() {
    return (
      <Card className="gx-card" title="موقعیت">
        <div className="gx-mb-3">
          موقعیت برگه: &nbsp;
          <Select
            value={this.state.tabPosition}
            onChange={this.changeTabPosition}
            dropdownMatchSelectWidth={false}
          >
            <Option value="top">بالا</Option>
            <Option value="bottom">پایین</Option>
            <Option value="left">چپ</Option>
            <Option value="right">راست</Option>
          </Select>
        </div>
        <Tabs tabPosition={this.state.tabPosition}>
          <TabPane tab="تب 1" key="1">محتوای برگه 1</TabPane>
          <TabPane tab="تب 2" key="2">محتوای برگه 2</TabPane>
          <TabPane tab="تب 3" key="3">محتوای برگه 3</TabPane>
        </Tabs>
      </Card>
    );
  }
}

export default Position;
