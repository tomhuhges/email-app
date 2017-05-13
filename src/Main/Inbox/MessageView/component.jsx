import React from 'react';
import MessageHeader from './MessageHeader/component';
import MessageFooter from './MessageFooter/component';
import MessageMain from './MessageMain/component';

class MessageView extends React.Component {
  render() {
    return (
      <div className="message-view">
        <MessageHeader />
        <MessageFooter />
        <MessageMain />
      </div>
    );
  }
}

export default MessageView;
