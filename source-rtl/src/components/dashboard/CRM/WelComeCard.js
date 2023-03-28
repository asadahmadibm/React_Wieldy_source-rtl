import React from "react";
import {Icon} from "antd";

const WelComeCard = () => {

  return (
    <div className="gx-wel-ema gx-pt-xl-2">
      <h1 className="gx-mb-3">خوش آمدید ایمان</h1>
      <p className="gx-fs-sm gx-text-uppercase">شما دارید</p>
      <ul className="gx-list-group">
        <li>
          <Icon type="message"/>
          <span>5 پیام خوانده نشده</span>
        </li>
        <li>
          <Icon type="mail"/>
          <span>2 دعوت نامه در انتظار</span>
        </li>
        <li>
          <Icon type="profile"/>
          <span>7 وظایف مقرر</span>
        </li>
        <li>
          <Icon type="bell"/>
          <span>3 اعلان های دیگر</span>
        </li>
      </ul>
    </div>

  );
};

export default WelComeCard;
