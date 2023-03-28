import React from "react";
import { Button, Card, Popover } from "antd";


class Control extends React.Component {
  state = {
    visible: false,
  };
  hide = () => {
    this.setState({
      visible: false,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({ visible });
  };

  render() {
    return (
      <Card className="gx-card" title="کنترل">
        <Popover
          content={<span className="gx-link" onClick={this.hide}>بستن</span>}
          title="عنوان"
          trigger="click"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
        >
          <Button type="primary">مرا کلیک کن</Button>
        </Popover>
      </Card>
    );
  }
}


export default Control;
