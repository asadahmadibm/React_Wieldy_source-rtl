import React from "react";
import { Avatar, Card, Icon, List } from "antd";

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'http://ant.design' +
      '' +
      '',
    title: `قسمت طراحی ${i}`,
    avatar: 'https://via.placeholder.com/290x193',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    content: 'چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  });
}

const pagination = {
  pageSize: 10,
  current: 1,
  total: listData.length,
  onChange: (() => {
  }),
};

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginLeft: 8 }} />
    {text}
  </span>
);

const Vertical = () => {
  return (
    <Card className="gx-card" title="عمودی">
      <List
        itemLayout="vertical"
        size="large"
        pagination={pagination}
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />,
            <IconText type="message" text="2" />]}
            extra={<img className="gx-img-fluid" width={272} alt="logo"
              src={item.avatar} />}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Vertical;
