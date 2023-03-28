import React from "react";
import { Button, Card, Tooltip } from "antd";

const text = <span>متن سریع</span>;
const buttonWidth = 70;

const Placement = () => {
  return (
    <Card title="پایه" className="gx-card">
      <div className="gx-overflow-auto">
        <div style={{ marginRight: buttonWidth, whiteSpace: 'nowrap' }}>
          <Tooltip placement="topLeft" title={text}>
            <Button>بالا چپ</Button>
          </Tooltip>
          <Tooltip placement="top" title={text}>
            <Button>بالا</Button>
          </Tooltip>
          <Tooltip placement="topRight" title={text}>
            <Button>بالا راست</Button>
          </Tooltip>
        </div>
        <div style={{ width: buttonWidth, float: 'right' }}>
          <Tooltip placement="leftTop" title={text}>
            <Button>چپ بالا</Button>
          </Tooltip>
          <Tooltip placement="left" title={text}>
            <Button>چپ</Button>
          </Tooltip>
          <Tooltip placement="leftBottom" title={text}>
            <Button>چپ پایین</Button>
          </Tooltip>
        </div>
        <div style={{ width: buttonWidth, marginRight: (buttonWidth * 4) + 24 }}>
          <Tooltip placement="rightTop" title={text}>
            <Button>راست بالا</Button>
          </Tooltip>
          <Tooltip placement="right" title={text}>
            <Button>راست</Button>
          </Tooltip>
          <Tooltip placement="rightBottom" title={text}>
            <Button>راست پایین</Button>
          </Tooltip>
        </div>
        <div style={{ marginRight: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
          <Tooltip placement="bottomLeft" title={text}>
            <Button>پایین چپ</Button>
          </Tooltip>
          <Tooltip placement="bottom" title={text}>
            <Button>پایین</Button>
          </Tooltip>
          <Tooltip placement="bottomRight" title={text}>
            <Button>پایین راست</Button>
          </Tooltip>
        </div>
      </div>
    </Card>
  );
};

export default Placement;
