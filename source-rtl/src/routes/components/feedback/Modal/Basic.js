import React from "react";
import { Button, Card, Modal } from "antd";

class Basic extends React.Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <Card title="پایه" className="gx-card">
        <Button type="primary" onClick={this.showModal}>باز کردن</Button>
        <Modal
          title="مودال پایه"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>برخی مطالب ...</p>
          <p>برخی مطالب ...</p>
          <p>برخی مطالب ...</p>
        </Modal>
      </Card>
    );
  }
}

export default Basic;
