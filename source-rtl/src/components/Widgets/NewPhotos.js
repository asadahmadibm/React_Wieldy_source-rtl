import React from "react";
import {Button} from "antd";

import Widget from "components/Widget/index";


const NewPhotos = () => {
  return (
    <Widget styleName="gx-widget-bg">

      <span className="gx-widget-badge">20 ریال در ماه</span>
      <i className="icon icon-camera gx-fs-xlxl"/>

      <h1 className="gx-fs-xxxl gx-font-weight-semi-bold gx-mb-3 gx-mb-sm-4">38,248 عکس</h1>
      <p>عکسهای جدید این هفته را اضافه کردند</p>
      <p>
      اکنون با طراحی بعدی خود شروع به کار کنید. امروز مشترک شوید و 20 ریال در ماه صرفه جویی کنید
      </p>
      <Button className="gx-mb-1 gx-btn-warning" htmlType="ارسال">
      اشتراک در
      </Button>
    </Widget>
  );
};

export default NewPhotos;
