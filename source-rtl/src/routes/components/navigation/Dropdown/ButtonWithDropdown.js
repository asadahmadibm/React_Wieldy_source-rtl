import React from "react";
import { Button, Card, Dropdown, Icon, Menu, message } from "antd";

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('روی مورد منو کلیک کنید');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">محصول</Menu.Item>
    <Menu.Item key="2">اپلیکیشن</Menu.Item>
    <Menu.Item key="3">وبلاگ</Menu.Item>
  </Menu>
);
const ButtonWithDropdown = () => {
  return (
    <Card className="gx-card" title="دکمه با Dropdown">
      <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
        رها کردن
      </Dropdown.Button>
      <Dropdown.Button
        onClick={handleButtonClick}
        overlay={menu}
        disabled
      >
        رها کردن
      </Dropdown.Button>
      <Dropdown overlay={menu}>
        <Button>
          دکمه <Icon type="down" />
        </Button>
      </Dropdown>
    </Card>
  );
};

export default ButtonWithDropdown;
