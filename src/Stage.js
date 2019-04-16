import React, { Component } from 'react';

class Stage extends Component {
  render() {
    return <div>
        {this.props.onStage.map((person) =>
            <div>
                <div>{person.id}</div>  
                <div>{person.avatar}</div>   
                <div>{person.name}</div>   
                <div>{person.inSession}</div>   
                <div>{person.onStage}</div>       
            </div>
        )}
    </div>
  }
}

export default Stage;