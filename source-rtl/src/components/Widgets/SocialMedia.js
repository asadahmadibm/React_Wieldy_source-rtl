import React from "react";
import {Button} from "antd";

import Widget from "components/Widget/index";


const SocialMedia = () => {
  const ButtonGroup = Button.Group;
  return (
    <Widget>
      <div>
        <div className="ant-card-head-title gx-mb-3">رسانه های اجتماعی</div>
        <h2 className="gx-mb-3">بازاریابی آنلاین بازاریابی رسانه ای دیجیتال</h2>
        <p className="gx-text-grey gx-fs-sm">27 مرداد 1398 ساعت 12:00 ظهر</p>
        <p>از کارشناسان بیاموزید. این وبینار درست توضیح می دهد ..</p>
        <h4 className="gx-text-primary gx-mb-3 gx-mb-sm-4">آماده عضویت هستید؟</h4>
        <ButtonGroup className="gx-mb-1">
          <Button className="gx-mb-0" type="primary">بله</Button>
          <Button className="gx-btn-warning gx-mb-0">شاید</Button>
          <Button className="gx-btn-light gx-mb-0">خیر</Button>
        </ButtonGroup>
      </div>
    </Widget>
  );
};

export default SocialMedia;
