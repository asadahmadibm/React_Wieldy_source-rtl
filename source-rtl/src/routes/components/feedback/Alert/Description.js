import React from "react";
import { Alert, Card } from "antd";

const Description = () => {
  return (
    <Card title="توضیحات" className="gx-card">
      <Alert
        message="متن موفقیت"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        type="success"
      />
      <Alert
        message="متن اطلاعات"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        type="info"
      />
      <Alert
        message="متن هشدار"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        type="warning"
      />
      <Alert
        message="متن خطا"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        type="error"
      />
    </Card>
  );
};

export default Description;
