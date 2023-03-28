import React from "react";
import { Card, TreeSelect } from "antd";

const TreeNode = TreeSelect.TreeNode;


class MultipleSelection extends React.Component {
  state = {
    value: undefined,
  };
  onChange = (value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Card className="gx-card" title="انتخاب چندگانه">
        <TreeSelect className="gx-w-100"
          showSearch
          value={this.state.value}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="لطفا انتخاب کنید"
          allowClear
          multiple
          treeDefaultExpandAll
          onChange={this.onChange}
        >
          <TreeNode value="parent 1" title="پدر 1-0" key="0-1">
            <TreeNode value="parent 1-0" title="پدر 1-0" key="0-1-1">
              <TreeNode value="leaf1" title="برگ من" key="random" />
              <TreeNode value="leaf2" title="برگ شما" key="random1" />
            </TreeNode>
            <TreeNode value="parent 1-1" title="پدر 1-1" key="random2">
              <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
            </TreeNode>
          </TreeNode>
        </TreeSelect>
      </Card>
    );
  }
}

export default MultipleSelection;
