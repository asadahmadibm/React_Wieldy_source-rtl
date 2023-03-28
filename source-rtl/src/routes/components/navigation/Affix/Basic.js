import React from "react";
import {Affix, Button, Card} from "antd";

const Basic = () => {
  return (
    <Card className="gx-card" title="پایه">
      <Affix>
        <Button type="primary">قسمت بالا</Button>
      </Affix>
      <br/>
      <Affix offsetBottom={0}>
        <Button type="primary">قسمت انتهایی</Button>
      </Affix>
    </Card>
  );
};

export default Basic;
