import React from 'react'
import { createUseStyles } from 'react-jss'

import Icon, { IconProps } from './icon'

const useStyles = createUseStyles({
    hamburgerAltReverse: {
        width: '1em',
        height: '100%',
        '&:after,&:before': {
            top: '-.35em',
            right: 0,
            left: 'auto',
            width: '.5em',
            bottom: 'auto',
        },
        '&:before': {
            top: 'auto !important',
            right: 'auto !important',
            left: '0 !important',
            bottom: '-.35em !important'
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