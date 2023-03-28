import React from "react";
import { Card, Col, Row } from "antd";

const tabList = [{
  key: 'tab1',
  tab: 'تب 1',
}, {
  key: 'tab2',
  tab: 'تب 2',
}];

const contentList = {
  tab1: <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>,
  tab2: <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
    </p>,
};

const tabListNoTitle = [{
  key: 'article',
  tab: 'مقاله',
}, {
  key: 'app',
  tab: 'اپلیکیشن',
}, {
  key: 'project',
  tab: 'پروژه',
}];

const contentListNoTitle = {
  article: <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>,
  app: <p>
    کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
    </p>,
  project: <p>
    در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد
    </p>,
};

class WithTabs extends React.Component {
  state = {
    key: 'tab1',
    noTitleKey: 'article',
  };
  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card title="عنوان کارت "
            extra={<span className="gx-link">بیشتر</span>}
            tabList={tabList}
            onTabChange={(key) => {
              this.onTabChange(key, 'key');
            }}
          >
            {contentList[this.state.key]}
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card
            tabList={tabListNoTitle}
            onTabChange={(key) => {
              this.onTabChange(key, 'noTitleKey');
            }}
          >
            {contentListNoTitle[this.state.noTitleKey]}
          </Card>
        </Col>
      </Row>
    );
  }
}


export default WithTabs;
