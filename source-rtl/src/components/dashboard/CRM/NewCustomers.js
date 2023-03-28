import React from "react";

import Metrics from "components/Metrics";
import { Avatar } from "antd";

import avatar1 from '../../../ad-images/avatar-1.png';
import avatar2 from '../../../ad-images/avatar-2.png';
import avatar3 from '../../../ad-images/avatar-3.png';
import avatar4 from '../../../ad-images/avatar-4.png';

const userImageList = [
  {
    id: 1,
    image: avatar1,
  },
  {
    id: 2,
    image: avatar2,
  },
  {
    id: 3,
    image: avatar3,

  },
  {
    id: 4,
    image: avatar4,
    name: 'سارا زمانی',
    rating: '5.0',
    deals: '27 درصد تخفیف'
  },
]

const NewCustomers = () => {
  return (
    <Metrics title="مشتریان جدید">
      <div className="gx-customers">
        <ul className="gx-list-inline gx-customers-list gx-mb-0">
          {userImageList.map((user, index) =>
            <li className="gx-mb-2" key={index}>
              <Avatar src={user.image} />
            </li>
          )
          }
        </ul>
      </div>
    </Metrics>
  );
}


export default NewCustomers;
