import React from "react";
import { Card, Icon, Slider } from "antd";

class SliderWithIcon extends React.Component {
  state = {
    value: 0,
  };
  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { max, min } = this.props;
    const { value } = this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
    const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';
    return (
      <Card className="gx-card" title="اسلایدر با آیکون">
        <Icon style={{ color: preColor }} type="frown-o" />
        <Slider {...this.props} onChange={this.handleChange} value={value} />
        <Icon style={{ color: nextColor }} type="smile-o" />
      </Card>
    );
  }
}

export default SliderWithIcon;
