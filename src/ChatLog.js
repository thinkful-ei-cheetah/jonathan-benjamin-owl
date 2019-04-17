import React, { Component } from 'react';
import './ChatLog.css';

class ChatLog extends Component {

    constructor(props)
    {
        super(props);
        
        this.props.chatEvents.map((chat) => {
            chat.name = (this.props.participants.find((person) => person.id === chat.participantId)).name
            chat.avatar = (this.props.participants.find((person) => person.id === chat.participantId)).avatar
                }
            )    
    }

    createAction(type) {
        switch(type) {
            case 'thumbs-up':
                return "gave a thumbs-up";
            case 'thumbs-down':
                return "gave a thumbs-down";
            case 'raise-hand':
                return "raised their hand";
            case 'clap':
                return "clapped";
            case 'join':
                return "joined";
            case 'leave':
                return "left";
            case 'join-stage':
                return "joined the stage";
            case 'leave-stage':
                return "left the stage";
            default:
                return '';
        }
    }

    createChat(chat) {
        return chat.type === 'message' ? (
            <div>
                <img className="avatar" src={chat.avatar} alt="{chat.name} avatar" />   
                <span>{chat.name}</span>
                <span>{new Date(chat.timestamp).toString()}</span>
                <div>{chat.message}</div>
            </div>
        )
        :
        (
            <div>
                <div>{new Date(chat.timestamp).toString()}</div>
                <div>{chat.name} {this.createAction(chat.type)}</div>
            </div>
        )
    }


  render() {
    return <div>
        {this.props.chatEvents.map((chat) =>
           
           <div className="blah">
                {this.createChat(chat)}        
            </div>
        )}
    </div>
  }
}

export default ChatLog;