import React from 'react';

class MessageListItem extends React.Component {
  render() {
    const { label, sender, senderEmail, recipientEmail, sendtime, subject, excerpt } = this.props;
    return (
      <div className="message-list-item">
        {label ? (
          <div className={`label ${label}`} />
        ) : null
        }
        <div className="list-item-header">
          <div className="sender">{sender}</div>
          { senderEmail && recipientEmail ? (
            <div>
              <span className="email">{senderEmail}</span>
              <span> to </span>
              <span className="email">{recipientEmail}</span>
            </div>
          ) : null
          }
          <div className="send-time">{sendtime}</div>
        </div>
        <div className="list-item-body">
          <div className="subject">{subject}</div>
          <div className="excerpt">{excerpt}...</div>
        </div>
      </div>
    );
  }
}

export default MessageListItem;
