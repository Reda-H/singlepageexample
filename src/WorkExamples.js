import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import CardImageStanding from './Assets/humaaans-standing-23.png';
import CardImageSitting from './Assets/humaaans-sitting-4.png';
import CardImageSitting2 from './Assets/humaaans-sitting-6.png';



const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 1,
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
    cardActions: {
        justifyContent: 'center'
    },
    smallCardRoot: {
    },
    cardRoot: {
        display: 'block',
        maxHeight: '100%',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    cardContentRoot: {
        padding: '0',
    },
    overflowText: {
        overflow: 'auto'
    },
    frontSide: {
        justifyContent: 'center'
    },
    backSideText: {
        textOverflow: 'ellipsis',
        display: 'block',
        maxHeight: '10%',
    },
    flippyBottom: {
        marginTop: '50px',
    },
    flippyLeft: {
        marginRight: '10px',
    },
    flippy: {
        height: '100%',
        width: '100%',
    },
    centerVertically: {
    },
    textCentered: {
        display: 'inline-block',
        verticalAlign: 'middle',
        lineHeight: 'normal',
    }
}));

export default function WorkExamples() {
    const classes = useStyles();

    return (
        <Box maxWidth="md" elevation={0} className={classes.container + ' ' + classes.background}>
            <div className={classes.root}>
                <Grid container spacing={4} alignItems={'center'}>
                    <Grid item xs={12} sm={4} className={classes.centerVertically}>
                        <Typography variant={'h3'} className={classes.textCentered}>Take a look at our Business Work</Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Grid container spacing={2} alignItems={'center'}>
                            <Grid item xs={12} sm={6}>
                                <div className={classes.flippyLeft + ' ' + classes.flippy}>
                                    <Flippy
                                        flipOnHover={true}
                                        flipOnClick={false}
                                    >
                                        <FrontSide className={classes.frontSide}>
                                            <Card className={classes.cardRoot} elevation={0}>
                                                <CardMedia className={classes.cardMedia} component={"img"} image={CardImageStanding} />
                                            </Card>
                                        </FrontSide>
                                        <BackSide>
                                            <Card elevation={0} className={classes.cardRoot}>
                                                <CardContent className={classes.cardContentRoot}>
                                                    <Typography variant={'h5'}> Project Description </Typography>
                                                    <Divider className={classes.divider} />
                                                    <Typography gutterBottom className={classes.backSideText}>
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                                        eos qui ratione voluptatem sequi nesciunt.
                                                    </Typography>
                                                </CardContent>
                                                <CardActions className={classes.cardActions}>
                                                    <Button size="small" color="primary" variant="outlined">
                                                        Learn More
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </BackSide>
                                    </Flippy>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container direction={'column'} spacing={3}>
                                    <Grid item xs={12} sm={12}>
                                        <Flippy
                                            flipOnHover={true}
                                            flipOnClick={false}
                                        >
                                            <FrontSide>
                                                <Card className={classes.smallCardRoot} elevation={0}>
                                                    <Grid
                                                        container
                                                        spacing={0}
                                                        direction="column"
                                                        alignItems="center"
                                                        justify="center"
                                                    >
                                                        <Grid item xs={12} sm={12}>
                                                            <CardMedia className={classes.cardMedia} component={"img"} image={CardImageSitting} />
                                                        </Grid>
                                                    </Grid>
                                                </Card>
                                            </FrontSide>
                                            <BackSide>
                                                <Card elevation={0} className={classes.cardRoot}>
                                                    <Typography variant={'h5'}> Other Project Description </Typography>
                                                    <Divider className={classes.divider} />
                                                    <Typography gutterBottom className={classes.backSideText}>
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                                </Typography>
                                                    <CardActions className={classes.cardActions}>
                                                        <Button size="small" color="primary" variant="outlined">
                                                            Learn More
                                                    </Button>
                                                    </CardActions>
                                                </Card>
                                            </BackSide>
                                        </Flippy>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <Flippy
                                            flipOnHover={true}
                                            flipOnClick={false}
                                            className={classes.flippyBottom}
                                        >
                                            <FrontSide>
                                                <Card className={classes.smallCardRoot} elevation={0}>
                                                    <Grid
                                                        container
                                                        spacing={0}
                                                        direction="column"
                                                        alignItems="center"
                                                        justify="center"
                                                    >
                                                        <Grid item xs={12} sm={12}>
                                                            <CardMedia className={classes.cardMedia} component={"img"} image={CardImageSitting2} />
                                                        </Grid>
                                                    </Grid>
                                                </Card>
                                            </FrontSide>
                                            <BackSide>
                                                <Card elevation={0} className={classes.cardRoot}>
                                                    <Typography variant={'h5'}> Other Project Description </Typography>
                                                    <Divider className={classes.divider} />
                                                    <Typography gutterBottom className={classes.backSideText}>
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                                    </Typography>
                                                    <CardActions className={classes.cardActions}>
                                                        <Button size="small" color="primary" variant="outlined">
                                                            Learn More
                                                </Button>
                                                    </CardActions>
                                                </Card>
                                            </BackSide>
                                        </Flippy>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </div>
        </Box>
    );
}