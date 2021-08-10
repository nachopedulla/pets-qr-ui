
import React from 'react';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    header: {
        display: 'flex',
        width: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
        justifyContent: 'space-between',
        fontFamily: 'monospace',
        backgroundColor: '#c0c5d4',
        border: '1px solid #b5afaf',
        '@media(max-width: 600px)': {
            display: 'block'
        }
    },
    menu: {
        listStyle: 'none',
        display: 'flex',
        margin: '0',
        height: '70px',
        '@media(max-width: 600px)': {
            width: '101%',
            padding: '0'
        }
    },
    menuItem: {
        width: '105px',
        textAlign: 'center',
        display: 'flex',
        margin: '8px 5px',
        borderRadius: '8px',
        padding: '0px',
        backgroundColor: '#5f82a0',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '.9rem',
        color: 'white',
        '&:hover': {
            backgroundColor: '#739ec3',
            cursor: 'pointer'
        },
        '@media(max-width: 600px)': {
            margin: '0',
            borderRadius: '0',
            width: '33%',
        }
    },
    title: {
        marginLeft: '20px',
        fontSize: '1.4rem'
    }
})

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <p className={classes.title}>Mascotas QR</p>
            <ul className={classes.menu}>
                <li className={classes.menuItem}>Nosotros</li>
                <li className={classes.menuItem}>Obtener QR</li>
                <li className={classes.menuItem}>Log in</li>
            </ul>    
        </div>
    )
}

export default Header;