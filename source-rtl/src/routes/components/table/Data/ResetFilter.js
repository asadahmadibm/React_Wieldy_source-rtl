import React from "react";
import {Button, Card, Table} from "antd";

const data = [{
  key: '1',
  name: 'نیما زمانی',
  age: 32,
  address: 'تهران خیابان انقلاب',
}, {
  key: '2',
  name: 'محسن امانی',
  age: 42,
  address: 'اصفهان خیابان امام',
}, {
  key: '3',
  name: 'زهره احمدی',
  age: 32,
  address: 'تبریز میدان امام',
}, {
  key: '4',
  name: 'کمیل خرسندی',
  age: 32,
  address: 'مشهد خیابان وکیل آباد',
}];

class ResetFilter extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };
  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  clearFilters = () => {
    this.setState({filteredInfo: null});
  };
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };
  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };

  render() {
    let {sortedInfo, filteredInfo} = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: 'نام',
      dataIndex: 'name',
      key: 'name',
      filters: [
        {text: 'رضا', value: 'Joe'},
        {text: 'علی', value: 'Jim'},
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
    }, {
      title: 'سن',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
    }, {
      title: 'آدرس',
      dataIndex: 'address',
      key: 'address',
      filters: [
        {text: 'لندن', value: 'London'},
        {text: 'نیویورک', value: 'New York'},
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
    }];
    return (
      <Card title="بازنشانی فیلترها">
        <div className="table-operations">
          <Button onClick={this.setAgeSort}>مرتب سازی براساس سن</Button>
          <Button onClick={this.clearFilters}>فیلترها را پاک کنید</Button>
          <Button onClick={this.clearAll}>فیلترها و مرتب کننده ها را پاک کنید</Button>
        </div>
        <Table className="gx-table-responsive" columns={columns} dataSource={data} onChange={this.handleChange}/>
      </Card>
    );
  }
}

export default ResetFilter;
