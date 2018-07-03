/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

const tilesData = [
    {
        img: 'https://image.ibb.co/nr7wwF/hat.png',
        title: 'Hat',
    },
    {
        img: 'https://image.ibb.co/miDrVa/pants.png',
        title: 'Pants',
    },
    {
        img: 'https://image.ibb.co/jfXkqa/pipe.png',
        title: 'Pipe',
    },
    {
        img: 'https://image.ibb.co/kV6pGF/sunglasses.png',
        title: 'Sunglasses',
    }
];

export default class PictureGrid extends React.Component {

    render() {
        return (<div style={styles.root}>
            <GridList style={styles.gridList} cellHeight={180}>
                {
                    tilesData.map((tile) => (
                        <GridTile
                            key={tile.img}
                            title={tile.title}
                            actionIcon={<IconButton>
                                <StarBorder color="white"/></IconButton>}>
                            <img onClick={() => {
                                this.props.onPictureClicked(tile.img);
                            }}
                                 src={tile.img}/>
                        </GridTile>
                    ))}
            </GridList>
        </div>)
    }
}



