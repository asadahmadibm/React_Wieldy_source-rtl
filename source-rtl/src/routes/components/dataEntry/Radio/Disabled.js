import React from "react";
import { Button, Card, Radio } from "antd";


class Disabled extends React.Component {
  state = {
    disabled: true,
  };
  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <Card className="gx-card" title="غیرفعال">
        <div className="gx-mb-1"><Radio defaultChecked={false} disabled={this.state.disabled}>غیر فعال</Radio></div>
        <div className="gx-mb-1"><Radio defaultChecked disabled={this.state.disabled}>غیر فعال</Radio></div>
        <div className="gx-mt-3">
          <Button type="primary" onClick={this.toggleDisabled}>
            تغییر کاربری غیرفعال است
          </Button>
        </div>
      </Card>
    );
  }
}

export default Disabled;
