import { Container, Fab, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BackgroundImage from './Assets/Scene_Plants.png';



const useStyles = makeStyles(theme => ({
    container: {
        textAlign: 'center',
        justifyContent: 'center',
        padding: '10px',
    },
    background: {
        background: `url(${BackgroundImage}) no-repeat`,
        backgroundPosition: 'center center',
    },
    root: {
        padding: "250px",
        textAlign: 'center',
        justifyContent: 'center',
    },
    circle: {
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'middle',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        padding: '15px',
        cursor: 'pointer',
        color: 'rgb(100%, 100%, 100%)'
    },
    colorMiddle: {
        backgroundColor: 'rgb(226, 125, 96, 0.8)',
        '&:hover': {
            backgroundColor: 'rgb(226, 125, 96, 1)'
        }
    },
    colorLeft: {
        backgroundColor: 'rgb(65, 179, 163, 0.8)',
        '&:hover': {
            backgroundColor: 'rgb(65, 179, 163, 1)'
        }
    },
    colorRight: {
        backgroundColor: 'rgb(195, 141, 158, 0.8)',
        '&:hover': {
            backgroundColor: 'rgb(195, 141, 158, 1)'
        }
    },
    circleLeft: {
        left: '15px',
        width: '110px',
        height: '110px',
    },
    circleMiddle: {

    },
    circleRight: {
        left: '-15px',
        width: '105px',
        height: '105px',
    },
    mediumButton: {
        width: '130px',
        height: '130px',
    },
    smallButton: {
        width: '120px',
        height: '120px',
    },
    bigButton: {
        width: '150px',
        height: '150px',
    },
    label: {
        flexDirection: 'column',
    },
    textColorWhite: {
        color: 'rgb(100%, 100%, 100%)',
    }
}));
export default function Header() {
    const classes = useStyles();
    return (
        <Paper maxWidth="md" elevation={0} className={classes.container + ' ' + classes.background}>
            <Container>
                <Typography classe={classes.headerTitle} variant={'h4'}>The Business Name</Typography>
                <div className={classes.root}>
                    <Typography variant="h2" className={classes.centralText}>
                        The Art of Business
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Hungry for Business
                    </Typography>

                    <Fab className={classes.bigButton + ' ' + classes.circleLeft + ' ' + classes.colorLeft + ' ' + classes.textColorWhite} classes={{ label: classes.label }}>
                        <Typography>Learn More About Us</Typography>
                        <ExpandMoreIcon />
                    </Fab>

                    <Fab className={classes.mediumButton + ' ' + classes.circleMiddle + ' ' + classes.colorMiddle + ' ' + classes.textColorWhite} classes={{ label: classes.label }}>
                        <Typography>Look At Our Work</Typography>
                        <ExpandMoreIcon />
                    </Fab>

                    <Fab className={classes.smallButton + ' ' + classes.circleRight + ' ' + classes.colorRight + ' ' + classes.textColorWhite} classes={{ label: classes.label }}>
                        <Typography>Get In Contact</Typography>
                        <ExpandMoreIcon />
                    </Fab>
                </div>
            </Container>
        </Paper>
    );
}