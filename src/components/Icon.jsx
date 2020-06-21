import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import IconHome from '@material-ui/icons/Home'
import IconDefault from '@material-ui/icons/Help'
import IconMui from '@material-ui/icons/Palette'
import IconMenu from '@material-ui/icons/MenuOutlined'
import {
    Github,
    WhitelabelLogo,
} from '../plugins/AnimatedSVG/graphics/jsx'

const styles = theme => ({
    iconButton: {
        width: 24,
        height: 24,
    },
    white: {
        color: 'white',
    }
})

class Icon extends Component {

    render() {
        const {
            classes,
            icon,
            color,
        } = this.props
        let iconColor = `primary`
        if (color) {
            iconColor = color
        }
        switch (icon) {

            case `github`:
                return (<Github className={classes.iconButton} color={iconColor} />)

            case `whitelabel`:
                return (<WhitelabelLogo className={classes.iconButton} color={iconColor} />)

            case `mui`:
                return (<IconMui color={iconColor} />)

            case `home`:
                return (<IconHome color={iconColor} />)

            case `menu`:
                return (<IconMenu color={iconColor} />)

            default: {
                return (<IconDefault color={iconColor} />)
            }
        }
    }
}

export default (
    withStyles(styles, { withTheme: true })(Icon)
)
