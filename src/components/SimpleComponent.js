// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            mood: "happy"
        }
    }

    handleClick = ()=>{
        this.setState(()=>{
            if(this.state.mood === "happy"){
                return {mood: "sad"}
            } else {
                return {mood: "happy"}
            }
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        );
    }
}

export default SimpleComponent;