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
const columns = [{
  title: 'نام',
  dataIndex: 'name',
  render: text => <span className="gx-link">{text}</span>,
}, {
  title: 'دارایی های نقدی',
  className: 'column-money',
  dataIndex: 'money',
}, {
  title: 'آدرس',
  dataIndex: 'address',
}];

const data = [{
  key: '1',
  name: 'نیما زمانی',
  money: '￥300,000.00',
  address: 'تهران خیابان انقلاب',
}, {
  key: '2',
  name: 'محسن امانی',
  money: '￥1,256,000.00',
  address: 'اصفهان خیابان امام',
}, {
  key: '3',
  name: 'زهره احمدی',
  money: '￥120,000.00',
  address: 'تبریز میدان امام',
}];




class Ifb extends Component {

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
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
        <Card className="gx-card" >
        <List 
        itemLayout="horizontal"
        dataSource={data1}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />
        </Card>

        </Col>
        <Col xl={18} lg={12} md={12} sm={12} xs={24}>
        <Card className="gx-card" style={{height:'250px'}}>
          <Carousel autoplay>
            <div><h3>fddfsdfsdf </h3></div>
            <div><h3>2fdsdslkjljk llkj </h3></div>
            <div><h3>fdfd ;jl;j;fsj ;l f;lj ;j;df</h3></div>
            <div><h3>4444444444444444444 444444444444444</h3></div>
          </Carousel>
        </Card>

        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
        <Card className="gx-card" style={{height:'200px'}} >
        <Tabs defaultActiveKey="1" size="small" tabBarGutter="0" style={{ display: 'flex', justify:'center'}}>
          <TabPane tab="شاخص کل هم وزن بورس" key="1">
            {/* {
              this.state.taskList.map((task, index) =>
                <TaskItem key={index} data={task} onChange={this.onChange}/>)
            } */}
          </TabPane>
          <TabPane tab=" شاخص کل فرابورس" key="2">
            {/* {
            this.state.taskList.map((task, index) =>
              <TaskItem key={"2" + index} data={task} onChange={this.onChange}/>)
          } */}
          </TabPane>
        </Tabs>
        </Card>

        </Col>
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
        <Card className="gx-card" >
        <Tabs   tabPosition='right' size="small" >
          <TabPane tab="Tab 1" key="1">
          <Table className="gx-table-responsive" columns={columns} dataSource={data}  size="small"  bordered
        title={() => 'عنوان جدول در اینجا'} />
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        </Card>

        </Col>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
        <Card className="gx-card" style={{height:'200px'}} >
       
        </Card>

        </Col>

        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
        <Card className="gx-card" >
        </Card>

        </Col>
        <Col xl={18} lg={12} md={12} sm={12} xs={24}>
        <Card className="gx-card" >
        </Card>

        </Col>
      </Row>
      </Auxiliary>
    )
  }
}

export default Form.create()(Ifb);;
