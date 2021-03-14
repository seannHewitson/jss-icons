import React from 'react'
import { createUseStyles } from 'react-jss'

import Icon, { IconProps, IconStyle } from './icon'

const useStyles = createUseStyles({
    hamburger: {
        ...IconStyle,
        width: '1em',
        height: '100%',
        '&:after,&:before': {
            top: '-.35em',
            height: '100%',
            bottom: 'auto',
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