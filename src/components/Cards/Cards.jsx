import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    if (!confirmed){
        return 'Loading...'
    }

    return (

        <div className={styles.container}>
            <Grid container spacing={3} justify="center"> 
                {/* xs and medium is so we can use the site on mobile */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} durations={2.5} seperator=","/>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>  
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} durations={2.5} seperator=","/>
                            </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>  
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} durations={2.5} seperator=","/>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;