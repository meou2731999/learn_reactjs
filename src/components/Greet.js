import React from 'react'

// function Greet(){
//     return <h1>Hello Quan</h1>
// }
const Greet = props => {
    const {name, lastName} = props
    return <h1>Hello {name} {lastName}</h1>
}
export default Greet