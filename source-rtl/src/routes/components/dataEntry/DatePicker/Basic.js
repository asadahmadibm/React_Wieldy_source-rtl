import React from "react";
import {Card, DatePicker} from "antd";

const {MonthPicker, RangePicker, WeekPicker} = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

const Basic = () => {
  return (
    <Card className="gx-card gx-card" title="پایه">
      <DatePicker className="gx-mb-3 gx-w-100" onChange={onChange}/>
      <MonthPicker className="gx-mb-3 gx-w-100" onChange={onChange} placeholder="انتخاب ماه"/>
      <RangePicker className="gx-mb-3 gx-w-100" onChange={onChange}/>
      <WeekPicker className="gx-w-100" onChange={onChange} placeholder="انتخاب هفته"/>
    </Card>
  );
};

export default Basic;
