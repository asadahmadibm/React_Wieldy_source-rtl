import React from "react";
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import {Select} from "antd";

import Widget from "components/Widget/index";

const data = [
  {name: '', balance: 200},
  {name: 'فرور', balance: 400},
  {name: 'اردی', balance: 150},
  {name: 'خردا', balance: 400},
  {name: 'تیر', balance: 1000},
  {name: 'مردا', balance: 400},
  {name: 'شهری', balance: 1200},
  {name: 'مهر', balance: 1000},
  {name: 'آبا', balance: 800},
  {name: 'آذر', balance: 750},
  {name: 'دی', balance: 1500},
  {name: 'بهم', balance: 1000},
  {name: 'اسف', balance: 1500},
  {name: '', balance: 500},
];

const Option = Select.Option;

const BalanceHistory = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Widget styleName="gx-card-full">

      <div className="ant-row-flex gx-px-4 gx-pt-4">
        <h2 className="h4 gx-mb-3">تاریخچه تعادل</h2>
        <div className="gx-mr-auto">
          <Select className="gx-mb-2 gx-select-sm" defaultValue="10" onChange={handleChange}>
            <Option value="10">10 روز گذشته</Option>
            <Option value="20">20 روز گذشته</Option>
            <Option value="30">30 روز گذشته</Option>
          </Select>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data}
                   margin={{top: 0, right: 0, left: 0, bottom: 0}}>
          <Tooltip/>
          <XAxis dataKey="name"/>
          <defs>
            <linearGradient id="color15" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#38AAE5" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#F5FCFD" stopOpacity={0.8}/>
            </linearGradient>
          </defs>
          <Area dataKey='balance' strokeWidth={2} stackId="2" stroke='#10316B' fill="url(#color15)"
                fillOpacity={1}/>
        </AreaChart>
      </ResponsiveContainer>
    </Widget>
  );
};

export default BalanceHistory;
