import React from "react";


import avatar1 from '../../../ad-images/avatar-1.png';
import avatar2 from '../../../ad-images/avatar-2.png';
import avatar3 from '../../../ad-images/avatar-3.png';
import avatar4 from '../../../ad-images/avatar-4.png';
import avatar6 from '../../../ad-images/avatar-6.jpeg';
import img1 from '../../../ad-images/img-1.jpeg';
import img2 from '../../../ad-images/img-2.jpeg';
import img3 from '../../../ad-images/img-3.jpeg';
import img4 from '../../../ad-images/img-4.jpeg';

import photo1 from '../../../ad-images/photo-1.jpg';
import photo2 from '../../../ad-images/photo-2.jpg';
import photo3 from '../../../ad-images/photo-3.jpeg';
import photo4 from '../../../ad-images/photo-4.jpeg';
import photo5 from '../../../ad-images/photo-5.jpeg';
import photo6 from '../../../ad-images/photo-6.jpeg';

import layer1 from '../../../ad-images/layer-1.jpg';
import layer2 from '../../../ad-images/layer-2.jpg';
import layer3 from '../../../ad-images/layer-3.jpg';
import layer4 from '../../../ad-images/layer-4.jpg';
import layer5 from '../../../ad-images/layer-5.jpg';
import layer6 from '../../../ad-images/layer-6.jpg';

export const user = {
  id: 'vUAqPRNWgYdS2DyJNAC1lV5KpJF21',
  name: 'سارا زمانی @chelsea',
  image: avatar6,
  address: 'ایران ، تهران',
  email: '@chelsea',
};

export const userInfo = {
  followers: '2k+',
  following: 847,
  frinds: 327,
  isFollow: false
};

export const communityList = [
  {
    id: 1,
    title: 'طبیعت و سواحل ',
    image: img1,
    postCount: 25
  },
  {
    id: 2,
    title: 'کشاورزی امروز',
    image: img2,
    postCount: 3
  },
  {
    id: 3,
    title: 'ابزار و ماشین آلات',
    image: img1,
    postCount: 80
  },
  {
    id: 4,
    title: 'ترفندهای جادویی',
    image: 'https://via.placeholder.com/600x338',
    postCount: 0
  },
  {
    id: 5,
    title: 'تاج ',
    image: img2,
    postCount: 0
  }
];

export const eventList = [
  {
    id: 1,
    image: img3,
    title: 'اجلاس تجسم داده ها',
    date: '1 مهر 1399',
    address: 'اصفهان',
  }, {
    id: 2,
    image: 'https://via.placeholder.com/290x193',
    title: 'روزانه ماراتن',
    date: '11 فروردین 1398',
    address: 'تبریز',
  },
];

export const newsList = [
  {
    id: 1,
    image: 'https://via.placeholder.com/500x330',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' +
      ' چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد' +
      'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد',
  }, {
    id: 2,
    image: img4,
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' +
      ' چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد' +
      'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد',
  },
];

export const interestList = [
  {
    id: 1,
    interest: 'اهنگ'
  },
  {
    id: 2,
    interest: 'نقاشی'
  },
  {
    id: 3,
    interest: 'ورزش'
  },
  {
    id: 4,
    interest: 'گرافیک'
  },
  {
    id: 5,
    interest: 'تئاتر'
  }
];

export const friendList = [
  {
    id: 1,
    image: avatar1,
    name: 'زیبا',
    status: 'انلاین'

  },
  {
    id: 2,
    image: avatar2,
    name: 'تبسم امیدی',
    status: 'افلاین'
  },
  {
    id: 3,
    image: avatar1,
    name: 'نیما',
    status: 'دور'

  },
  {
    id: 4,
    image: avatar2,
    name: 'محسن',
    status: 'دور'
  },
  {
    id: 5,
    image: avatar3,
    name: 'علی رضا',
    status: 'دور'

  },
  {
    id: 6,
    image: avatar4,
    name: 'سهیل',
    status: 'دور'
  }
];

