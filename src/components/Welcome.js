import React, { Component } from 'react'
class Welcome extends Component{
    render(){    
        const {name, lastName} = this.props
        return <h1>Welcome {name} {lastName}</h1>
    }
}

export default Welcome