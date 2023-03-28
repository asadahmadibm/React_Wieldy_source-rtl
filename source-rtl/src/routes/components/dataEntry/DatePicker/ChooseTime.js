import React from "react";
import {Card, DatePicker} from "antd";

const {RangePicker} = DatePicker;

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}


const ChooseTime = () => {
  return (
    <Card className="gx-card" title="زمان را انتخاب کنید">
      <DatePicker className="gx-mb-3 gx-w-100"
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                  placeholder="انتخاب زمان"
                  onChange={onChange}
                  onOk={onOk}
      />
      <RangePicker className="gx-w-100"
                   showTime={{format: 'HH:mm'}}
                   format="YYYY-MM-DD HH:mm"
                   placeholder={['زمان شروع', 'زمان پایان']}
                   onChange={onChange}
                   onOk={onOk}
      />
    </Card>
  );
};

export default ChooseTime;
