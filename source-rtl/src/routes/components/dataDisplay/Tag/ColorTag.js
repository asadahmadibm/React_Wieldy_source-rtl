import React from "react";
import { Card, Tag } from "antd";

const ColorTag = () => {

  return (
    <Card title="رنگ برچسب ها" className="gx-card">
      <h4 style={{ marginBottom: 16 }}>ایستگاه از پیش تنظیم شده:</h4>
      <div>
        <Tag color="magenta">ارغوانی</Tag>
        <Tag color="red">قرمز</Tag>
        <Tag color="volcano">قرمز آتشین</Tag>
        <Tag color="orange">نارنجی</Tag>
        <Tag color="gold">طلایی</Tag>
        <Tag color="lime">لیمویی</Tag>
        <Tag color="green">سبز</Tag>
        <Tag color="cyan">فیروزه ای</Tag>
        <Tag color="blue">آبی</Tag>
        <Tag color="geekblue">آبی ملایم</Tag>
        <Tag color="purple">بنفش</Tag>
      </div>
      <h4 style={{ margin: '16px 0' }}>پیش فرض:</h4>
      <div>
        <Tag color="#f50">#f50</Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#108ee9">#108ee9</Tag>
      </div>
    </Card>
  );
};

export default ColorTag;
