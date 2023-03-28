import React from "react";
import {Card, Tag} from "antd";

const Basic = () => {
  function log(e) {
    console.log(e);
  }

  function preventDefault(e) {
    e.preventDefault();
    console.log('Clicked! But prevent CRM.');
  }

  return (
    <Card title="پایه" className="gx-card">
      <Tag>1 برچسب</Tag>
      <Tag><a href="https://github.com/ant-design/ant-design/issues/1862">بینک</a></Tag>
      <Tag closable onClose={log}>2 برچسب</Tag>
      <Tag closable onClose={preventDefault}>جلوگیری از پیش فرض</Tag>
    </Card>
  );
};

export default Basic;
