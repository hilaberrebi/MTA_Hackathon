import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


class ShowExerciseDialog extends React.Component {

    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleSubmit = () => {
        // this.props.handleOnAnswerSubmit();
        this.setState({open: false});
    };


    render() {

        let style = {
            margin: 6
        };
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={false}
                onClick={ ()=> {
                    this.handleSubmit();
                    this.props.handleOnAnswerSubmit(this.props.questionNumber);
                }
                }
            />,
        ];

        return (
            <div>
                <RaisedButton label="Submit Answer" onClick={this.handleOpen}/>
                <Dialog
                    title={this.props.title}
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    {this.props.questionText}
                    <input type="text" placeholder="Enter your answer here"/>
                </Dialog>
            </div>
        );
    }
}

export default ShowExerciseDialog;
