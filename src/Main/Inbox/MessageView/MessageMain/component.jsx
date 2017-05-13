import React from 'react';
import Message from '../../Message/component';

const message = {
  id: 3,
  label: null,
  sender: 'Kamil Bachanek',
  senderEmail: 'hello@kamilbachanek.com',
  recipientEmail: 'zuzanna@gmail.com',
  sendtime: '1 day ago',
  subject: 'Re: UX/UI for 10Clouds in Atlanta',
  excerpt: 'Excuse my unexpected approach from the off, I am searching for an UX/UI expert for our consumer product in 10Clouds. We have started a relaunch new mobile app for one of our client and look to improve its experience for the 6 million monthly users incrementally on desktop and mobile as we go ahead. We have a big modern office in Atlanta and out of 100 people there is a 15 people team working on that app. Here\'s some introductory video on our product organization.\n\nUncertain about your actual seniority, we\'ve been planning the compensation of the role between 9,000-15,000 zk for the first year. Let me know if this would be interesting for you to further discuss the background of the opportunity as well as our global organization in the 10Clouds.',
};

class MessageMain extends React.Component {
  render() {
    return (
      <div className="message-main">
        <Message {...message} />
      </div>
    );
  }
}

export default MessageMain;
