import { PureComponent } from "react";


export default class PureCounterComponent extends PureComponent {
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
        }else {
            this.setState({ ...this.state, count: this.state.count })
            
        }
    };

    handleToggle = () => {
        this.setState({ ...this.state, toggleStatus: !this.state.toggleStatus});
    };

    render() {
        console.log("This is Pure Component", this.state.toggleStatus);
        return (
            <>
                <div>
                    <h1>Pure Component</h1>
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


