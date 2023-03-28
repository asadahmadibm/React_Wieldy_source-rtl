import React from "react";
import { Card } from "antd";

const InnerCard = () => {
  return (

    <Card title="عنوان کارت">
      <p
        style={{
          fontSize: 14,
          marginBottom: 16,
          fontWeight: 500,
        }}
      >
        عنوان گروه
      </p>
      <Card
        type="inner"
        title="عنوان کارت داخلی"
        extra={<span className="gx-link">بیشتر</span>}
      >
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
      </Card>
      <Card
        type="inner"
        title="عنوان کارت داخلی"
        extra={<span className="gx-link">بیشتر</span>}
      >
        طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید
      </Card>
    </Card>

  );
};

export default InnerCard;
