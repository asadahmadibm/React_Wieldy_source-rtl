import React, { Component } from "react";
import { Button, Card, Icon, Menu } from "antd";

const SubMenu = Menu.SubMenu;

class CollapsedMenu extends Component {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Card className="gx-card" title="منو جمع شده">
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>مورد 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>مورد 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>مورد 3</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>پیمایش یکی</span></span>}>
            <Menu.Item key="5">مورد 5</Menu.Item>
            <Menu.Item key="6">مورد 6</Menu.Item>
            <Menu.Item key="7">مورد 7</Menu.Item>
            <Menu.Item key="8">مورد 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>پیمایش دو </span></span>}>
            <Menu.Item key="9">مورد 9</Menu.Item>
            <Menu.Item key="10">مورد 10</Menu.Item>
            <SubMenu key="sub3" title="زیر منو">
              <Menu.Item key="11">مورد 11</Menu.Item>
              <Menu.Item key="12">مورد 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Card>
    );
  }

}


export default CollapsedMenu;
