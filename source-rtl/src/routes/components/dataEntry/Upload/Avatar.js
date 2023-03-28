import React from "react";
import { Card, Icon, message, Upload } from "antd";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('شما فقط می توانید پرونده JPG را بارگذاری کنید!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('تصویر باید از 2MB کوچکتر باشد!');
  }
  return isJPG && isLt2M;
}

class Avatar extends React.Component {
  state = {
    loading: false,
  };
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  };

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">آپلود</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <Card className="gx-card" title="آواتار">
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="//jsonplaceholder.typicode.com/posts/"
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
        >
          {imageUrl ? <img src={imageUrl} alt="" /> : uploadButton}
        </Upload>
      </Card>
    );
  }
}

export default Avatar;
