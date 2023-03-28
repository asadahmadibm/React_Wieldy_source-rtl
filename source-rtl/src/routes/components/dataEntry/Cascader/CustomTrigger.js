import React, {Component} from "react";
import {Card, Cascader} from "antd";


const options = [{
  value: 'menu',
  label: 'منو',
  children: [{
    value: 'jumbo',
    label: 'جی کوئری',
    children: [{
      value: 'opstion',
       label: 'نزدیک دریاچه',
    }],
  }],
}, {
  value: 'menu',
   label: 'منو 1',
  children: [{
    value: 'opstion 1',
     label: 'جامبو',
    children: [{
      value: 'opstion 2',
      label: 'react',
    }],
  }],
}];

class CustomTrigger extends Component {
  state = {
    text: 'لغو انتخاب',
  };

  onChange = (value, selectedOptions) => {
    this.setState({
      text: selectedOptions.map(o => o.label).join(', '),
    });
  };


  render() {
    return (
      <Card className="gx-card" title="ماشه سفارشی">
        {this.state.text}
        &nbsp;
        <Cascader options={options} onChange={this.onChange}>
          <span className="gx-link">تغییر شهر</span>
        </Cascader>
      </Card>
    );
  }

}


export default CustomTrigger;
