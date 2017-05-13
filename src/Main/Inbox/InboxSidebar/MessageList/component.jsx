import React from 'react';
import Message from '../../Message/component';

const messages = [
  {
    id: 1,
    label: 'Work',
    sender: 'Zuzanna Romańska',
    sendtime: '2h ago',
    subject: 'Re: Design for Dribbble shot',
    excerpt: 'I love your user interface work and I\'d like to talk with you about possibly',
  },
  {
    id: 2,
    label: 'Events',
    sender: 'Agata Wlodarczyk',
    sendtime: '3h ago',
    subject: 'Re: Assets to Landing Page',
    excerpt: 'Hi Kamil, Want to jump aboard Europe\'s fastest internet incubator?',
  },
  {
    id: 3,
    label: null,
    sender: 'Kamil Bachanek',
    sendtime: '1 day ago',
    subject: 'Re: UX/UI for 10Clouds in Atlanta',
    excerpt: 'I love your user interface work and I\'d like to talk with you about possibly',
  },
  {
    id: 4,
    label: 'Personal',
    sender: 'Kasia Kajka',
    sendtime: '1 day ago',
    subject: 'Work opportunity',
    excerpt: 'Excuse my unexpected approach from the off, I am searching for an UX/UI expert for our',
  },
  {
    id: 5,
    label: 'Important',
    sender: 'Monica Kajka',
    sendtime: '2 days ago',
    subject: 'New workflow for CRM',
    excerpt: 'I love your user interface work and I\'d like to talk with you about possibly',
  },
];

class MessageList extends React.Component {
  render() {
    return (
      <div className="message-list">
        {messages.map(message => <Message key={message.id} {...message} />)}
      </div>
    );
  }
}

export default MessageList;
