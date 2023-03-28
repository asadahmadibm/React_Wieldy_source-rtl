import React from "react";
import { Button, Card, InputNumber } from "antd";


class Disabled extends React.Component {
  state = {
    disabled: true,
  };
  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <Card className="gx-card" title="غیرفعال">
        <InputNumber min={1} max={10} disabled={this.state.disabled} defaultValue={3} />
        <div style={{ marginTop: 20 }}>
          <Button onClick={this.toggle} type="primary">تغییر کاربری غیرفعال است</Button>
        </div>
      </Card>
    );
  }
}

export default Disabled;
