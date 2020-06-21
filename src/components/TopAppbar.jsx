import React from 'react'
import { 
    useDispatch,
} from 'react-redux'
import {
    makeStyles,
    Avatar,
    AppBar,
    ButtonBase,
    Toolbar,
    Typography,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  icon:{
    marginRight: theme.spacing()
  },
  btnPad:{
    padding: theme.spacing(),
    borderRadius: theme.spacing(0.5),
  }
}))

export default function TopAppbar(props) {
  
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <div className={classes.grow}>
      <AppBar position={`fixed`}>
        <Toolbar className={classes.topToolbar}>
            <div className={classes.grow} /> 
              <ButtonBase
                className={classes.btnPad}
                onClick={(e) => {
                    e.preventDefault()
                    dispatch({type: `APP/MENU_OPEN`, menuOpen: true})
                }}>
                <div className={classes.icon} >
                  <Avatar src={`/svg/WhitelabelLogo.svg`} />
                </div>
                <Typography variant={`h6`} color={`inherit`}>
                  {`Whitelabel PWA ™`}
                </Typography>
              </ButtonBase>
            <div className={classes.grow} />  
        </Toolbar>
      </AppBar>
    </div>
  )
}

/*
<Icon icon={`whitelabel`} color={`white`} />
*/