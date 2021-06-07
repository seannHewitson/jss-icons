import React from 'react'
import { createUseStyles } from 'react-jss'

import Icon, { IconProps } from './icon'

const useStyles = createUseStyles({
    hamburgerAlt: {
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
            top: 'auto !important',
            left: 'auto !important',
            right: '0 !important',
            bottom: '-.35em !important'
        }
    },
})

export const HamburgerAlt = (): string => {
    const classes = useStyles();

    return classes.hamburgerAlt
}

const HamburgerAltIcon = (props: IconProps): JSX.Element => {
    const classes = useStyles();

    return (
        <Icon icon={classes.hamburgerAlt} {...props} />
    )
}

export default HamburgerAltIcon