import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';


import {
    blue300,
    indigo900,
    orange200,
    deepOrange300,
    pink400,

} from 'material-ui/styles/colors';

export default class StudentProgress extends React.Component {
    state = {
        completed: this.props.progress,
    };
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         completed: this.props.progress,
    //     };
    // }
    //
    // componentDidMount() {
    //     this.timer = setTimeout(() => this.progress(5), 1000);
    // }
    //
    // componentWillUnmount() {
    //     clearTimeout(this.timer);
    // }

    // progress(completed) {
    //     if (completed > 100) {
    //         this.setState({completed: 100});
    //     } else {
    //         this.setState({completed});
    //         const diff = Math.random() * 10;
    //         this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    //     }
    // }

    render() {
        return (
            <LinearProgress mode="determinate" value={this.state.completed}/>
        );
    }
}