import React, { Component } from "react";
import { MyContext } from "../App";

class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = { count: props.initialCount}
    }

    render () {
        return (
            <MyContext.Consumer>
                {style => 
                    <div>
                        {/* <h1>Class component</h1> */}
                        <button style={style} onClick={() => this.changeCount(-1)}>-</button>
                        <span>{this.state.count}</span>
                        <button style={style} onClick={() => this.changeCount(1)}>+</button>
                    </div>
                }
                
            </MyContext.Consumer>
            
        )
    }

    changeCount(amount) {
        this.setState(prevState => ({count: prevState.count+amount}))
    }
}

export default Welcome
