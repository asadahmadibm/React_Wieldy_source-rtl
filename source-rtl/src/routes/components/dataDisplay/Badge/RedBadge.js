import React from "react";
import {Badge, Card, Icon} from "antd";

const RedBadge = () => {
  return (
    <Card className="gx-card" title="نشان قرمز">
      <Badge dot>
        <Icon type="notification"/>
      </Badge>
      <Badge count={0} dot>
        <Icon type="notification"/>
      </Badge>
      <Badge dot>
        <a href="/">پیوند چیزی</a>
      </Badge>
    </Card>
  );
};

export default RedBadge;
