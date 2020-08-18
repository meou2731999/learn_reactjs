import React, { Component } from 'react'
class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank for subcribing'
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.changeMessage()}>Subcrible</button>
            </div>
        )
    }
}

export default Message