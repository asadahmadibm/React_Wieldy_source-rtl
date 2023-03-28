import React from "react";
import { Card, message, Popconfirm, Switch } from "antd";

class ConditionalTrigger extends React.Component {
  state = {
    visible: false,
    condition: true, // Whether meet the condition, if not show popconfirm.
  };
  changeCondition = (value) => {
    this.setState({ condition: value });
  };
  confirm = () => {
    this.setState({ visible: false });
    message.success('گام بعدی.');
  };
  cancel = () => {
    this.setState({ visible: false });
    message.error('روی لغو کلیک کنید');
  };
  handleVisibleChange = (visible) => {
    if (!visible) {
      this.setState({ visible });
      return;
    }
    // Determining condition before show the popconfirm.
    console.log(this.state.condition);
    if (this.state.condition) {
      this.confirm(); // next step
    } else {
      this.setState({ visible }); // show the popconfirm
    }
  };

  render() {
    return (
      <Card title="شرط مشروط" className="gx-card">
        <Popconfirm
          title="مطمئن هستید این کار را حذف می کنید؟"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
          onConfirm={this.confirm}
          onCancel={this.cancel}
          okText="بله"
          cancelText="خیر"
        >
          <a className="gx-mb-3 gx-d-block" href="/">یک کار را حذف کنید</a>
        </Popconfirm>

        آیا به طور مستقیم اجرا شود <Switch defaultChecked onChange={this.changeCondition} />
      </Card>
    );
  }
}

export default ConditionalTrigger;
