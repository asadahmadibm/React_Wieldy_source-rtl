import React from "react";
import { Button, Card, Icon } from "antd";

const ButtonGroup = Button.Group;

const ButtonGroups = () => {
  return (
    <Card className="gx-card" title="دکمه های گروهی">
      <h4>پایه</h4>
      <ButtonGroup>
        <Button>لغو</Button>
        <Button>خوب</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button disabled>چپ</Button>
        <Button disabled>وسط</Button>
        <Button disabled>راست</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>چپ</Button>
        <Button>وسط</Button>
        <Button>راست</Button>
      </ButtonGroup>

      <h4>با نماد</h4>
      <ButtonGroup>
        <Button type="primary">
          <Icon type="right" />برگرد
        </Button>
        <Button type="primary">
          برو جلو<Icon type="left" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" icon="cloud" />
        <Button type="primary" icon="cloud-download" />
      </ButtonGroup>
    </Card>
  );
};

export default ButtonGroups;
