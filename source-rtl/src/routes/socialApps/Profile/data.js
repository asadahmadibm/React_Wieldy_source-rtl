import React from "react";
import { Avatar } from "antd";
import avatar1 from '../../../ad-images/avatar-1.png';
import avatar2 from '../../../ad-images/avatar-2.png';
import avatar3 from '../../../ad-images/avatar-3.png';
import avatar4 from '../../../ad-images/avatar-4.png';
import avatar5 from '../../../ad-images/avatar-5.png';

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
    name: 'احمد زمانی',
    rating: '5.0',
    deals: '27 معامله'
  },
]

export const aboutList = [
  {
    id: 1,
    title: 'کار در',
    icon: 'company',
    userList: '',
    desc: ['شرکت ایده پرداز']
  },
  {
    id: 2,
    title: 'روز تولد',
    icon: 'birthday-new',
    userList: '',
    desc: ['25 مهر 1360']
  },
  {
    id: 3,
    title: 'رفت به',
    icon: 'graduation',
    userList: '',
    desc: ['دانشگاه شریف']
  },
  {
    id: 4,
    title: 'در لندن زندگی می کند',
    icon: 'home',
    userList: '',
    desc: ['از سوئیس']
  },
  {
    id: 5,
    title: '4 عضو خانواده',
    icon: 'family',
    userList: [<ul className="gx-list-inline gx-mb-0" key={1}>
      {userImageList.map((user, index) =>
        <li className="gx-mb-2" key={index}>
          <Avatar className="gx-size-30" src={user.image} />
        </li>
      )
      }
    </ul>],
    desc: ''
  },
];

export const eventList = [
  {
    id: 1,
    image: 'https://via.placeholder.com/575x480',
    title: 'جشنواره فیلم ساندنس',
    address: 'تهران خیابان ولیعصر',
    date: '23 مرداد 1398',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/575x480',
    title: 'جشنواره موسیقی زیر آب.',
    address: 'خلیج فارس',
    date: '24 مهر 1398',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/575x480',
    title: 'فستیوال جشن روستا',
    address: 'کرمان',
    date: '10 اسفند 1398',
  }
];

export const contactList = [
  {
    id: 1,
    title: 'ایمیل',
    icon: 'email',
    desc: [<span className="gx-link" key={1}>kiley.brown@example.com</span>]
  },
  {
    id: 2,
    title: 'صفحه وب',
    icon: 'link',
    desc: [<span className="gx-link" key={2}>example.com</span>]
  }, {
    id: 3,
    title: 'شماره تماس',
    icon: 'phone',
    desc: ['0912345678']
  },
];

export const friendList = [
  {
    id: 1,
    image: avatar5,
    name: 'رضا حسینی',
    status: 'انلاین'

  },
  {
    id: 2,
    image: avatar1,
    name: 'کیان محمدی',
    status: 'افلاین'
  },
  {
    id: 3,
    image: avatar2,
    name: 'رضا حسینی',
    status: 'دور'

  },
  {
    id: 4,
    image: avatar3,
    name: 'کیان محمدی',
    status: 'دور'
  },
];
