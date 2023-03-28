import React from "react";
import { Avatar, Card, List } from "antd";

const data = [
  {
    title: 'عنوان طراحی 1',
  },
  {
    title: 'عنوان طراحی 2',
  },
  {
    title: 'عنوان طراحی 3',
  },
  {
    title: 'عنوان طراحی 4',
  },
];

const BasicList = () => {
  return (
    <Card className="gx-card" title="لیست پایه">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default BasicList;
