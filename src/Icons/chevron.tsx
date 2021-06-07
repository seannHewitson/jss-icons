import React from 'react'
import { createUseStyles } from 'react-jss'

import Icon, { IconProps } from './icon'

const useStyles = createUseStyles({
    chevron: {
        width: '75%',
        transform: 'translate(-50%, -50%) rotate(-45deg)',
        '&:after': {
            width: '100%',
            top: 'auto',
            left: '.03em',
            right: 'auto',
            bottom: '.03em',
            transformOrigin: 'left',
            transform: 'rotate(90deg)'
        },
    }
})

interface ChevronProps extends IconProps {
    dir?: 'up' | 'down' | 'left' | 'right'
}

const upChevronProps: ChevronProps = { dir: 'up' }
const downChevronProps: ChevronProps = { dir: 'down' }
const leftChevronProps: ChevronProps = { dir: 'left' }
const rightChevronProps: ChevronProps = { dir: 'right' }

export const Chevron = (props = rightChevronProps): string => {
    const dir = props.dir?? 'right'
    const classes = useStyles()
    return `${classes.chevron} ${dir}`
}

export const UpChevron = (): string => Chevron(upChevronProps)

export const DownChevron = (): string => Chevron(downChevronProps)

export const LeftChevron = (): string => Chevron(leftChevronProps)

export const RightChevron = (): string => Chevron(rightChevronProps)


const ChevronIcon = (props: ChevronProps): JSX.Element => {
    const { dir, ...rest } = props

    const chevronDir = dir?? 'right'

    const classes = useStyles()
    return <Icon icon={`${classes.chevron} ${chevronDir}`} {...rest} />
}

export const UpChevronIcon = (props: IconProps): JSX.Element => ChevronIcon({
    ...upChevronProps,
    ...props
})

export const DownChevronIcon = (props: IconProps): JSX.Element => ChevronIcon({
    ...downChevronProps,
    ...props
})
export const LeftChevronIcon = (props: IconProps): JSX.Element => ChevronIcon({
    ...leftChevronProps,
    ...props
})
export const RightChevronIcon = (props: IconProps): JSX.Element => ChevronIcon({
    ...rightChevronProps,
    ...props
})

export default ChevronIcon