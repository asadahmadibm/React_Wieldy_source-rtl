import React, { Component } from "react";
import { Form, Card, List,Tabs } from 'antd';
import { Col, Row ,Carousel,Alert} from "antd";
import { Divider, Icon, Table} from "antd";
import Auxiliary from "util/Auxiliary";
const TabPane = Tabs.TabPane;
const data1 = [
  'لورم ایپسوم متن ساختگی با تولید سادگی',
  'صنعت چاپ و با استفاده از طراحان گرافیک',
  'شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع',
  'صنعت چاپ و با استفاده از طراحان گرافیک',
  'لورم ایپسوم متن ساختگی با تولید سادگی',
];


class brand extends Component {

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
      <Auxiliary>
      <Row>

        <Col xl={18} lg={12} md={12} sm={12} xs={24}>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Card className="gx-card" >
              <Alert
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
              type="info"
              />
            </Card>
            </Col>
            <Col xl={18} lg={12} md={12} sm={12} xs={24}>
        </Col>
        </Col>
      </Row>
      </Auxiliary>
    )
  }
}

export default Form.create()(brand);;
