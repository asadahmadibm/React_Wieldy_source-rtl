import React from "react";
import avatar1 from '../../../../ad-images/avatar-1.png';
import avatar2 from '../../../../ad-images/avatar-2.png';
import avatar3 from '../../../../ad-images/avatar-3.png';
import avatar4 from '../../../../ad-images/avatar-4.png';

export const taskList = [
  {
    id: 1,
    title: 'صفحه اصلی را پویا کنید',
    completed: false,
    user: {
      projectName: 'مدرسه ی زیبا',
      avatar: avatar1
    },
    dueDate: 'فردا',
    tags: [1, 2]
  }, {
    id: 2,
    title: 'طراحی فریم ورک بر اساس نیازها',
    completed: false,
    user: {
      projectName: 'ویدلی',
      avatar: avatar2
    },
    dueDate: 'امروز',
    tags: [2, 4]
  }, {
    id: 3,
    title: 'نیاز به تعریف خرد از کلیک روی دکمه ورود به سیستم',
    completed: false,
    user: {
      projectName: 'شرکت مدرن',
      avatar: avatar3
    },
    dueDate: '21 مهر',
    tags: [1, 2, 3]
  }, {
    id: 4,
    title: 'برای فهرست کردن املاک باید صفحه جدیدی طراحی شود',
    completed: false,
    user: {
      projectName: 'ویدلی',
      avatar: avatar4
    },
    dueDate: '23 آبان',
    tags: [2, 3, 4]
  }, {
    id: 5,
    title: 'طراحی فریم ورک بر اساس نیازها',
    completed: false,
    user: {
      projectName: 'ویدلی',
      avatar: avatar1
    },
    dueDate: '1 دی',
    tags: [2, 4]
  }];

export const recentActivity = [
  {
    id: 1,
    day: 'امروز',
    tasks: [
      {
        id: 1,
        name: 'احمد زمانی',
        title: [<span className="gx-link" key={1}>احمد سعیدی</span>, ' یک بررسی 5 ستاره در برجای گذاشت ',
          <span className="gx-link" key={2}>خانه ای زیبا</span>],
        avatar: avatar2,
        imageList: [],
      },
      {
        id: 2,
        name: 'زهرا محمدی',
        title: ['درخواست پاسخ به تماس از ', <span className="gx-link" key={3}>زهرا محمدی</span>, ' برای اموال ',
          <span className="gx-link" key={4}>دیزاین خانه</span>],
        avatar: avatar3,
        imageList: [],
      },
      {
        id: 3,
        name: 'محسن زمانی',
        title: ['تبریک به ', <span className="gx-link" key={5}>محسن زمانی</span>,
          ' برای پیوستن به باشگاه 10+ '],
        avatar: avatar4,
        imageList: [],
      },
      {
        id: 4,
        name: 'پوریا کیانی',
        title: ['پوریا کیانی به دنبال خانه ای در نیو جرسی ، ایالات متحده است'],
        avatar: '',
        imageList: [],
      },
    ]
  },
  {
    id: 2,
    day: 'دیروز',
    tasks: [
      {
        id: 5,
        name: 'رضا خلیلی',
        title: ['Agent ',
          <span className="gx-link" key={7}>رضا خلیلی</span>, ' 7 عکس جدید به ملک اضافه کرده است ',
          <span key={6} className="gx-link">خانه آلباما</span>],
        avatar: '',
        imageList: [avatar1, avatar2, avatar3, avatar4, avatar1, avatar2, avatar3,],
      },
      {
        id: 6,
        name: 'محسن زمانی',
        title: ['به یک نماینده جدید خوش آمدید ', <span className="gx-link" key={8}>محسن زمانی در این شرکت</span>],
        avatar: avatar4,
        imageList: [],
      },
      {
        id: 7,
        name: 'هستی همتی',
        title: [<span className="gx-link" key={9}>هستی همتی</span>, ' به دنبال یک فضای اداری است ',
          <span className="gx-link" key={10}>ایران ، اصفهان</span>],
        avatar: avatar1,
        imageList: [],
      }, {
        id: 8,
        name: 'احمد زمانی',
        title: [<span className="gx-link" key={11}>احمد زمانی</span>, ' یک بررسی 5 ستاره در برجای گذاشت ',
          <span className="gx-link" key={12}>خانه آلباما</span>],
        avatar: avatar2,
        imageList: [],
      },
    ]
  }];

