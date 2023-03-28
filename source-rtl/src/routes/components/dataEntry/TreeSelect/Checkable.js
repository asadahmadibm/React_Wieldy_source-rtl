import React from "react";
import { Card, TreeSelect } from "antd";

const SHOW_PARENT = TreeSelect.SHOW_PARENT;


const treeData = [{
  title: 'گره 1',
  value: '0-0',
  key: '0-0',
  children: [{
    title: 'فرزند گره',
    value: '0-0-0',
    key: '0-0-0',
  }],
}, {
  title: 'گره 2',
  value: '0-1',
  key: '0-1',
  children: [{
    title: 'فرزند گره 3',
    value: '0-1-0',
    key: '0-1-0',
  }, {
    title: 'فرزند گره 4',
    value: '0-1-1',
    key: '0-1-1',
  }, {
    title: 'فرزند گره 5',
    value: '0-1-2',
    key: '0-1-2',
  }],
}];

class Checkable extends React.Component {
  state = {
    value: ['0-0-0'],
  };
  onChange = (value) => {
    this.setState({ value });
  };

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'لطفا انتخاب کنید',
      style: {
        width: 300,
      },
    };
    return <Card className="gx-card" title="قابل بررسی است"><TreeSelect
      className="gx-w-100" {...tProps} /></Card>;
  }
}

export default Checkable;
