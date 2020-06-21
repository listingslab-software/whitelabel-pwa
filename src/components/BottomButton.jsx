import React from 'react'
import {
    makeStyles,
    AppBar,
    Badge,
    Toolbar,
    Fab,
} from '@material-ui/core'
import { Icon } from './'

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    background: 'none',
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}))

export default function BottomButton(props) {
  
  const classes = useStyles()

  return (
    <React.Fragment>
      <AppBar 
        position={`fixed`}
        className={classes.appBar}>
        <Toolbar>
          <Fab 
            className={classes.fabButton}
            color={`primary`} 
            aria-label={`Menu`}
            onClick={(e) => {
              e.preventDefault()
              console.log ('Menu')
            }}>
              <Badge badgeContent={5} color={`secondary`}>
                <Icon icon={`menu`} color={`inherit`} />
              </Badge> 
          </Fab> 
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}