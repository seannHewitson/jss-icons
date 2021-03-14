import React from 'react'
import { createUseStyles } from 'react-jss'

import Icon, { IconProps } from './icon'

const useStyles = createUseStyles({
    hamburgerAltReverse: {
        width: '1em',
        height: '100%',
        '&:after,&:before': {
            top: '-.35em',
            left: 0,
            right: 'auto',
            width: '.5em',
            bottom: 'auto',
        },
        '&:before': {
            top: 'auto',
            left: 'auto',
            right: 0,
            bottom: '-.35em'
        }
    },
})

export const HamburgerAltReverse = (): string => {
    const classes = useStyles();

    return classes.hamburgerAltReverse
}

const HamburgerAltReverseIcon = (props: IconProps): JSX.Element => {
    const classes = useStyles();

    return (
        <Icon icon={classes.hamburgerAltReverse} {...props} />
    )
}

export default HamburgerAltReverseIcon