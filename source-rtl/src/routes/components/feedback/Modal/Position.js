import React from "react";
import {Button, Card, Modal} from "antd";

class Position extends React.Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
  };

  setModal1Visible(modal1Visible) {
    this.setState({modal1Visible});
  }

  setModal2Visible(modal2Visible) {
    this.setState({modal2Visible});
  }

  render() {
    return (
      <Card title="موقعیت" className="gx-card">
        <Button type="primary" onClick={() => this.setModal1Visible(true)}>گفتگوی معین را در 20px به بالا نمایش دهید</Button>
        <Modal
          title="20px to Top"
          style={{top: 20}}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >
          <p>برخی مطالب ...</p>
          <p>برخی مطالب ...</p>
          <p>برخی مطالب ...</p>
        </Modal>
        <Button type="primary" onClick={() => this.setModal2Visible(true)}>گفتگوی معین عمودی محور</Button>
        <Modal
          title="گفتگوی معین عمودی محور"
          wrapClassName="vertical-center-modal"
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          <p>برخی مطالب ...</p>
          <p>برخی مطالب ...</p>
          <p>برخی مطالب ...</p>
        </Modal>
      </Card>
    );
  }
}

export default Position;