export const postList = [
  {
    id: 1,
    text: '',
    user: { id: 1, name: 'محسن امیدی', image: avatar6 },
    date: 'دوشنبه 22 آبان 1398 10:02:47 GMT+0530 (زمان استاندارد هند)',
    mediaList: [{ image: img1 }, { image: img2 }],
    viewCount: 350,
    likeCount: 150,
    isLike: false,
    commentCount: 0,
    commentList: [{
      user: { id: 1, name: 'محسن امیدی', image: avatar1 },
      comment: 'وای ! بسیار عالی ، من خصوصاً استفاده از فضای سفید را در اینجا دوست دارم',
      date: 'شنبه 20 مرداد 1399 10:02:47 GMT+0530 (زمان استاندارد هند)',
      isLike: true,
      likeCount: 2,
      commentList: []
    }]
  },
  {
    id: 2,
    text: '',
    user: { id: 1, name: 'محسن امیدی', image: avatar2 },
    date: 'شنبه 2 دی 1398 06:08:15 GMT+0530 (زمان استاندارد هند)',
    mediaList: [{ image: img3 }, { image: img4 }, { image: img3 }],
    viewCount: 350,
    likeCount: 150,
    isLike: true,
    commentCount: 0,
    commentList: [{
      user: { id: 6, name: 'محسن امیدی', image: avatar3 },
      comment: 'وای ! بسیار عالی ، من خصوصاً استفاده از فضای سفید را در اینجا دوست دارم',
      date: 'شنبه 2 دی 1398 08:02:47 GMT+0530 (زمان استاندارد هند)',
      likeCount: 3,
      isLike: false,
      commentList: []
    }]
  },
  {
    id: 3,
    text: '',
    user: { id: 1, name: 'محسن امیدی', image: avatar6 },
    date: 'سه شنبه 25 مهر 1398 06:08:15 GMT+0530 (زمان استاندارد هند)',
    mediaList: [{ image: img4 }],
    viewCount: 350,
    likeCount: 150,
    isLike: true,
    commentCount: 0,
    commentList: [{
      user: { id: 6, name: 'محسن امیدی', image: avatar4 },
      comment: 'وای ! بسیار عالی ، من خصوصاً استفاده از فضای سفید را در اینجا دوست دارم',
      date: 'جمعه 2 شهریور 1398 08:02:47 GMT+0530 (زمان استاندارد هند)',
      likeCount: 3,
      isLike: false,
      commentList: []
    }]
  }
];

export const photoList = [
  {
    id: 1,
    image: photo1
  },
  {
    id: 2,
    image: photo2
  },
  {
    id: 3,
    image: photo3
  },
  {
    id: 4,
    image: photo4
  },
  {
    id: 5,
    image: photo5

  },
  {
    id: 6,
    image: photo6
  },
];

export const communitiesList = [
  {
    id: 1,
    image: layer1,
    title: 'لایه'
  },
  {
    id: 2,
    image: layer2,
    title: 'بازی'
  },
  {
    id: 3,
    image: layer3,
    title: 'تفریح'
  },
  {
    id: 4,
    image: layer4,
    title: 'موزیک'
  },
  {
    id: 5,
    image: layer5,
    title: 'سرگرمی'
  },
  {
    id: 6,
    image: layer6,
    title: 'ورزش'
  },
];

export const recentActivity = [
  {
    id: 1,
    day: 'امروز',
    tasks: [
      {
        id: 1,
        name: 'احمد زمانی',
        title: [<span className="gx-link" key={1}>احمد زمانی</span>, ' یک بررسی 5 ستاره در برجای گذاشت ',
        <span className="gx-link" key={2}>خانه آلباما</span>],
        avatar: avatar3,
        imageList: [],
      },
      {
        id: 2,
        name: 'زهرا محمدی',
        title: ['درخواست پاسخ به تماس از ', <span key={3} className="gx-link">زهرا محمدی</span>, ' برای اموال ',
          <span className="gx-link" key={4}>خانه محلی</span>],
        avatar: avatar4,
        imageList: [],
      },
      {
        id: 3,
        name: 'محسن زمانی',
        title: ['تبریک به ', <span key={5} className="gx-link">محسن زمانی</span>,
          ' برای پیوستن به باشگاه 10+ '],
        avatar: avatar1,
        imageList: [],
      },
      {
        id: 4,
        name: 'نیما حسنی',
        title: ['نیما حسنی  به دنبال خانه ای در نیو جرسی ، ایالات متحده است'],
        avatar: '',
        imageList: [],
      }
    ]
  },
  {
    id: 2,
    day: 'دیروز',
    tasks: [
      {
        id: 5,
        name: 'رضا خلیلی',
        title: ['عامل ',
          <span key={6} className="gx-link">رضا خلیلی</span>, ' 7 عکس جدید به ملک اضافه کرده است ',
          <span key={7} className="gx-link">خانه آلباما</span>],
        avatar: '',
        imageList: [avatar2, avatar3, avatar4],
      },
      {
        id: 6,
        name: 'محسن زمانی',
        title: ['به یک نماینده جدید خوش آمدید ', <span className="gx-link" key={8}>محسن زمانی در این شرکت</span>],
        avatar: avatar3,
        imageList: [],
      },
      {
        id: 7,
        name: 'هستی همتی',
        title: [<span key={9} className="gx-link">هستی همتی</span>, ' به دنبال یک فضای اداری است ',
        <span key={10} className="gx-link">ایران ، اصفهان</span>],
        avatar: avatar4,
        imageList: [],
      }
    ]
  }];





