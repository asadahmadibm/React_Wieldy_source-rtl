import React from "react";
import { Button, Card, Icon, message, Upload } from "antd";

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} پرونده با موفقیت بارگذاری شد`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} آپلود پرونده انجام نشد`);
    }
  },
};

const UploadClick = () => {
  return (
    <Card className="gx-card" title="بارگذاری کلیک کنید">
      <Upload {...props}>
        <Button>
          <Icon type="upload" /> برای بارگذاری کلیک کنید
          </Button>
      </Upload>
    </Card>
  );
}
  ;

export default UploadClick;
