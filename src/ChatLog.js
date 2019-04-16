import React, { Component } from 'react';
class ChatLog extends Component {

formattedChats()
{
    //this.props.partcipants
    //this.props.chatEvents
    return this.props.chatEvents.map((chat) => {
        chat.name = (this.props.partcipants.find((person) => person.id === chat.participantId)).name
        chat.avatar = (this.props.partcipants.find((person) => person.id === chat.participantId)).avatar
            }
         );

}

  render() {
    return <div>
        {this.formattedChats.map((chat) =>
            <div>
                <div>{chat.name}</div>  
                <div>{chat.type}</div>   
                <div>{chat.messsage}</div>   
                <div>{chat.avatar}</div>   
                <div>{new Date(chat.time)}</div>  
                <div>{new Date(chat.timestamp)}</div>         
            </div>
        )}
    </div>
  }
}

export default ChatLog;