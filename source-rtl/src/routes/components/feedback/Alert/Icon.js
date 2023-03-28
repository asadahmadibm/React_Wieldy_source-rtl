import React from "react";
import { Alert, Card } from "antd";

const Icon = () => {
  return (
    <Card title="آیکون" className="gx-card">
      <Alert message="نکات موفقیت آمیز" type="success" showIcon />
      <Alert message="یادداشت های اطلاع رسانی" type="info" showIcon />
      <Alert message="هشدار" type="warning" showIcon />
      <Alert message="خطا" type="error" showIcon />
      <Alert
        message="نکات موفقیت آمیز"
        description="توضیحات دقیق و نکاتی درباره نگارش موفق"
        type="success"
        showIcon
      />
      <Alert
        message="یادداشت های اطلاع رسانی"
        description="توضیحات و اطلاعات اضافی در مورد نوشتن مقاله."
        type="info"
        showIcon
      />
      <Alert
        message="هشدار"
        description="این یک اخطار هشدار دهنده درباره نوشتن نسخه است."
        type="warning"
        showIcon
      />
      <Alert
        message="خطا"
        description="این یک پیام خطا در مورد نوشتن کپی است."
        type="error"
        showIcon
      />
    </Card>
  );
};

export default Icon;
