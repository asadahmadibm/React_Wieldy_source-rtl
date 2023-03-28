import React from "react";
import { Button, Card, message, Popconfirm } from "antd";

const text = 'Are you sure delete this task?';

const Placement = () => {
  function confirm() {
    message.info('Click on Yes.');
  }

  return (
    <Card title="تعیین سطح" className="gx-card">
      <div className="gx-overflow-auto">
        <div style={{ marginRight: 70, whiteSpace: 'nowrap' }}>
          <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="بله" cancelText="خیر">
            <Button>بالا چپ</Button>
          </Popconfirm>
          <Popconfirm placement="top" title={text} onConfirm={confirm} okText="بله" cancelText="خیر">
            <Button>بالا </Button>
          </Popconfirm>
          <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="بله" cancelText="خیر">
            <Button>بالا راست</Button>
          </Popconfirm>
        </div>
        <div style={{ width: 70, float: 'right' }}>
          <Popconfirm placement="leftTop" title={text} onConfirm={confirm} okText="بله" cancelText="خیر">
            <Button>چپ بالا</Button>
          </Popconfirm>
          <Popconfirm placement="left" title={text} onConfirm={confirm} okText="بله" cancelText="خیر">
            <Button>چپ </Button>
          </Popconfirm>
          <Popconfirm placement="leftBottom" title={text} onConfirm={confirm} okText="بله" cancelText="خیر">
            <Button>چپ پایین</Button>
          </Popconfirm>
        </div>
        <div style={{ width: 70, marginRight: 304 }}>
          <Popconfirm placement="rightTop" title={text} onConfirm={confirm} okText="بله" cancelText="خیر">
            <Button>راست بالا</Button>
          </Popconfirm>
          <Popconfirm placement="right" title={text} onConfirm={confirm} okText="بله" cancelText="خیر">
            <Button>راست </Button>
          </Popconfirm>
          <Popconfirm placement="rightBottom" title={text} onConfirm={confirm} okText="بله" cancelText="خیر">
            <Button>راست پایین</Button>
          </Popconfirm>
        </div>
        <div style={{ marginRight: 70, clear: 'both', whiteSpace: 'nowrap' }}>
          <Popconfirm placement="bottomLeft" title={text} onConfirm={confirm} okText="بله" cancelText="خیر">
            <Button> پایین چپ</Button>
          </Popconfirm>
          <Popconfirm placement="bottom" title={text} onConfirm={confirm} okText="بله" cancelText="خیر">
            <Button> پایین </Button>
          </Popconfirm>
          <Popconfirm placement="bottomRight" title={text} onConfirm={confirm} okText="بله" cancelText="خیر">
            <Button> پایین راست</Button>
          </Popconfirm>
        </div>
      </div>
    </Card>
  );
};

export default Placement;
