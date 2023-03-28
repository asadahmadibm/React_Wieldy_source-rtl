import React from "react";
import Widget from "components/Widget/index";
import {Button} from "antd";

const RewardCard = () => {
  return (
    <Widget styleName="gx-bg-dark-primary">
      <div className="gx-flex-row gx-justify-content-center gx-mb-3 gx-mb-md-4">
        <i className={`icon icon-refer gx-fs-xlxl gx-text-white`}/>
      </div>
      <div className="gx-text-center">
        <h2 className="h3 gx-mb-3 gx-text-white">مراجعه و دریافت پاداش</h2>
        <p className="gx-text-white gx-mb-3">ما را به دوستان خود معرفی کنید و از ما هدیه بگیرید</p>
        <Button size="large" className="gx-btn-secondary gx-mt-md-5 gx-mb-1">دعوت از دوستان</Button>
      </div>
    </Widget>
  );
};

export default RewardCard;
