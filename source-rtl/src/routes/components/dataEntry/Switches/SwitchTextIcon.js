import React from "react";
import { Card, Icon, Switch } from "antd";

const SwitchTextIcon = () => {
  return (
    <Card className="gx-card" title="سوئیچ با متن و آیکون">
      <div className="gx-mb-3"><Switch checkedChildren="باز" unCheckedChildren="بسته" defaultChecked /></div>
      <div className="gx-mb-3"><Switch checkedChildren="1" unCheckedChildren="0" /></div>
      <div className="gx-mb-0"><Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />}
        defaultChecked /></div>
    </Card>
  );
};

export default SwitchTextIcon;
