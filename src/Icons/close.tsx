import React from 'react'
import { createUseStyles } from 'react-jss'

import Icon, { IconProps } from './icon'

const useStyles = createUseStyles({
    close: {
        width: '1em',
        transform: 'translate(-50%, -50%) rotate(-45deg) !important',
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
            top: 'auto',
            bottom: '0',
            left: '50%',
            transformOrigin: 'left'
        }
    },
})

export const Close = (): string => {
    const classes = useStyles();

    return classes.close
}

const CloseIcon = (props: IconProps): JSX.Element => {
    const classes = useStyles();

    return (
        <Icon icon={`${classes.close}`} {...props} />
    )
}

export default CloseIcon