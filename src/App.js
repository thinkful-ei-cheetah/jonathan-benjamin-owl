import React, { Component } from 'react';
import './App.css';
import ParticipantList from './ParticipantList.js';
import Stage from './Stage.js';
import ChatLog from './ChatLog.js';

class App extends Component {
  
  render() {
   
    return <div>
      <ParticipantList participants={this.props.store.participants.filter(person => person.inSession)}/>
      <ParticipantList participants={this.props.store.participants.filter(person => !person.inSession)} />
      <Stage onStage={this.props.store.participants.filter(person => person.onStage)}/>
      <ChatLog participants={this.props.store.participants} chatEvents={this.props.store.chatEvents}/>
    </div>
  }
}

export default App;