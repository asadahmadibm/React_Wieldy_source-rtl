import React from "react";
import Widget from "components/Widget/index";
import {Col, Row} from "antd";
import Img1 from '../../../ad-images/icon-1.png';
import Img2 from '../../../ad-images/icon-2.png';

const DownloadMobileApps = () => {
  return (
    <Widget styleName="gx-pink-purple-gradient-reverse gx-text-white">
      <Row>
        <Col xl={16} lg={14} md={12} sm={12} xs={12}>
          <p>برنامه های موبایل را بارگیری کنید</p>
          <h4 className="gx-font-weight-semi-bold gx-text-white gx-mb-0">حالا حساب شما روی انگشتان شماست</h4>
        </Col>
        <Col xl={8} lg={10} md={12} sm={12} xs={12} className="gx-text-right">
          <div className="gx-flex-column gx-justify-content-center gx-h-100">
            <span className="gx-mb-2 gx-app-thumb"><img src={Img1} alt="..."/>
            </span>
            <span className="gx-app-thumb"><img src={Img2} alt="..."/></span>
          </div>
        </Col>
      </Row>
    </Widget>
  );
};

export default DownloadMobileApps;
