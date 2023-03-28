import React from "react";
import {Button, Card, Table} from "antd";

const columns = [{
  title: 'نام',
  dataIndex: 'name',
}, {
  title: 'سن',
  dataIndex: 'age',
}, {
  title: 'آدرس',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `احمد رضایی ${i}`,
    age: 32,
    address: `ایران ، پارک آب و آتش ${i}`,
  });
}

class Operation extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the CRM column
    loading: false,
  };
  start = () => {
    this.setState({loading: true});
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({selectedRowKeys});
  };

  render() {
    const {loading, selectedRowKeys} = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <Card title="عملگر">
        <div className="gx-mb-3">
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            بارگیری مجدد
          </Button>
          <span style={{marginLeft: 8}}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table className="gx-table-responsive" rowSelection={rowSelection} columns={columns} dataSource={data}/>
      </Card>
    );
  }
}


export default Operation;
