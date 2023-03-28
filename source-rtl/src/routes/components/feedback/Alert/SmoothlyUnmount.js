import React from "react";
import { Alert, Card } from "antd";

class SmoothlyUnmount extends React.Component {
  state = {
    visiable: true,
  };
  handleClose = () => {
    this.setState({ visiable: false });
  };

  render() {
    return (
      <Card title="به آرامی Unmount کنید" className="gx-card">
        {
          this.state.visiable ? (
            <Alert
              message="متن پیام هشدار"
              type="success"
              closable
              afterClose={this.handleClose}
            />
          ) : null
        }
        <p>متن حفره در اینجا</p>
      </Card>
    );
  }
}

export default SmoothlyUnmount;
