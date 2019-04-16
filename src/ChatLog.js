import React, { Component } from 'react';

class ChatLog extends Component {


    
    constructor(props)
    {
        super(props);
        console.log(this.props.chatEvents);
        this.props.chatEvents.map((chat) => {
            chat.name = (this.props.participants.find((person) => person.id === chat.participantId)).name
            chat.avatar = (this.props.participants.find((person) => person.id === chat.participantId)).avatar
                }
            )

            

    }

  render() {
    return <div>
        {this.props.chatEvents.map((chat) =>
           
            <div>
                <div>{chat.name}</div>  
                <div>{chat.type}</div>   
                <div>{chat.messsage}</div>   
                <div>{chat.avatar}</div>   
                <div>{new Date(chat.time).toString()}</div>  
                <div>{new Date(chat.timestamp).toString()}</div>         
            </div>
        )}
    </div>
  }
}

export default ChatLog;