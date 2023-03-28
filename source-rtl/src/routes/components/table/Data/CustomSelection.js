import React from "react";
import {Card, Table} from "antd";

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
    name: `نیما زمانی ${i}`,
    age: 32,
    address: `لندن ، پارک لین ${i}`,
  });
}

class CustomSelection extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the CRM column
  };
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({selectedRowKeys});
  };

  render() {
    const {selectedRowKeys} = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [{
        key: 'all-data',
        text: 'همه داده ها را انتخاب کنید',
        onSelect: () => {
          this.setState({
            selectedRowKeys: [...Array(46).keys()], // 0...45
          });
        },
      }, {
        key: 'odd',
        text: 'سطر فرد را انتخاب کنید',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          this.setState({selectedRowKeys: newSelectedRowKeys});
        },
      }, {
        key: 'even',
        text: 'سطر زوج را انتخاب کنید',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          this.setState({selectedRowKeys: newSelectedRowKeys});
        },
      }],
      onSelection: this.onSelection,
    };
    return (
      <Card title="سلکشن سفارشی">
        <Table className="gx-table-responsive" rowSelection={rowSelection} columns={columns} dataSource={data}/>
      </Card>
    );
  }
}

export default CustomSelection;
