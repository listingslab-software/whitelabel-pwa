import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'
import { 
    useSelector,
    useDispatch 
} from 'react-redux'
import { 
    contentLoad,
} from '../redux/content/actions'

import {
    makeStyles,
    Grid,
    Card,
    CardMedia,
    CardHeader,
    CardContent,
} from '@material-ui/core'
import { 
    TopAppbar,
    // MenuSystem,
} from '../components'
import { AnimatedMachine } from './'
import { 
    getRouteDetails,
    getContentComponent,
} from '../utils/content'

const useStyles = makeStyles(theme => ({
    ssr:{
        margin: 'auto',
        paddingTop: theme.spacing(),
    },
    media: {
        height: 0,
    },
    viewContent:{
        // minHeight: 238,
    },
    view:{
        margin: theme.spacing(),
        padding: theme.spacing(),
        // background: theme.palette.primary.main,
    },
    screen:{
        marginTop: 65,
    }
}))

export default function Public(props) {

    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const contentSlice = useSelector(state => state.content)
    const {
        contentLoaded,
        contentLoading,
    } = contentSlice


    let currentPathname = history.location.pathname
    const routeDetails = getRouteDetails(currentPathname)
    document.title = `${routeDetails.animationTxt} ${routeDetails.subheader}`

    useEffect(() => {
        if (!contentLoaded &&  !contentLoading){
            // console.log ('do it, but only once')
            contentLoad()
        }
        dispatch({type: `APP/PATHNAME`, currentPathname})
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                dispatch({type: `APP/AUTHED`, authed: true})
            } else {
                dispatch({type: `APP/AUTHED`, authed: false})
            }
        })
    }, [dispatch, currentPathname, contentLoaded, contentLoading])

    return <div className={classes.ssr}>
                <TopAppbar />
                <div className={classes.screen}> 
                    
                    <Grid container>

                        
                    

                        <Grid item xs={12} md={6}>
                            <Card className={classes.view}>
                                <CardMedia 
                                    className={classes.media}
                                    component={AnimatedMachine}
                                />
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Card className={classes.view}>
                                <CardHeader
                                    disableTypography
                                    // title={routeDetails.title}
                                    title={routeDetails.subheader}
                                    // avatar={<Icon icon={routeDetails.icon} color={`primary`} />}
                                 />
                                 <CardContent>
                                    <div className={classes.viewContent}>
                                        { getContentComponent(currentPathname) }
                                    </div>
                                 </CardContent>
                            </Card>
                        </Grid>
                    </Grid> 
                </div>
            </div>
}

/*
<Grid item xs={12}>
                            <MenuSystem />
                        </Grid>
*/