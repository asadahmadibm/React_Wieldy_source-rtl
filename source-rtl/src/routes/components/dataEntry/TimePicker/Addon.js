import React from "react";
import { Button, Card, TimePicker } from "antd";

class Addon extends React.Component {
  state = { open: false };

  handleOpenChange = (open) => {
    this.setState({ open });
  };

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <Card className="gx-card" title="اضافه کنید">
        <TimePicker
          open={this.state.open}
          onOpenChange={this.handleOpenChange}
          addon={() => (
            <Button size="small" type="primary" onClick={this.handleClose}>
              باشه
            </Button>
          )}
        />
      </Card>
    );
  }
}

export default Addon;
