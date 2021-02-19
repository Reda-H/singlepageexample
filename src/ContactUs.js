import { Box, Button, FormControl, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import PhoneIcon from '@material-ui/icons/Phone';


const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 1,
        // backgroundImage: `url(${BackgroundImage})`,
    },
    root: {
        backgroundColor: 'rgb(195, 225, 229)',
        padding: "150px",
        textAlign: 'center',
        justifyContent: 'center',
    },
    textArea: {
        minHeight: '300px',
    },
    title: {
        margin: '0 0 50px 0'
    },
    leftGridDivider: {
        borderRight: '0.1em solid rgb(128,128,128)',
        padding: '0.5em',
    },
}));

export default function ContactUs() {
    const classes = useStyles();
    return (
        <Box maxWidth="md" elevation={0} className={classes.container + ' ' + classes.background}>
            <div className={classes.root}>
                <Typography className={classes.title} variant={'h4'}>Want to ask questions ? Help ? A Tour ?</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} className={classes.leftGridDivider}>
                        <Grid container direction={'column'} spacing={4}>
                            <Grid item>
                                <Typography variant={'h4'}>Give us a call, we are available 24/7 !</Typography>
                            </Grid>
                            <Grid item>
                                <Button variant={'outlined'} color={'primary'} size={'large'} startIcon={<PhoneIcon />}>+2126123123123</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Grid container direction={'column'} spacing={2}>
                            <Grid item>
                                <FormControl fullWidth noValidate autoComplete={'off'}>
                                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <TextField id="outlined-basic" label="Company" variant="outlined" />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <FormControl fullWidth noValidate autoComplete={'off'}>
                                    <TextField id="outlined-basic" label="Your Message" variant="outlined" multiline />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
}