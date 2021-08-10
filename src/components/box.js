import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    box: {
        width: '330px',
        textAlign: 'justify',
        padding: '15px',
        
        marginBottom: '10px'
    }, 
    title: {
        fontSize: '1.1rem',
        fontWeight: '500'
    },
    imageContainer: {
        margin: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    image: {
        borderCollapse: 'collapse',
        display: 'inline-block',
        padding: '0 25px',
        borderRadius: '50%',
        alignItems: 'center',
        width: '150px',
        height: '150px'
    }
})

const Box = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.box}>
            <div className={classes.imageContainer}>
                <img className={classes.image} src={props.image}/>
            </div>
            <div>
                <p className={classes.title}>{props.title}</p>
                <p>{props.text}</p>
                {props.children}
            </div>
        </div>
    )
}

export default Box;