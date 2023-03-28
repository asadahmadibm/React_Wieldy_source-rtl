import React from "react";
import { Button, Card, Modal } from "antd";

class CutomizeFooter extends React.Component {
  state = {
    loading: false,
    visible: false,
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <Card title="فوتر سفارشی" className="gx-card">
        <Button type="primary" onClick={this.showModal}>
          باز کردن
        </Button>
        <Modal
          visible={visible}
          title="عنوان"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>بازگشت</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              ارسال
            </Button>,
          ]}
        >
          <p>برخی مطالب ...</p>
          <p>برخی مطالب ...</p>
          <p>برخی مطالب ...</p>
          <p>برخی مطالب ...</p>
          <p>برخی مطالب ...</p>
        </Modal>
      </Card>
    );
  }
}

export default CutomizeFooter;
