import React from "react";
import { Card, Tree } from "antd";

const TreeNode = Tree.TreeNode;

class LoadData extends React.Component {
  state = {
    treeData: [
      { title: 'گسترش برای بارگیری', key: '0' },
      { title: 'گسترش برای بارگیری', key: '1' },
      { title: 'گره درخت', key: '2', isLeaf: true },
    ],
  };
  onLoadData = (treeNode) => {
    return new Promise((resolve) => {
      if (treeNode.props.children) {
        resolve();
        return;
      }
      setTimeout(() => {
        treeNode.props.dataRef.children = [
          { title: 'گره کودک', key: `${treeNode.props.eventKey}-0` },
          { title: 'گره کودک', key: `${treeNode.props.eventKey}-1` },
        ];
        this.setState({
          treeData: [...this.state.treeData],
        });
        resolve();
      }, 1000);
    });
  };
  renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} dataRef={item} />;
    });
  };

  render() {
    return (
      <Card title="بارگیری داده ها" className="gx-card">
        <Tree loadData={this.onLoadData}>
          {this.renderTreeNodes(this.state.treeData)}
        </Tree>
      </Card>
    );
  }
}


export default LoadData;
