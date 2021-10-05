import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {withWidth} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function Gallery({images, width}) {
    const classes = useStyles();

    function getWidth() {
        switch (width) {
            case 'xs':
                return '100%';
            case 'sm':
                return '100%';
            default:
                return '70%';
        }
    }

    return (
        <div className="slide-container">
            <Slide>
                {images.map((image, index) =>
                    <div key={index} className="each-slide">
                        <div className={classes.imgContainer}>
                            <img src={image.src} alt={image.info} className={classes.img}
                                 style={{width: getWidth()}}/>
                            <Typography className={classes.info} variant='h6'>
                                {image.info}
                            </Typography>
                        </div>
                    </div>)}
            </Slide>
        </div>
    )
}

export default withWidth()(Gallery)

const useStyles = makeStyles((theme) => ({
    img: {
        borderRadius: 25,
        boxShadow: '0px 5px 6px -3px rgba(63,81,181,0.4), ' +
            '0px 9px 12px 1px rgba(63,81,181,0.28), ' +
            '0px 3px 16px 2px rgba(63,81,181,0.46)',
        mozBoxShadow: '0px 5px 6px -3px rgba(63,81,181,0.4), ' +
            '0px 9px 12px 1px rgba(63,81,181,0.28), ' +
            '0px 3px 16px 2px rgba(63,81,181,0.46)',
        webkitBoxShadow: '0px 5px 6px -3px rgba(63,81,181,0.4), ' +
            '0px 9px 12px 1px rgba(63,81,181,0.28), ' +
            '0px 3px 16px 2px rgba(63,81,181,0.46)',
    },
    imgContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2)
    },
    info: {
        marginTop: theme.spacing(2),
        fontWeight: 'bold',
    },
}))