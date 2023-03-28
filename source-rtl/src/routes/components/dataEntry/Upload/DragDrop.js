import React from "react";
import { Card, Icon, message, Upload } from "antd";

const Dragger = Upload.Dragger;

const props = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} پرونده با موفقیت بارگذاری شد`);
    } else if (status === 'error') {
      message.error(`${info.file.name} آپلود پرونده انجام نشد`);
    }
  },
};

const DragDrop = () => {
  return (
    <Card className="gx-card" title="رها کردن">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">برای بارگیری ، روی این منطقه کلیک کنید یا بکشید</p>
        <p className="ant-upload-hint">پشتیبانی از بارگذاری مجدد یا فله. ممنوعیت بارگذاری اطلاعات شرکت یا سایر پرونده های باند را به شدت منع کنید</p>
      </Dragger>
    </Card>
  );
}
  ;

export default DragDrop;
