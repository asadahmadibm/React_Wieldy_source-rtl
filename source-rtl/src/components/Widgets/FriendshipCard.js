import React from "react";
import {Col, Row} from 'antd';

import Widget from "components/Widget/index";

function FriendshipCard() {

  return (
    <Widget styleName="gx-p-lg-1">
      <Row>
        <Col xl={9} lg={10} md={10} sm={10} xs={24}>
          <img className="gx-rounded-lg gx-w-100" alt="..." src='https://via.placeholder.com/392x470'/>
        </Col>
        <Col xl={15} lg={14} md={14} sm={14} xs={24}>
          <div className="gx-fnd-content">
            <p className="gx-text-grey">تجربه در فضای باز</p>
            <h2 className="gx-text-uppercase gx-text-black gx-font-weight-bold gx-fnd-title"> دوستی با امواج زیاد</h2>
            <p>
            این آخر هفته با خانواده در ساحل عالی بود.
            </p>
            <ul className="gx-fnd-gallery-list">
              <li><img alt="..." src='https://via.placeholder.com/70x70'
                       className="gx-rounded-lg gx-img-fluid"/></li>
              <li><img alt="..." src='https://via.placeholder.com/70x70'
                       className="gx-rounded-lg gx-img-fluid"/></li>
              <li><img alt="..." src='https://via.placeholder.com/70x70'
                       className="gx-rounded-lg gx-img-fluid"/></li>
            </ul>
          </div>
        </Col>
      </Row>
    </Widget>
  );
}

export default FriendshipCard;
