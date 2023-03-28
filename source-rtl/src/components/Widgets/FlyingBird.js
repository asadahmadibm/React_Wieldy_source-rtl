import React from "react";
import { Button } from "antd";

import Widget from "components/Widget/index";


const FlyingBird = () => {
  return (
    <Widget>
      <div className="gx-media gx-align-items-center gx-mb-4">
        <div className="gx-ml-3">
          <img src={require("assets/images/widget/flying.png")} alt='flying' />
        </div>
        <div className="gx-media-body">
          <h2 className="gx-mb-1">
            پرنده ی در حال پرواز
          </h2>
          <p className="gx-text-grey gx-mb-0">علی زمانی</p>
        </div>
      </div>
      <p className="gx-mb-4 text-justify">
        برخی توضیحات در مورد کارت. این ویجت می تواند برای توصیف یک پروژه ، یک محصول ، مشخصات کاربر یا موارد دیگر مورد استفاده قرار گیرد.
      </p>
      <Button type="primary" className="gx-mb-1" htmlType="submit">
        اشتراک در
      </Button>
    </Widget>
  );
};

export default FlyingBird;
