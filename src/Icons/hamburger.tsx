import React from 'react'
import { createUseStyles } from 'react-jss'

import Icon, { IconProps } from './icon'

const useStyles = createUseStyles({
    hamburger: {
        width: '1em',
        height: '100%',
        '&:after,&:before': {
            top: '-.35em',
            height: '100%',
            bottom: 'auto',
            left: '50%',
            transform: 'translateX(-50%)'
        },
        '&:before': {
            top: 'auto !important',
            bottom: '-.35em !important'
        }
    },
})

export const Hamburger = (): string => {
    const classes = useStyles();

    return classes.hamburger
}

const HamburgerIcon = (props: IconProps): JSX.Element => {
    const classes = useStyles();

    return (
        <Icon icon={classes.hamburger} {...props} />
    )
}

export default HamburgerIcon