export const ticketList = [
  {
    id: 1,
    avatar: avatar3,
    title: 'برای تنظیم سریع به پشتیبانی سریع نیاز دارید',
    description: [<span className="gx-link" key={13}>زیبا حسنی</span>, "  15 دقیقه قبل بلیط ایجاد کرد"],
    status: 2
  }, {
    id: 2,
    avatar: avatar4,
    title: 'پرس و جو پیش فروش در مورد محصول',
    description: [<span key={14} className="gx-link">شما</span>, " جواب دادید 2 روز پیش"],
    status: 1
  }, {
    id: 3,
    avatar: avatar1,
    title: 'با توجه به خدمات سفارشی سازی',
    description: [<span key={15} className="gx-link">زیبا حسنی</span>, " جواب دادید 2 روز پیش"],
    status: 4
  }
];
export const taskStatus = [
  {
    id: 1,
    title: 'بحرانی',
    color: 'red'
  }, {
    id: 2,
    title: 'بالا',
    color: 'orange'
  }, {
    id: 3,
    title: 'متوسط',
    color: 'green'
  }, {
    id: 4,
    title: 'پایین',
    color: 'light-grey'
  }
];
export const taskTags = [
  {
    id: 1,
    name: 'HTML',
    color: 'red',
  }, {
    id: 2,
    name: 'ری اکت',
    color: 'green',
  }, {
    id: 3,
    name: 'جاوااسکریپت',
    color: 'blue',
  }, {
    id: 4,
    name: 'CSS',
    color: 'orange',
  }];
export const siteVisit = [
  {name: '1', thisYear: 0, lastYear: 0},
  {name: '2', thisYear: 0, lastYear: 1},
  {name: '3', thisYear: 5, lastYear: 2},
  {name: '4', thisYear: 10, lastYear: 0},
  {name: '5', thisYear: 4, lastYear: 1},
  {name: '6', thisYear: 16, lastYear: 3},
  {name: '7', thisYear: 5, lastYear: 1},
  {name: '8', thisYear: 11, lastYear: 5},
  {name: '9', thisYear: 6, lastYear: 2},
  {name: '10', thisYear: 11, lastYear: 3},
  {name: '11', thisYear: 30, lastYear: 2},
  {name: '12', thisYear: 10, lastYear: 1},
  {name: '13', thisYear: 13, lastYear: 0},
  {name: '14', thisYear: 4, lastYear: 2},
  {name: '15', thisYear: 3, lastYear: 8},
  {name: '16', thisYear: 1, lastYear: 0},
  {name: '17', thisYear: 0, lastYear: 0},
];

export const totalSaleData = [
  {name: 'JAN', price: 600},
  {name: 'FEB', price: 3398},
  {name: 'MAR', price: 1200},
  {name: 'APR', price: 4908},
  {name: 'MAY', price: 2908},
];

export const totalRevenueData = [
  {name: 'JAN', thisYear: 60},
  {name: 'FEB', thisYear: 90},
  {name: 'MAR', thisYear: 50},
  {name: 'APR', thisYear: 75},
  {name: 'MAY', thisYear: 60},
  {name: 'JUN', thisYear: 85},
  {name: 'JUL', thisYear: 20},
  {name: 'AUG', thisYear: 75},
  {name: 'SEP', thisYear: 60},
  {name: 'OCT', thisYear: 40},
  {name: 'NOV', thisYear: 75},
  {name: 'DEC', thisYear: 25},
];

export const trafficData = [
  {name: 'صفحه A', value: 0},
  {name: 'صفحه B', value: 2000},
  {name: 'صفحه C', value: 600},
  {name: 'صفحه D', value: 4400},
  {name: 'صفحه D', value: 900},
  {name: 'صفحه H', value: 4860},
];
