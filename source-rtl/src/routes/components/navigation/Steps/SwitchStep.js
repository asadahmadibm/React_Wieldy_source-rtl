import React, { Component } from "react";
import { Button, Card, message, Steps } from "antd";

import "./index.css";

const Step = Steps.Step;

const steps = [{
  title: 'اول',
  content: 'محتوای اول',
}, {
  title: 'دوم',
  content: 'محتوای دوم',
}, {
  title: 'آخر',
  content: 'محتوای آخر',
}];

class SwitchStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <Card className="gx-card" title="مرحله را تغییر دهید">
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[this.state.current].content}</div>
        <div className="steps-action">
          {
            this.state.current < steps.length - 1
            &&
            <Button type="primary" onClick={() => this.next()}>بعدی</Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" onClick={() => message.success('پردازش کامل شد!')}>پایان</Button>
          }
          {
            this.state.current > 0
            &&
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              قبلی
            </Button>
          }
        </div>
      </Card>
    );
  }
}


export default SwitchStep;
