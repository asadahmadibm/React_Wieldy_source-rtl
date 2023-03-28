import React from "react";
import { Card, Switch } from "antd";

const SwitchSize = () => {
  return (
    <Card className="gx-card" title="سایز سوئیچ">
      <div className="gx-mb-3"><Switch defaultChecked /></div>
      <div className="gx-mb-0"><Switch size="small" defaultChecked /></div>
    </Card>
  );
};

export default SwitchSize;
