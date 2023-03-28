import React, { Component } from "react";

import { Card, Icon, Menu, Switch } from "antd";

const SubMenu = Menu.SubMenu;

class MenuThemes extends Component {

  state = {
    theme: 'dark',
    current: '1',
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Card className="gx-card" title="تم منو">
        <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="تیره"
          unCheckedChildren="روشن" />
        <br />
        <br />
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline">
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>پیمایش یکی</span></span>}>
            <Menu.Item key="1">مورد 1</Menu.Item>
            <Menu.Item key="2">مورد 2</Menu.Item>
            <Menu.Item key="3">مورد 3</Menu.Item>
            <Menu.Item key="4">مورد 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>پیمایش دو</span></span>}>
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


export default (MenuThemes);
