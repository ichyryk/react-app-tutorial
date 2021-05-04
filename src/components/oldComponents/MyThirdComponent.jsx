import { Component } from 'react'

class MyThirdComponent extends Component { 
    render() { 
        return (
            <div>
                <h2>Class Component</h2>
                <p>In this component I use CLASS</p>
                <p>User: {this.props.name}</p>
            </div>
        )
    }
}

export default MyThirdComponent;