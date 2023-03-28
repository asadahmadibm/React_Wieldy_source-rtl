import React, { Component } from "react";
import { Card, Icon, Menu, Switch } from "antd";

const { SubMenu } = Menu;


class SwitchMenu extends Component {
  state = {
    mode: 'inline',
    theme: 'light',
  }
  changeMode = (value) => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }

  render() {
    return (
      <Card className="gx-card" title="منو با تغییر حالت">
        <Switch onChange={this.changeMode} /> تغییر حالت
        <span className="ant-divider" style={{ margin: '0 1em' }} />
        <Switch onChange={this.changeTheme} /> تغییر زمینه
        <br />
        <br />
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <Menu.Item key="1">
            <Icon type="mail" />
            پیمایش یکی
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="calendar" />
            پیمایش دو
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>پیمایش سه </span></span>}>
            <Menu.Item key="3">مورد 3</Menu.Item>
            <Menu.Item key="4">مورد 4</Menu.Item>
            <SubMenu key="sub1-2" title="زیر منو">
              <Menu.Item key="5">مورد 5</Menu.Item>
              <Menu.Item key="6">مورد 6</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="setting" /><span>پیمایش چهار</span></span>}>
            <Menu.Item key="7">مورد 7</Menu.Item>
            <Menu.Item key="8">مورد 8</Menu.Item>
            <Menu.Item key="9">مورد 9</Menu.Item>
            <Menu.Item key="10">مورد 10</Menu.Item>
          </SubMenu>
        </Menu>
      </Card>
    );
  }

}


export default SwitchMenu;
