import React from "react";

import Widget from "components/Widget/index";
import avatar3 from '../../ad-images/avatar-3.png';

function UserCard() {

  return (
    <Widget styleName="gx-card-full gx-dot-arrow-hover">
      <div className="gx-user-wid-row">
        <div className="gx-user-wid gx-ml-3">
          <img alt="..." src={avatar3} className="gx-object-cover"/>
        </div>
        <div className="gx-user-wid-body gx-py-3 gx-pl-3">
          <div className="ant-row-flex">
            <h2 className="h4 gx-mr-1 gx-mb-1">سارا احمدی</h2>
          </div>
          <p className="gx-mb-1 gx-text-grey gx-fs-sm">ایمیل مخترع<br/> @example</p>
          <div className="gx-dot-arrow">
            <div className="gx-bg-primary gx-hover-arrow">
              <i className="icon icon-long-arrow-left gx-text-white"/>
            </div>
            <div className="gx-dot">
              <i className="icon icon-ellipse-v gx-text-primary"/>
            </div>
          </div>
        </div>
      </div>
    </Widget>
  );
}

export default UserCard;
