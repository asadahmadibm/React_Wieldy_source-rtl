import React from "react";
import { Avatar, Card } from "antd";

const Type = () => {
  return (
    <Card className="gx-card" title="نوع">
      <Avatar className="gx-ml-2" icon="user" />
      <Avatar className="gx-ml-2">ی</Avatar>
      <Avatar className="gx-ml-2">کاربر</Avatar>
      <Avatar className="gx-ml-2" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar className="gx-ml-2" style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>ی</Avatar>
      <Avatar className="gx-ml-2" style={{ backgroundColor: '#87d068' }} icon="user" />
    </Card>
  );
};

export default Type;
