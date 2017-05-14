import React from 'react';
import styles from './styles';

const labelColors = {
  Important: 'bg-red',
  Personal: 'bg-yellow',
  Work: 'bg-green',
  Events: 'bg-pink',
};

class Message extends React.Component {
  render() {
    let {
      isList,
      label,
      sender,
      senderImg,
      senderEmail,
      recipientEmail,
      sendtime,
      subject,
      content,
      selected,
    } = this.props;
    content = isList ? content.slice(0, 100).concat('...') : content;
    let style;
    if (isList) {
      if (selected) {
        style = styles.listItemSelected;
      } else {
        style = styles.listItem;
      }
    } else {
      style = styles.full;
    }
    return (
      <div className={`message ${style.item}`}>
        {isList && label ? (
          <div className={`label ${style.label} ${labelColors[label]}`} />
        ) : null
        }
        <div className={`message-header ${styles.messageHeader}`}>
          <div className={`sender ${style.sender}`}>
            { !isList && senderImg ? (
              <img src={senderImg} alt="img" className={`message-header-img ${style.img}`} />
            ) : null
            }
            <div>
              <span className={`sender-name ${style.senderName}`}>{sender}</span>
              { !isList && senderEmail && recipientEmail ? (
                <div>
                  <span className="email blue">{senderEmail}</span>
                  <span> to </span>
                  <span className="email blue">{recipientEmail}</span>
                </div>
              ) : null
              }
            </div>
          </div>
          <div className={`send-time ${style.sendTime}`}>{sendtime}</div>
        </div>
        <div className="list-item-body">
          <div className={`subject ${style.subject}`}>{subject}</div>
          <div className={`content ${style.content}`}>{content}</div>
        </div>
      </div>
    );
  }
}

export default Message;
