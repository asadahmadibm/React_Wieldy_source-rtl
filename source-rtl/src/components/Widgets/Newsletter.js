import React from "react";
import { Button, Form, Input } from "antd";

import Widget from "components/Widget/index";


const Newsletter = () => {
  return (
    <Widget
      title={<h4 className="gx-text-primary gx-text-capitalize gx-mb-0">
        <i className="icon icon-mail-open gx-ml-3" />
        اشتراک خبرنامه</h4>
      }>
      <h2 className="gx-mb-3 gx-mb-xxl-4 gx-font-weight-light">اصلاً اخبار و به روزرسانی های هفتگی ما را از دست ندهید</h2>
      <Form className="gx-signup-form gx-form-row0 gx-mb-0">
        <div className="gx-mb-3">
          <Input placeholder="نام کاربری" />
        </div>
        <Button type="primary" className="gx-mb-0" htmlType="ارسال">
          اشتراک در
        </Button>
      </Form>
    </Widget>
  );
};

export default Newsletter;
