import React, { Component } from "react";
import { Button, Card, Checkbox } from "antd";

class ControlledCheckbox extends Component {
  state = {
    checked: true,
    disabled: false,
  };
  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  }
  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled });
  }
  onChange = (e) => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  }

  render() {
    const label = `${this.state.checked ? 'بررسی شده' : 'بررسی نشده'}-${this.state.disabled ? 'غیرفعال' : 'فعال'}`;
    return (
      <Card className="gx-card gx-card" title="کادر کنترل شده">
        <p style={{ marginBottom: '20px' }}>
          <Checkbox
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
            {label}
          </Checkbox>
        </p>
        <p>
          <Button
            type="primary"
            size="small"
            onClick={this.toggleChecked}
          >
            {!this.state.checked ? 'بررسی شده' : 'بررسی نشده'}
          </Button>
          <Button
            style={{ marginLeft: '10px' }}
            type="primary"
            size="small"
            onClick={this.toggleDisable}
          >
            {!this.state.disabled ? 'غیرفعال' : 'فعال'}
          </Button>
        </p>
      </Card>
    );
  }

}


export default ControlledCheckbox;
