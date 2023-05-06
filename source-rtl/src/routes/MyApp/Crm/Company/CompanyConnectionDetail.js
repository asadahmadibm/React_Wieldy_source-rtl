import React, { Component } from "react";
import { withRouter } from "react-router";
import AdminGrid from "../../../../components/Admin-Grid/AdminGrid";
import { Form, Button, Row,Checkbox, Col, Radio, Modal, Input } from "antd";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from 'axios';
class CompanyConnectionDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: props.visible,
      mode: '',
      product: {
        companyID: 0,
        rowID: 0,
        fullName: "",
        position: "",
        telphone: '',
        email: "",
        isActive :false,
        unsubscribed:false,
        comment:""
      },
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.visible != this.state.visible ) {
      this.setState({
        visible: nextProps.visible,
        mode: nextProps.mode,
        product: {
          companyID: nextProps.product.companyID,
          rowID: nextProps.product.rowID,
        }
      })
      if (nextProps.mode != undefined && nextProps.mode != "Add") {
        this.GetData(nextProps.product);
      }
    }
  }

  GetData = (product) => {
    const CompanyIdRowId = {
      CompanyId: product.companyID,
      RowId: product.rowID
    }
    document.body.classList.add('loading-indicator');
    axios.post("/CrmCompanyConnection/GetById", CompanyIdRowId)
      .then(response => {
        let res = response.data.data;
        if (res != null) {
          // res.birthdate = new DateObject({ date: res.birthdate, calendar: persian, locale: persian_fa });//"1355/05/21",
          // res.sodoordate = new DateObject({ date: res.sodoordate, calendar: persian, locale: persian_fa });//"1355/05/21",
        }
        else {
          toast.info("اطلاعات کاربر یافت نشد ");
        }
        document.body.classList.remove('loading-indicator')
        this.setState({ product: res });
        // console.log("this.state.product After Call", this.state.product);
      }).catch(res => {
        document.body.classList.remove('loading-indicator')
        toast.error("اشکال در فراخوانی سرویس")
      });
  }

  prepareData = () => {
    return {
      companyID: this.state.product.companyID,
      rowID: this.state.product.rowID,
      fullName: this.state.product.fullName,
      position: this.state.product.position,
      telphone: this.state.product.telphone,
      email: this.state.product.email,
      isActive :this.state.product.isActive,
      unsubscribed:this.state.product.unsubscribed,
      comment:this.state.product.comment==null ? "" : this.state.product.comment,
    }

  }
  // prepareData = () => {
  //   return this.state.product
  // }

  AddData = (product) => {
    // const CreateCompanyProductDTO = {
    //   CompanyId: product.companyID,
    //   ProductID: product.productID,
    //   rowID: product.rowID,
    //   Qty: product.qty,
    //   Comment : product.comment,
    // }
    // console.log("product");
    // console.log(product);
    document.body.classList.add('loading-indicator');
    axios.post("/CrmCompanyConnection/Insert", product)
      .then(response => {
        toast.info("اطلاعات کاربر ایجاد شد ");
        let res = response.data.data;
        if (res != null) {
          this.setState({
            visible: false,
          });
          this.props.parentCallback();
          // res.birthdate = new DateObject({ date: res.birthdate, calendar: persian, locale: persian_fa });//"1355/05/21",
          // res.sodoordate = new DateObject({ date: res.sodoordate, calendar: persian, locale: persian_fa });//"1355/05/21",
        }
        else {
          toast.info("اطلاعات کاربر ایجاد نشد ");
        }
        document.body.classList.remove('loading-indicator')

      }).catch(res => {
        document.body.classList.remove('loading-indicator')
        toast.error("اشکال در فراخوانی سرویس")
      });
  }

  UpdateData = (product) => {
    // const CreateCompanyProductDTO = {
    //   CompanyId: product.companyID,
    //   ProductID: product.productID,
    //   rowID: product.rowID,
    //   Qty: product.qty,
    //   Comment : product.comment,
    // }
    // console.log("product");
    // console.log(product);
    document.body.classList.add('loading-indicator');
    axios.post("/CrmCompanyConnection/Update", product)
    // .then((response) => {
    //   // Return a promise with an artificial delay.
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve(response.data);
    //     }, 2e3);
    //   });
    // })
      .then(data => {
        let res = data.data.data;
        if (res != null) {
          toast.warning("اطلاعات کاربر ویرایش شد ");
          this.setState({
            visible: false,
          });
          this.props.parentCallback();
          // res.birthdate = new DateObject({ date: res.birthdate, calendar: persian, locale: persian_fa });//"1355/05/21",
          // res.sodoordate = new DateObject({ date: res.sodoordate, calendar: persian, locale: persian_fa });//"1355/05/21",
        }
        else {
          toast.info("اطلاعات کاربر ایجاد نشد ");
        }
        document.body.classList.remove('loading-indicator')

      }).catch(res => {
        document.body.classList.remove('loading-indicator')
        toast.error("اشکال در فراخوانی سرویس")
      });
  }

  DeleteData = (product) => {
    const list = [{
      CompanyId: product.companyID,
      rowID: product.rowID,
    }]
    console.log("product");
    console.log(product);
    document.body.classList.add('loading-indicator');
    axios.delete("/CrmCompanyConnection/Delete", { data: list })
      .then(response => {
        let res = response.data.errors;
        if (res.length == 0) {
          toast.error("اطلاعات کاربر حذف شد ");
          this.setState({
            visible: false,
          });
          this.props.parentCallback();
          // res.birthdate = new DateObject({ date: res.birthdate, calendar: persian, locale: persian_fa });//"1355/05/21",
          // res.sodoordate = new DateObject({ date: res.sodoordate, calendar: persian, locale: persian_fa });//"1355/05/21",
        }
        else {
          toast.error(res[0] + "اطلاعات کاربر حذف نشد ");
        }
        document.body.classList.remove('loading-indicator')

      }).catch(res => {
        document.body.classList.remove('loading-indicator')
        toast.error("اشکال در فراخوانی سرویس")
      });
  }

  handleOk = e => {
    var data = this.prepareData();
    switch (this.state.mode) {
      case "Add":
        this.AddData(data);
        break;
      case "Edit":
        this.UpdateData(data);
        break;
      case "Delete":
        this.DeleteData(data);
        break;
      default:
        alert('Default case');
    }

    // console.log('Received values of form: ', data);
  
  };



  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <Modal
        // width="80vw"
        title={this.state.mode === "Add" ? "ایجاد" : this.state.mode === "Edit" ? "ویرایش" : "حذف"}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        okType={this.state.mode === "Delete" ? "danger" : "primary" }
        okText={this.state.mode === "Add" ? "ایجاد" : this.state.mode === "Edit" ? "ویرایش" : "حذف"}>

        <div className="gx-modal-box-form-item">
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item
              // label=" کد شرکت"
              name="companyID"
            >
              <Input addonBefore="کد شرکت" disabled={this.state.mode === "Delete" ? 'disabled' : ''}
                required
                placeholder="کد شرکت"
                onChange={(event) => this.setState({ product: { ...this.state.product, companyID: event.target.value } })}
                value={this.state.product.companyID}
                margin="none" />
            </Form.Item>
            <Form.Item
              // label="نام و نام خانوادگی"
              name="fullName"
            >
              <Input addonBefore="نام و نام خانوادگی" disabled={this.state.mode === "Delete" ? 'disabled' : ''}
                required
                placeholder="نام و نام خانوادگی"
                onChange={(event) => this.setState({ product: { ...this.state.product, fullName: event.target.value } })}
                value={this.state.product.fullName}
                margin="none" />
            </Form.Item>
            <Form.Item
              // label=" سمت"
              name="position"
            >
              <Input addonBefore=" سمت" disabled={this.state.mode === "Delete" ? 'disabled' : ''}
                required
                placeholder="سمت"
                onChange={(event) => this.setState({ product: { ...this.state.product, position: event.target.value } })}
                value={this.state.product.position}
                margin="none" />
            </Form.Item>
            <Form.Item
              // label=" تلفن"
              name="telphone"
            >
              <Input addonBefore=" تلفن" disabled={this.state.mode === "Delete" ? 'disabled' : ''}
                required
                placeholder="تلفن"
                onChange={(event) => this.setState({ product: { ...this.state.product, telphone: event.target.value } })}
                value={this.state.product.telphone}
                margin="none" />
            </Form.Item>
            <Form.Item
              // label=" ایمیل"
              name="email"
            >
              <Input addonBefore=" ایمیل" disabled={this.state.mode === "Delete" ? 'disabled' : ''}
                required
                placeholder="ایمیل"
                onChange={(event) => this.setState({ product: { ...this.state.product, email: event.target.value } })}
                value={this.state.product.email}
                margin="none" />
            </Form.Item>
            {/* <Row>
            <Col lg={16} md={16} xs={24} sm={12} xl={16}  > */}
                <ul className="gx-list-inline">

                  <li key={111}>
                    <span className="gx-link gx-btn gx-btn-white ">
                      {/* <Form.Item
                      name="isCustomer"
                    >
                      {getFieldDecorator('isCustomer', {
                        // valuePropName:this.state.isActive==true ? 'checked' : '',
                      })(
                        <Checkbox checked={this.state.crmCompanyDTO.isCustomer} >مشتری</Checkbox>
                      )}
                    </Form.Item> */}
                      <Checkbox 
                      checked={this.state.product.isActive} 
                      onChange={(event) => this.setState({ product: { ...this.state.product, isActive: event.target.checked } })}
                      >فعال</Checkbox>
                    </span>
                  </li>
                  <li key={112}>

                    <span className="gx-link gx-btn gx-btn-white ">
                      {/* <Form.Item>
                      {getFieldDecorator('isActive', {
                        // valuePropName: 'checked',
                        // initialValue: true,
                      })(
                        <Checkbox checked={this.state.crmCompanyDTO.isActive} >فعال</Checkbox>
                      )}

                    </Form.Item>  */}
                      <Checkbox 
                      checked={this.state.product.unsubscribed} 
                      onChange={(event) => this.setState({ product: { ...this.state.product, unsubscribed: event.target.checked } })}
                      >عدم ارسال ایمیل</Checkbox>
                    </span>
                  </li>
                </ul>
              {/* </Col>
            </Row> */}
            <Form.Item
              // label=" توضیحات"
              name="comment"
            >
              <Input addonBefore=" توضیحات" disabled={this.state.mode === "Delete" ? 'disabled' : ''}
                required
                placeholder="توضیحات"
                onChange={(event) => this.setState({ product: { ...this.state.product, comment: event.target.value } })}
                value={this.state.product.comment}
                margin="none" />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    )
  }
}
export default withRouter(CompanyConnectionDetail);;
