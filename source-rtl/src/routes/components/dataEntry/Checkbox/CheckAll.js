import React, {Component} from "react";
import {Card, Checkbox} from "antd";

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['سیب', 'گلابی', 'پرتغال'];
const defaultCheckedList = ['Apple', 'Orange'];


class CheckAll extends Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };
  onChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }
  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }

  render() {
    return (
      <Card className="gx-card" title="بررسی همه">
        <div className="gx-border-bottom gx-pb-3 gx-mb-3">
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
           بررسی همه
          </Checkbox>
        </div>
        <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange}/>
      </Card>
    );
  }
}


export default CheckAll;







