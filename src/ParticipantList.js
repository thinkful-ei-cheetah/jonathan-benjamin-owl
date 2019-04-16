import React, { Component } from 'react';

export default class ParticipantList extends Component {
  render() {
    return <div>
      <div className="Participant-list">
        {this.props.partcipants.map((person) =>
            <div>
                <div>{person.id}</div>  
                <div>{person.avatar}</div>   
                <div>{person.name}</div>   
                <div>{person.inSession}</div>   
                <div>{person.onStage}</div>       
            </div>
        )}
        </div>
    </div>
  }
}