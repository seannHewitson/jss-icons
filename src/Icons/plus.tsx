import React from 'react'
import { createUseStyles } from 'react-jss'

import Icon, { IconProps, IconStyle } from './icon'

const useStyles = createUseStyles({
    plus: {
        ...IconStyle,
        width: '1em',
        transform: 'translate(-50%, -50%)',
        height: '100%',
        '&:after,&:before': {
            top: '0',
            left: '0',
            bottom: 'auto',
            width: '.5em',
            transformOrigin: 'right',
            transform: 'rotate(90deg)'
        },
        '&:before': {
            top: 'auto !important',
            bottom: '0 !important',
            left: '50% !important',
            transformOrigin: 'left !important'
        }
    },
})

export const Plus = (): string => {
    const classes = useStyles();

    return classes.plus
}

const PlusIcon = (props: IconProps): JSX.Element => {
    const classes = useStyles();

    return (
        <Icon icon={`${classes.plus}`} {...props} />
    )
}

export default PlusIcon