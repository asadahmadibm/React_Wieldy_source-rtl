import React from "react";
import {Badge} from "antd";
import {Area, AreaChart, ResponsiveContainer, Tooltip} from "recharts";

import Widget from "components/Widget/index";

const data = [
  {name: 'صفحه A', lastWeek: 1900, thisWeek: 3200},
  {name: 'صفحه B', lastWeek: 1300, thisWeek: 4000},
  {name: 'صفحه C', lastWeek: 1850, thisWeek: 2500},
  {name: 'صفحه D', lastWeek: 1680, thisWeek: 3000},
  {name: 'صفحه H', lastWeek: 3900, thisWeek: 2560},
  {name: 'صفحه I', lastWeek: 1400, thisWeek: 2700},
  {name: 'صفحه J', lastWeek: 2200, thisWeek: 2000},
  {name: 'صفحه K', lastWeek: 1300, thisWeek: 2000},
  {name: 'صفحه L', lastWeek: 1880, thisWeek: 3408},
  {name: 'صفحه M', lastWeek: 2290, thisWeek: 2960},
];

const WorkStatusCard = () => {

  return (
    <Widget styleName="gx-card-img gx-card-cover-black" hoverable
            title={<h1 className="gx-font-weight-bold gx-mb-1 gx-fs-xxl">76% <i className="icon icon-menu-up gx-fs-sm"/>
            </h1>}
            cover={
              <ResponsiveContainer className="gx-bg-dark" width="100%" height={80}>
                <AreaChart data={data}
                           margin={{top: 10, right: 0, left: 0, bottom: 0}}>
                  <Tooltip/>
                  <Area type='monotone' dataKey="thisWeek" stackId="2" stroke='#FE9E15' fill='#FE9E15' fillOpacity={1}/>
                  <Area type='monotone' dataKey='lastWeek' stackId="1" stroke='#038FDE' fill='#038FDE' fillOpacity={1}/>
                </AreaChart>
              </ResponsiveContainer>
            }>
      <Badge className="gx-badge-up gx-badge-up-right gx-bg-white gx-text-primary gx-size-36"><i
        className="icon icon-long-arrow-left gx-fs-lg"/> </Badge>
      <h4>وضعیت کار</h4>
      <p className="gx-text-light gx-fs-sm gx-mb-0">پیشرفت هفته گذشته</p>
    </Widget>
  );
};

export default WorkStatusCard;
