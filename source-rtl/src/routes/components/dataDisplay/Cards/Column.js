import React from "react";
import { Card, Col, Row } from "antd";

const Column = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title="عنوان کارت" bordered={false}>
          <p className="text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
          <p className="text-justify">
            از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title="عنوان کارت" bordered={false}>
          <p className="text-justify">کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده </p>
          <p className="text-justify">
            شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
          </p>
        </Card>
      </Col>
    </Row>
  );
};

export default Column;
