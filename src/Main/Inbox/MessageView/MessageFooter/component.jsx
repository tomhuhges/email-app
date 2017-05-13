import React from 'react';
import ReplyField from './ReplyField/component';
import MessageFooterActions from './MessageFooterActions/component';

class MessageFooter extends React.Component {
  render() {
    return (
      <div className="message-footer">
        <ReplyField />
        <MessageFooterActions />
      </div>
    );
  }
}

export default MessageFooter;
