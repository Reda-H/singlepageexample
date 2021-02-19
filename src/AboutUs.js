import { Box, Divider, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({
    container: {
        // backgroundImage: `url(${BackgroundImage})`,
    },
    root: {
        padding: "180px",
        textAlign: 'center',
        justifyContent: 'center',
    },
    paper: {
    },
    divider: {
        margin: '10px 0px 10px 0',
    },
    titleReview: {
        fontStyle: 'italic',
    },
    workReviewer: {
        fontStyle: 'italic',
    },
    boldText: {
        fontWeight: 'bold',
    }
}));

export default function AboutUs() {
    const classes = useStyles();
    return (
        <Box maxWidth="lg" elevatiom={0} className={classes.container}>
            <div className={classes.root}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={8} className={classes.leftGrid}>
                        <Paper className={classes.paper} elevation={0}>
                            <Typography variant={'h3'} align={'center'}>Who we are !</Typography>
                            <Divider className={classes.divider}/>
                            <Typography align={'left'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                <br />
                                <br /> 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.rightGrid}>
                        <Paper className={classes.paper} elevation={0} >
                            <Typography variant={'h4'} align={'left'} className={classes.titleReview}>Review</Typography>
                            <Typography align={'left'}>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
                            </Typography>
                            <Typography variant={'overline'} className={classes.boldText}>Jason B. </Typography>
                            <Typography variant={'overline'} className={classes.workReviewer}>Regional Manager</Typography>
                        </Paper>
                        <Divider variant={"middle"} className={classes.divider}/>
                        <Paper className={classes.paper} elevation={0}>
                            <Typography variant={'h4'} align={'left'} className={classes.titleReview}>Review</Typography>
                            <Typography align={'left'}>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
                            </Typography>
                            <Typography variant={'overline'} className={classes.boldText}>Jason B. </Typography>
                            <Typography variant={'overline'} className={classes.workReviewer}>Regional Manager</Typography>
                        </Paper>
                        <Divider variant={"middle"} className={classes.divider} />
                        <Paper className={classes.paper} elevation={0}>
                            <Typography variant={'h4'} align={'left'} className={classes.titleReview}>Review</Typography>
                            <Typography align={'left'}>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
                            </Typography>
                            <Typography variant={'overline'} className={classes.boldText}>Jason B. </Typography>
                            <Typography variant={'overline'} className={classes.workReviewer}>Regional Manager</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
}