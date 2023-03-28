import React, {Component} from "react";
import {connect} from "react-redux";
import {Avatar, Popover} from "antd";
import {userSignOut} from "appRedux/actions/Auth";
import avatar3 from '../../ad-images/avatar-3.png';

class UserProfile extends Component {

  render() {
    const userMenuOptions = (
      <ul className="gx-user-popover">
        <li>حساب کاربری من</li>
        <li>اتصالات</li>
        <li onClick={() => this.props.userSignOut()}>خروج
        </li>
      </ul>
    );

    return (

      <div className="gx-flex-row gx-align-items-center gx-mb-4 gx-avatar-row">
        <Popover placement="bottomRight" content={userMenuOptions} trigger="click">
          <Avatar src={avatar3}
                  className="gx-size-40 gx-pointer gx-ml-3" alt=""/>
          <span className="gx-avatar-name">محمد حسینی<i
            className="icon icon-chevron-down gx-fs-xxs gx-mr-2"/></span>
        </Popover>
      </div>

    )

  }
}

export default connect(null, {userSignOut})(UserProfile);
