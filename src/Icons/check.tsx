import React from 'react'
import { createUseStyles } from 'react-jss'

import Icon, { IconProps } from './icon'

const useStyles = createUseStyles({
    check: {
        width: '.7em',
        transform: 'translate(-50%, -50%) rotate(-35deg) !important',
        '&:after': {
            top: '.05em',
            left: '-.25em',
            bottom: 'auto',
            width: '.3em',
            transformOrigin: 'right',
            transform: 'rotate(90deg) !important'
        }
    },
})

export const Check = (): string => {
    const classes = useStyles()
    return classes.check
}
const CheckIcon = (props: IconProps): JSX.Element => {
    const classes = useStyles()
    return (
        <Icon icon={`${classes.check}`} {...props} />
    )
}

export default CheckIcon