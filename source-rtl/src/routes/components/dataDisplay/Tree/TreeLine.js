import React from "react";
import { Card, Tree } from "antd";

const TreeNode = Tree.TreeNode;

class TreeLine extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  render() {
    return (
      <Card title="خط درخت" className="gx-card">
        <Tree
          showLine
          defaultExpandedKeys={['0-0-0']}
          onSelect={this.onSelect}
        >
          <TreeNode title="پدر 1" key="0-0">
            <TreeNode title="پدر 1-0" key="0-0-0">
              <TreeNode title="چپ" key="0-0-0-0" />
              <TreeNode title="چپ" key="0-0-0-1" />
              <TreeNode title="چپ" key="0-0-0-2" />
            </TreeNode>
            <TreeNode title="پدر 1-1" key="0-0-1">
              <TreeNode title="چپ" key="0-0-1-0" />
            </TreeNode>
            <TreeNode title="پدر 1-2" key="0-0-2">
              <TreeNode title="چپ" key="0-0-2-0" />
              <TreeNode title="چپ" key="0-0-2-1" />
            </TreeNode>
          </TreeNode>
        </Tree>
      </Card>
    );
  }
}

export default TreeLine;
