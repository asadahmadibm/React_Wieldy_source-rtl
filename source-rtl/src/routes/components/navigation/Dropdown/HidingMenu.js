import React, { Component } from "react";
import { Card, Dropdown, Icon, Menu } from "antd";

class HidingMenu extends Component {
  state = {
    visible: false,
  };
  handleMenuClick = (e) => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  };
  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">با کلیک روی من ، منو بسته نمی شود.</Menu.Item>
        <Menu.Item key="2">با کلیک روی من ، منو نیز بسته نخواهد شد.</Menu.Item>
        <Menu.Item key="3">با کلیک روی من ، منو بسته خواهد شد</Menu.Item>
      </Menu>
    );
    return (
      <Card className="gx-card" title="پنهان کردن منو">
        <Dropdown overlay={menu}
          onVisibleChange={this.handleVisibleChange}
          visible={this.state.visible}
        >
          <span className="gx-link ant-dropdown-link">
            مرا معلق کن<Icon type="down" />
          </span>
        </Dropdown>
      </Card>
    );
  }

}


export default HidingMenu;
