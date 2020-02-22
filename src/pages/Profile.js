import React, { Component } from 'react'
import { Container,Grid, Paper, withStyles, Avatar } from '@material-ui/core';


const styles = theme => ({
    root: {
        marginTop:'3.5%',
        
    },
    Container:{
        padding:'20px',
        paddingTop:'0px'
    },
    paper: {

        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    large: {
        width: theme.spacing(23),
        height: theme.spacing(23),
    },
    Avatar: {
        position: 'absolute',
        left: '8%',
        top: '70%',
        [theme.breakpoints.down("sm")]: {
            position: 'absolute',
            left: '20%',
            top: '70%',
        }
    }
});


class Profile extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Container>
                    <Grid container spacing={2} className={classes.Container}>
                        <Grid item xs={12}>
                            <div style={{ position: 'relative' }}>
                                <img src="https://il3.picdn.net/shutterstock/videos/13734893/thumb/1.jpg" height="250px" width="100%"></img>
                                <div className={classes.Avatar}>
                                    <Avatar alt="Cindy Baker" src="https://p7.hiclipart.com/preview/340/956/944/computer-icons-user-profile-head-ico-download.jpg" className={classes.large} />
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={4}>

                            <div style={{ textAlign: 'center', color: 'black' }}>
                                <div style={{ marginTop: '28%' }}>
                                    <div>
                                        <span style={{ color: 'black' }}>Md Mizanur Rahaman</span>
                                    </div>
                                    <div>
                                      <label style={{color:'black'}}>Phone: 01830791133</label>
                                    </div>
                                    <div>
                                      <label style={{color:'black'}}>Address: 57/ka,Leakcircus Kolabagan </label>
                                    </div>
                                    <div>
                                      <label style={{color:'black'}}>Email:dev.mizan4392@gmail.com </label>
                                    </div>

                                    <div style={{textAlign:'center'}}>
                                        <div style={{display:'flex',color:'black',justifyContent:'center'}}>
                                            <div><p style={{color:'black'}}>4.5</p></div>
                                            <div>
                                                <p style={{color:'black'}}>star</p>
                                                <p style={{color:'black'}}>rating</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Paper className={classes.paper}>
                                <img src="https://il3.picdn.net/shutterstock/videos/13734893/thumb/1.jpg" height="280px" width="100%"></img>
                            </Paper>
                        </Grid></Grid>
                </Container>

            </div>
        )
    }
}

export default withStyles(styles)(Profile)
