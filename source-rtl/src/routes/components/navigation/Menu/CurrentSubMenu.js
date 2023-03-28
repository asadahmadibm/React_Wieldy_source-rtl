import React, { Component } from "react";
import { Card, Icon, Menu } from "antd";

const SubMenu = Menu.SubMenu;


class CurrentSubMenu extends Component {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  state = {
    openKeys: ['sub1'],
  };
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    return (
      <Card className="gx-card" title="زیر منوی فعلی">
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: 256 }}
        >
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>پیمایش یکی</span></span>}>
            <Menu.Item key="1">مورد 1</Menu.Item>
            <Menu.Item key="2">مورد 2</Menu.Item>
            <Menu.Item key="3">مورد 3</Menu.Item>
            <Menu.Item key="4">مورد 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>پیمایش دو </span></span>}>
            <Menu.Item key="5">مورد 5</Menu.Item>
            <Menu.Item key="6">مورد 6</Menu.Item>
            <SubMenu key="sub3" title="زیر منو">
              <Menu.Item key="7">مورد 7</Menu.Item>
              <Menu.Item key="8">مورد 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>پیمایش سه </span></span>}>
            <Menu.Item key="9">مورد 9</Menu.Item>
            <Menu.Item key="10">مورد 10</Menu.Item>
            <Menu.Item key="11">مورد 11</Menu.Item>
            <Menu.Item key="12">مورد 12</Menu.Item>
          </SubMenu>
        </Menu>
      </Card>
    );
  }

}


export default (CurrentSubMenu);
