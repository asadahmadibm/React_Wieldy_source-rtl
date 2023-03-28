import React, {Component} from "react";
import {connect} from "react-redux";
import {Avatar, Popover} from "antd";
import {userSignOut} from "appRedux/actions/Auth";
import avatar4 from '../../ad-images/avatar-4.png';

class UserInfo extends Component {

  render() {
    const userMenuOptions = (
      <ul className="gx-user-popover">
        <li>حساب من</li>
        <li>اتصالات</li>
        <li onClick={() => this.props.userSignOut()}>خروج
        </li>
      </ul>
    );

    return (
      <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={userMenuOptions}
               trigger="click">
        <Avatar src={avatar4}
                className="gx-avatar gx-pointer" alt=""/>
      </Popover>
    )

  }
}

export default connect(null, {userSignOut})(UserInfo);
