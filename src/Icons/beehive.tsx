import React from 'react'
import { createUseStyles } from 'react-jss'

import Icon, { IconProps, IconStyle } from './icon'

const useStyles = createUseStyles({
    beehive: {
        ...IconStyle,
        width: '1em',
        height: '100%',
        '&:after,&:before': {
            top: '-.35em',
            bottom: 'auto',
            width: '.5em',
            height: '100%',
            left: '50%',
            transform: 'translateX(-50%)'
        },
        '&:before': {
            top: 'auto !important',
            bottom: '-.35em !important'
        }
    },
})

export const Beehive = (): string => {
    const classes = useStyles();

    return classes.beehive
}

const BeehiveIcon = (props: IconProps): JSX.Element => {
    const classes = useStyles();

    return (
        <Icon icon={`${classes.beehive}`} {...props} />
    )
}

export default BeehiveIcon