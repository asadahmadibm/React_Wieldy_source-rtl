import React from "react";

import Aux from "util/Auxiliary.js"
import WidgetHeader from "components/WidgetHeader/index";

import avatar1 from '../../../ad-images/avatar-1.png';
import avatar2 from '../../../ad-images/avatar-2.png';
import avatar3 from '../../../ad-images/avatar-3.png';
import avatar4 from '../../../ad-images/avatar-4.png';
import avatar5 from '../../../ad-images/avatar-5.png';


const userImageList = [
  {
    id: 1,
    image: avatar1,
    name: 'نیاز محمدی',
    rating: '5.0',
    deals: '27 تخفیف'
  },
  {
    id: 2,
    image: avatar2,
    name: 'البرز کیانی',
    rating: '4.5',
    deals: '27 تخفیف'
  },
  {
    id: 3,
    image: avatar3,
    name: 'کوروش سعیدی',
    rating: '5.0',
    deals: '27 تخفیف'
  },
  {
    id: 4,
    image: avatar4,
    name: 'البرز کیانی',
    rating: '5.0',
    deals: '27 تخفیف'
  },
  {
    id: 5,
    image: avatar5,
    name: 'نیاز محمدی',
    rating: '5.0',
    deals: '27 تخفیف'
  },
]


const UserImages = () => {
  return (
    <Aux>
      <WidgetHeader styleName="gx-flex-row" title="نمایندگان محبوب" extra={<span>به لیست نمایندگان بروید <i
        className="icon icon-long-arrow-left gx-fs-xxl gx-mr-2 gx-d-inline-flex gx-vertical-align-middle" /></span>} />

      <ul className="gx-agents-list">
        {userImageList.map((user, index) =>
          <li key={index}>
            <div className="gx-profileon gx-pointer">
              <div className="gx-profileon-thumb"><img alt="..." src={user.image} className="gx-rounded-lg" /></div>
              <div className="gx-profileon-content">
                <h5 className="gx-mb-1 gx-text-truncate">{user.name}</h5>
                <div className="gx-mb-0 gx-fs-sm gx-text-truncate">
                  <i className={`icon icon-star gx-text-orange gx-pl-1 float-right`}></i>&nbsp;
                  {user.rating}&nbsp;
                  <span className="gx-px-sm-1">|</span>&nbsp;{user.deals}
                </div>
              </div>
            </div>
          </li>
        )
        }
      </ul>
      <span className="gx-text-primary gx-fs-md gx-pointer gx-mb-4 gx-d-block gx-d-sm-none">به لیست نمایندگان بروید <i
        className="icon icon-long-arrow-left gx-fs-xxl gx-ml-2 gx-ml-2 gx-d-inline-flex gx-vertical-align-middle" /></span>

    </Aux>
  );
};

export default UserImages;
