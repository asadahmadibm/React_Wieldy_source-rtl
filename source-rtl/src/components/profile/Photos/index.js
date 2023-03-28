import React from "react";
import Widget from "components/Widget/index";

const Photos = ({ photoList }) => {

  return (
    <Widget title="عکس ها" styleName="gx-card-profile-sm">
      <div className="gx-pt-2">
        <ul className="gx-gallery-list">
          {photoList.map((photo, index) =>
            <li key={index}>
              <img alt="..." src={photo.image} />
            </li>
          )}
        </ul>
        <span className="gx-text-primary gx-fs-md gx-pointer gx-d-block">به گالری بروید <i
          className={`icon icon-long-arrow-left gx-fs-xxl gx-mr-2 gx-d-inline-flex gx-vertical-align-middle`} /></span>
      </div>
    </Widget>
  )
}
export default Photos
