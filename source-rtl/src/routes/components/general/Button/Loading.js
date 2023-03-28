import React, { Component } from "react";
import { Button, Card } from "antd";

class Loading extends Component {
  state = {
    loading: false,
    iconLoading: false,
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    return (
      <Card className="gx-card" title="بارگذاری">
        <Button type="primary" loading>
          بارگذاری
        </Button>
        <Button type="primary" size="small" loading>
          بارگذاری
        </Button>
        <br />
        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          مرا کلیک کن!
        </Button>
        <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
          مرا کلیک کن!
        </Button>
        <br />
        <Button shape="circle" loading />
        <Button type="primary" shape="circle" loading />
      </Card>
    );
  }
}

export default Loading;
