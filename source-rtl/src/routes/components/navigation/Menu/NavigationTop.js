import React, { Component } from "react";
import { Card, Icon, Menu } from "antd";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class NavigationTop extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Card className="gx-card" title="پیمایش برتر">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">
            <Icon type="mail" />ناوبری یک
          </Menu.Item>
          <Menu.Item key="app" disabled>
            <Icon type="appstore" />ناوبری دو
          </Menu.Item>
          <SubMenu title={<span><Icon type="setting" />ناوبری 3 - زیر منو</span>}>
            <MenuItemGroup title=" ویژگی 1">
              <Menu.Item key="setting:1">ویژگی 1</Menu.Item>
              <Menu.Item key="setting:2">ویژگی 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="ویژگی 2">
              <Menu.Item key="setting:3">ویژگی 3</Menu.Item>
              <Menu.Item key="setting:4">ویژگی 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="http://demo.g-axon.com/jumbo-react/#/app/dashboard/default" target="_blank"
              rel="noopener noreferrer">ناوبری چهار - لینک</a>
          </Menu.Item>
        </Menu>
      </Card>
    );
  }

}


export default NavigationTop;
