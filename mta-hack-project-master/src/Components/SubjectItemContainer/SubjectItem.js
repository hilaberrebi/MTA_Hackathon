import './SubjectItem.css';
import RaisedButton from 'material-ui/RaisedButton';
import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ShowExerciseDialog from './ShowExerciseDialog';

class SubjectItem extends React.Component {

    render() {
        let styleQuestionBtn = {
            margin: 6,
            backgroundColor: 'lightYellow',
            color: 'black'
        };
        let styleAnswerButton = {
            margin: 6,
            border: 'solid 1px',
        };
        let styleItem = {

        };
        return (
            <div style={styleItem}>
                <FlatButton style={styleQuestionBtn} label={this.props.questionText}/>

                <ShowExerciseDialog
                    questionNumber={this.props.questionNumber}
                    questionText={this.props.questionText}
                    title={this.props.title}
                    handleOnAnswerSubmit={this.props.handleOnAnswerSubmit}
                />

                <FlatButton style={styleAnswerButton}
                            label={`Points Awarded:${this.props.points}`}/>
                <hr/>
            </div>
        )

    }
}

export default SubjectItem;
