import React from "react";
import { Button, Card, Popover } from "antd";

const text = <span>عنوان</span>;
const content = (
  <div>
    <p>محتوا</p>
    <p>محتوا</p>
  </div>
);

const buttonWidth = 70;

const Placement = () => {
  return (
    <Card className="gx-card" title="تعیین سطح">
      <div className="gx-overflow-auto">
        <div style={{ marginRight: buttonWidth, whiteSpace: 'nowrap' }}>
          <Popover placement="topLeft" title={text} content={content} trigger="click">
            <Button>بالا چپ</Button>
          </Popover>
          <Popover placement="top" title={text} content={content} trigger="click">
            <Button>بالا </Button>
          </Popover>
          <Popover placement="topRight" title={text} content={content} trigger="click">
            <Button>بالا راست</Button>
          </Popover>
        </div>
        <div style={{ width: buttonWidth, float: 'right' }}>
          <Popover placement="leftTop" title={text} content={content} trigger="click">
            <Button>چپ بالا</Button>
          </Popover>
          <Popover placement="left" title={text} content={content} trigger="click">
            <Button>چپ </Button>
          </Popover>
          <Popover placement="leftBottom" title={text} content={content} trigger="click">
            <Button>چپ پایین</Button>
          </Popover>
        </div>
        <div style={{ width: buttonWidth, marginRight: (buttonWidth * 4) + 24 }}>
          <Popover placement="rightTop" title={text} content={content} trigger="click">
            <Button>راست بالا</Button>
          </Popover>
          <Popover placement="right" title={text} content={content} trigger="click">
            <Button>راست </Button>
          </Popover>
          <Popover placement="rightBottom" title={text} content={content} trigger="click">
            <Button>راست پایین</Button>
          </Popover>
        </div>
        <div style={{ marginRight: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
          <Popover placement="bottomLeft" title={text} content={content} trigger="click">
            <Button> پایین چپ</Button>
          </Popover>
          <Popover placement="bottom" title={text} content={content} trigger="click">
            <Button> پایین </Button>
          </Popover>
          <Popover placement="bottomRight" title={text} content={content} trigger="click">
            <Button> پایین راست</Button>
          </Popover>
        </div>
      </div>
    </Card>
  );
};

export default Placement;
