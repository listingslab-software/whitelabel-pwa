import React from 'react'
// import { useHistory } from 'react-router-dom'
import { 
    useDispatch,
} from 'react-redux'
import {
    makeStyles,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core/'
import { 
    Icon,
} from './'

const useStyles = makeStyles(theme => ({
}))

export default function MenuList(props) {

  const classes = useStyles()
  const dispatch = useDispatch()
  // const history = useHistory()
  
  return  <List className={classes.none}>

            <ListItem 
              button
              onClick={(e) => {
                console.log (`history.push('/')`)
                e.preventDefault()
                dispatch({type: `APP/MENU_OPEN`, menuOpen: false})
              }}>

              <ListItemIcon>
                <Icon icon={`home`} color={`primary`} />
              </ListItemIcon>

              <ListItemText 
                primary={`Home`}
                secondary={`Click here`}
              />
            </ListItem>
          
          </List>
}
