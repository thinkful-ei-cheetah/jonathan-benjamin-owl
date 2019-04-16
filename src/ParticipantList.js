import React, { Component } from 'react';
import './ParticipantList.css';


export default class ParticipantList extends Component {

  sessionStatus(status) {
    return status ? "inSession" : "outOfSession";
  }

  status(sessionStatus, stageStatus) {
    return !sessionStatus ? "left session" : (stageStatus ? "on stage" : "in session")
  }

  render() {
    return ( 
      <div className="Participant-list">
        {this.props.participants.map((person) =>
            <div> 
              <div className="item-row">
                <img className="avatar" src={person.avatar} alt="{person.name} avatar"/>
                <span>{person.name}</span>
              </div>
              <div className="item-row">
                <div className={'status-symbol ' + this.sessionStatus(person.inSession)}></div>   
                <span className="status">{this.status(person.inSession, person.onStage)}</span>
              </div>
            </div>      
        )}
      </div>
    );}
}