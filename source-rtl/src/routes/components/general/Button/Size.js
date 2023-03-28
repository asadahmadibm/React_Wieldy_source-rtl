import React, { Component } from "react";
import { Button, Card, Icon, Radio } from "antd";

class Size extends Component {
  state = {
    size: 'large',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const size = this.state.size;
    return (
      <Card className="gx-card" title="سایز">
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">بزرگ</Radio.Button>
          <Radio.Button value="default">متوسط</Radio.Button>
          <Radio.Button value="small">کوچک</Radio.Button>
        </Radio.Group>
        <br /><br />
        <Button type="primary" size={size}>اولیه</Button>
        <Button size={size}>معمولی</Button>
        <Button type="dashed" size={size}>خراب شده</Button>
        <Button type="danger" size={size}>خطر</Button>
        <br />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" icon="download" size={size}>دانلود</Button>
        <br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="right" />رو به عقب
          </Button>
          <Button type="primary">
            رو به جلو<Icon type="left" />
          </Button>
        </Button.Group>
      </Card>
    );
  }
}


export default Size;
