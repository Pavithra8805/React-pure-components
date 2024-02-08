import { Component } from "react";

class SimpleCounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            toggleStatus: true,
        };
    }

    handleInc = () => {
        if(this.state.toggleStatus){
            this.setState({...this.state, count: this.state.count + 1});
        } else {
            this.setState({ ...this.state, count: this.state.count });
        }
    };

    handleToggle = () => {
        this.setState({ ...this.state, toggleStatus: !this.state.toggleStatus});
    };

    render() {
        console.log("This is Simple Component", this.state.toggleStatus);
        return (
            <>
                <div>
                    <h1>Simple Component</h1>
                    <h3>{this.state.count}</h3>
                </div>
                <div>
                    <button onClick={this.handleToggle}>Set Toggle</button>
                    <button onClick={this.handleInc}>Counter</button>
                </div>
            </>
        );
    }
}

export default SimpleCounterComponent;