import React from "react";
import CKEditor from "react-ckeditor-component";
import {Card} from "antd";

import IntlMessages from "util/IntlMessages";

class CK extends React.Component {
  constructor(props) {
    super(props);
    this.updateContent = this.updateContent.bind(this);
    this.state = {
      content: '<h2>یه متن فوق العاده اینجاست</h2>\n' +
      '<p>لورم ایپسوم متن ساختگی با تولید نامفهوم است <strong>این متن در صنعت چاپ، </strong> و طراحی مورد استفاده قرار می گیرد</p>\n' +
      '\n' +
      '<ul>\n' +
      '        <li>آیتم لیست</li>\n' +
      '        <li>آیتم لیست دوم</li>\n' +
      '</ul>\n' +
      '\n' +
      '<p><em>این متن حاوی اطلاعات زیادی برای ویرایش کردن و تست کردن این ادیتور می باشد</em></p>\n',
    }
  }

  updateContent(newContent) {
    this.setState({
      content: newContent
    })
  }

  onChange(evt) {
    const newContent = evt.editor.getData();
    this.setState({
      content: newContent
    })
  }

  onBlur(evt) {
    console.log('onBlur event called with event info: ', evt);
  }

  afterPaste(evt) {
    console.log('afterPaste event called with event info: ', evt);
  }

  render() {
    return (
      <Card className="gx-card" title={<IntlMessages id="sidebar.editors.CKEditor"/>}>
        <CKEditor
          activeClass="p10"
          content={this.state.content}
          events={{
            'blur': this.onBlur.bind(this),
            'afterPaste': this.afterPaste.bind(this),
            'change': this.onChange.bind(this)
          }}
        />
      </Card>
    )
  }
}

export default CK;
