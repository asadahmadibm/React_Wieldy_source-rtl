import React from "react";
import { Affix, Button, Card } from "antd";

const Callback = () => {
  return (
    <Card className="gx-card" title="ثابت در بالا">
      <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button>120 پیکسل برای قرار دادن بالا</Button>
      </Affix>
    </Card>
  );
};

export default Callback;
