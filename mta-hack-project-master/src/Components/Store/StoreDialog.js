import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PictureGrid from './PictureGrid';


export default class StoreDialog extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    onPictureClicked = pictureId =>{
        console.log(pictureId);
    }

    render() {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="OK"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                {/*<RaisedButton className="avatar-store-btn"  onClick={this.handleOpen} img="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/shop-icon.png" />*/}

                <button className="avatar-store-btn" onClick={this.handleOpen}><img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/shop-icon.png" /></button>

                <Dialog
                    title="Avatar Store"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <PictureGrid onPictureClicked={this.props.onPictureClicked}> </PictureGrid >
                </Dialog>
            </div>
        );
    }
}
