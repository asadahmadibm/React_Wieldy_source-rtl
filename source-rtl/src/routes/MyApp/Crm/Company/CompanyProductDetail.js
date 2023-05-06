import React, { Component } from "react";
import { withRouter } from "react-router";
import AdminGrid from "../../../../components/Admin-Grid/AdminGrid";
import { Form, Button, Row, Col, Radio, Modal, Input } from "antd";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from 'axios';
class CompanyProductDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: props.visible,
      mode: '',
      product: {
        companyID: 0,
        rowID: 0,
        productID: 0,
        qty: 0,
        comment: ''
      },
    };
  }
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.visible != this.state.visible ) {
      // console.log("nextProps", nextProps.product);
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
        // console.log("this.state.product", this.state);
      }
    }
  }

  GetData = (product) => {
    const CompanyIdRowId = {
      CompanyId: product.companyID,
      RowId: product.rowID
    }
    console.log("product");
    console.log(product);
    document.body.classList.add('loading-indicator');
    axios.post("/CrmCompanyProduct/GetById", CompanyIdRowId)
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
      productID: this.state.product.productID,
      qty: this.state.product.qty,
      comment: this.state.product.comment,
    }

  }

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
    axios.post("/CrmCompanyProduct/Insert", product)
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
    axios.post("/CrmCompanyProduct/Update", product)
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
    axios.delete("/CrmCompanyProduct/Delete", { data: list })
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

  prepareData = () => {
    return this.state.product
  }

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
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <Modal
        title={this.state.mode === "Add" ? "ایجاد" : this.state.mode === "Edit" ? "ویرایش" : "حذف"}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        okType={this.state.mode === "Delete" ? "danger" : "primary" }
        okText={this.state.mode === "Add" ? "ایجاد" : this.state.mode === "Edit" ? "ویرایش" : "حذف"}>

        <div className="gx-modal-box-form-item">
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item
              label=" کد شرکت"
              name="companyID"
            >
              <Input disabled={this.state.mode === "Delete" ? 'disabled' : ''}
                required
                placeholder="کد شرکت"
                onChange={(event) => this.setState({ product: { ...this.state.product, companyID: event.target.value } })}
                value={this.state.product.companyID}
                margin="none" />
            </Form.Item>
            <Form.Item
              label=" محصول"
              name="productID"
            >
              <Input disabled={this.state.mode === "Delete" ? 'disabled' : ''}
                required
                placeholder="محصول"
                onChange={(event) => this.setState({ product: { ...this.state.product, productID: event.target.value } })}
                value={this.state.product.productID}
                margin="none" />
            </Form.Item>
            <Form.Item
              label=" تعداد"
              name="productID"
            >
              <Input disabled={this.state.mode === "Delete" ? 'disabled' : ''}
                required
                placeholder="تعداد"
                onChange={(event) => this.setState({ product: { ...this.state.product, qty: event.target.value } })}
                value={this.state.product.qty}
                margin="none" />
            </Form.Item>
            <Form.Item
              label=" توضیحات"
              name="comment"
            >
              <Input disabled={this.state.mode === "Delete" ? 'disabled' : ''}
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

export default withRouter(CompanyProductDetail);;
