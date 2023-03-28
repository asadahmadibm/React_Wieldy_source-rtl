import React from "react";
import { Button, Card, Modal } from "antd";

class Asynchronously extends React.Component {
  state = {
    ModalText: 'محتوای مودال ',
    visible: false,
    confirmLoading: false,
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({
      ModalText: 'مودال بعد از دو ثانیه بسته می شود',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <Card title="به طور همزمان" className="gx-card">
        <Button type="primary" onClick={this.showModal}>باز کردن</Button>
        <Modal title="عنوان"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </Card>
    );
  }
}

export default Asynchronously;
