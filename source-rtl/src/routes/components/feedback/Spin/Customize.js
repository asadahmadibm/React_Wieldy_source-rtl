import React from "react";
import { Alert, Card, Spin } from "antd";

const Customize = () => {
  return (
    <Card title="شخصی سازی" className="gx-card">
      <Spin tip="در حال بارگذاری...">
        <Alert
          message="عنوان پیام هشدار"
          description="جزئیات بیشتر در مورد زمینه این هشدار."
          type="info"
        />
      </Spin>
    </Card>
  );
}
export default Customize;
