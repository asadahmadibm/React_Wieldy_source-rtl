import React from "react";
import { Alert, Card, Spin, Switch } from "antd";

class Embedded extends React.Component {
  state = { loading: false };
  toggle = (value) => {
    this.setState({ loading: value });
  };

  render() {
    return (
      <Card title="جاسازی شده" className="gx-card">
        <Spin spinning={this.state.loading}>
          <Alert
            message="عنوان پیام هشدار"
            description="جزئیات بیشتر در مورد زمینه این هشدار."
            type="info"
          />
        </Spin>
        <div className="gx-mt-3">
          حالت بارگیری：<Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </Card>
    );
  }
}

export default Embedded;
