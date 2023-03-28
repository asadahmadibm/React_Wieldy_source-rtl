import React from "react";
import {Card, Dropdown, Icon, Menu} from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">مورد منو 1</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">مورد دوم فهرست</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">مورد منوی 3</a>
    </Menu.Item>
  </Menu>
);

const Basic = () => {
  return (
    <Card className="gx-card" title="پایه">
      <Dropdown overlay={menu}>
        <span className="gx-link ant-dropdown-link">
          مرا معلق کن<Icon type="down"/>
        </span>
      </Dropdown>
    </Card>
  );
};

export default Basic;
