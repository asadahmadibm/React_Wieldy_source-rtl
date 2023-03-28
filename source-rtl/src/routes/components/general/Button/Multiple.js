import React, { Component } from "react";
import { Button, Card, Dropdown, Icon, Menu } from "antd";

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">مورد 1</Menu.Item>
    <Menu.Item key="2">مورد 2</Menu.Item>
    <Menu.Item key="3">مورد 3</Menu.Item>
  </Menu>
);


class Multiple extends Component {
  render() {
    return (
      <Card className="gx-card" title="چند منظوره">
        <Button type="primary">اولیه</Button>
        <Button>ثانویه</Button>
        <Dropdown overlay={menu}>
          <Button>
            عمل <Icon type="down" />
          </Button>
        </Dropdown>
      </Card>
    );
  }
}

export default Multiple;
