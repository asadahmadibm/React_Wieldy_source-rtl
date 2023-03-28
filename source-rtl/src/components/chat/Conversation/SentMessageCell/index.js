import React from "react";
import {Avatar} from "antd";
import avatar5 from '../../../../ad-images/avatar-5.png';

const SentMessageCell = ({conversation}) => {
  return (
    <div className="gx-chat-item gx-flex-row-reverse">

      <Avatar className="gx-size-40 gx-align-self-end" src={avatar5}
              alt={conversation.name}/>

      <div className="gx-bubble-block">
        <div className="gx-bubble">
          <div className="gx-message">{conversation.message}</div>
          <div className="gx-time gx-text-muted gx-text-right gx-mt-2">{conversation.sentAt}</div>
        </div>
      </div>

    </div>
  )
};

export default SentMessageCell;
