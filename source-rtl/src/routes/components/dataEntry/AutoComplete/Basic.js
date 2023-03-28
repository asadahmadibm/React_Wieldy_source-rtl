import React, {Component} from "react";

import {AutoComplete, Card} from "antd";

function onSelect(value) {
  console.log('onSelect', value);
}


class Basic extends Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  render() {
    const {dataSource} = this.state;
    return (
      <Card className="gx-card" title="وضعیت خطا">
        <AutoComplete
          dataSource={dataSource}
          style={{width: 200}}
          onSelect={onSelect}
          onSearch={this.handleSearch}
          placeholder="ورودی اینجا"
        />
      </Card>

    );
  }
}


export default Basic;

