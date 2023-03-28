import React from "react";
import { Avatar, Card } from "antd";

const Basic = () => {
  return (
    <Card className="gx-card" title="پایه">
      <div className="gx-mb-3">
        <Avatar className="gx-ml-2" size="large" icon="user" />
        <Avatar className="gx-ml-2" icon="user" />
        <Avatar className="gx-ml-2" size="small" icon="user" />
      </div>
      <div className="gx-mb-0">
        <Avatar className="gx-ml-2" shape="square" size="large" icon="user" />
        <Avatar className="gx-ml-2" shape="square" icon="user" />
        <Avatar className="gx-ml-2" shape="square" size="small" icon="user" />
      </div>
    </Card>
  );
};

export default Basic;
