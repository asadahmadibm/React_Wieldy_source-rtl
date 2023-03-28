import React from "react";
import { Avatar, Badge, Card } from "antd";

const WithBadge = () => {
  return (
    <Card className="gx-card" title="با مدال">
      <span className="gx-ml-4">
        <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
      </span>
      <span>
        <Badge dot><Avatar shape="square" icon="user" /></Badge>
      </span>
    </Card>
  );
};

export default WithBadge;
