import React, { Component } from 'react';
import './Stage.css';

class Stage extends Component {
  render() {
    return <div className="container grid-row">
        {this.props.onStage.map((person) =>
            <div className="grid-item col-1"> 
                <div className="person-name">{person.name}</div>   
                <img className="avatar-on-stage" src={person.avatar} alt="{person.name} avatar" />    
            </div>
        )}
    </div>
  }
}

export default Stage;