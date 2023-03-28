import React from "react";

import Widget from "components/Widget/index";

const SmartHomeCard = () => {
  return (
    <Widget styleName="gx-card-full">

      <img className="gx-smart-img" alt="example" src='https://via.placeholder.com/576x383'/>
      <div className="gx-p-3">
        <p className="gx-mb-2">خانه هوشمند در iPad با بچه های باهوش</p>
        <span className="gx-text-primary gx-pointer gx-text-uppercase gx-fs-sm">بیشتر بخوانید</span>
      </div>
    </Widget>
  );
};

export default SmartHomeCard;
