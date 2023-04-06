import React, { Component } from "react";
import { Form, Card, Divider } from 'antd';
import EcarSalesDetail from "./EcarSalesDetail";
import EcarSalesFilter from "./EcarSalesFilter";

class EcarSales extends Component {

  constructor(props) {
    super(props);
    console.log("this.props.location");
    console.log(this.props.location);
    this.state={

      mellicode: this.props.location.state===undefined ? '' : this.props.location.state.mellicode,
      clearform:false
    }
  }

  componentDidMount = () => {
    console.log("componentDidMount");
    console.log(this.state.mellicode);

  }
  handlemellicode = (mellicode) => {
    this.setState({mellicode: mellicode});
    this.setState({clearform: false});
}

handleClearSearch = () => {
  this.setState({clearform: true});
}

  render() {
    return (
      <div className="gx-main-content">
        <Card className="gx-card" title="پروفایل کاربری">
            <EcarSalesFilter onSetMelliCode={this.handlemellicode} onClearSearch={this.handleClearSearch} mellicode={this.state.mellicode}></EcarSalesFilter>
            <Divider></Divider>
            <EcarSalesDetail mellicode={this.state.mellicode} clearform={this.state.clearform}></EcarSalesDetail>
        </Card>
       
      </div>
    )
  }
}

export default Form.create()(EcarSales);;
