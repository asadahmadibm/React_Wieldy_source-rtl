import React from "react";

import Widget from "components/Widget/index";

const AayurvedaCard = () => {
  return (
    <Widget styleName="gx-card-full gx-text-center">
      <div className="gx-pt-4 gx-px-3">
        <div className="gx-separator gx-bg-success-dark" />
        <h2 className="gx-mb-4 gx-text-success-dark">وبینار</h2>
        <p className="text-justify">از متخصصان بیاموزید که این وبینار درست توضیح می دهد</p>
        <span className="gx-text-primary gx-pointer gx-text-uppercase gx-mb-3 gx-mb-xxl-2 gx-d-block">بیشتر بدانید</span>
      </div>
      <div className="gx-mt-xxl-3 gx-ayurveda-thumb">
        <img className="gx-img-fluid gx-w-100" alt="ayurveda" src='https://via.placeholder.com/576x330' />
      </div>
    </Widget>
  );
};

export default AayurvedaCard;
