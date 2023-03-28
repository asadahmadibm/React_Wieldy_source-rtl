import React from "react";
import { Avatar, Dropdown, Menu } from "antd";

import Widget from "components/Widget/index";
import avatar3 from '../../ad-images/avatar-3.png';
import avatar4 from '../../ad-images/avatar-4.png';
import avatar5 from '../../ad-images/avatar-5.png';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">مورد منو 1</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">مورد منو 2</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">مورد منو 3</Menu.Item>
  </Menu>
);


const ProjectWidget = () => {
  return (
    <Widget styleName="gx-ch-capitalize gx-card-sm-px" extra={
      <ul className="gx-list-inline gx-ml-auto gx-mb-0 gx-text-grey">
        <li><i className="icon icon-sweet-alert" /></li>
        <li><i className="icon icon-invert-color" /></li>
        <li><Dropdown overlay={menu} trigger={['click']}>
          <span className="gx-link ant-dropdown-link gx-text-grey">
            <i className="icon icon-chevron-down" />
          </span>
        </Dropdown></li>
      </ul>
    } title="ویجت پروژه">
      <div className="gx-text-center gx-pt-sm-3">
        <img className="gx-size-60 gx-mb-3" src={require("assets/images/widget/birds.png")} alt='birds' />

        <h2 className="gx-mb-3 gx-mb-sm-4">برنامه شکار عقاب</h2>

        <ul className="gx-list-inline gx-mb-3 gx-mb-lg-4">
          <li><Avatar src={avatar3} /></li>
          <li><Avatar src={avatar4} /></li>
          <li><Avatar src={avatar5} /></li>
          <li><Avatar className="gx-bg-primary gx-text-white">خانم</Avatar></li>
          <li><span className="ant-avatar gx-border gx-border-grey gx-bg-transparent gx-text-grey"><i
            className="icon icon-add" /></span></li>
        </ul>
        <button className="gx-btn gx-btn-primary gx-text-white gx-mb-1">برو به پروژه</button>
      </div>
    </Widget>
  );
};

export default ProjectWidget;
