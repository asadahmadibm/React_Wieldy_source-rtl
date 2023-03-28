import React from "react";
import {Card, Table} from "antd";

const columns = [{
  title: 'نام',
  dataIndex: 'name',
  width: 150,
}, {
  title: 'سن',
  dataIndex: 'age',
  width: 150,
}, {
  title: 'آدرس',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `نیما زمانی ${i}`,
    age: 32,
    address: `ایران پارک آب و آتش ${i}`,
  });
}

const FixHeader = () => {
  return (
    <Card title="هدر فیکس">
      <Table className="gx-table-responsive" columns={columns} dataSource={data} pagination={{pageSize: 50}}
             scroll={{y: 240}}/>
    </Card>
  );
};

export default FixHeader;
