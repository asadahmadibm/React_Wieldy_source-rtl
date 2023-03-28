import React from "react";
import { Card, TreeSelect } from "antd";

const treeData = [{
  title: 'گره 1',
  value: '0-0',
  key: '0-0',
  children: [{
    title: 'فرزند گره 1',
    value: '0-0-1',
    key: '0-0-1',
  }, {
    title: 'فرزند گره 2',
    value: '0-0-2',
    key: '0-0-2',
  }],
}, {
  title: 'گره 2',
  value: '0-1',
  key: '0-1',
}];

class GenerateTreeData extends React.Component {
  state = {
    value: undefined,
  };
  onChange = (value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Card className="gx-card" title="ایجاد TreeData">
        <TreeSelect className="gx-w-100"
          value={this.state.value}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          treeData={treeData}
          placeholder="لطفا انتخاب کنید"
          treeDefaultExpandAll
          onChange={this.onChange}
        />
      </Card>
    );
  }
}

export default GenerateTreeData;
