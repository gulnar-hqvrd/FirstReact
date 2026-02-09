import React from 'react'
export class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    handleIncrement = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    componentDidMount() {
        console.log('Component mounted');
    }
    
    render() {
        return (
            <div>  
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }
}
