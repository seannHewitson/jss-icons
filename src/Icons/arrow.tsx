import React from 'react'
import { createUseStyles } from 'react-jss'

import Icon, { IconProps } from './icon'

const useStyles = createUseStyles({
    arrow: {
        '&.up,&.down': {
            transform: 'translate(-50%, -50%) rotate(-90deg)'
        },
        '&:after,&:before': {
            width: '35%',
            top: 'auto',
            left: '-.03em',
            right: 'auto',
            bottom: '-.03em',
            transformOrigin: 'left',
            transform: 'rotate(-45deg)'
        },
        '&:before': {
            top: '-.03em',
            bottom: 'auto',
            transform: 'rotate(45deg) !important',
        },
        '&.up:after,&.up:before,&.right:after,&.right:before': {
            left: 'auto',
            right: '-.03em',
            top: '.03em',
            transformOrigin: 'right',
            transform: 'rotate(45deg)',
        },
        '&.up:before,&.right:before': {
            top: '-.03em !important',
            transform: 'rotate(-45deg) !important'
        },
        '&.horizontal:before, &.horizontal:after,&.vertical:before, &.vertical:after': {
            top: '0',
            left: '0',
            width: '.25em',
            height: '.25em',
            background: 'transparent',
            borderTop: '.1em solid black',
            borderLeft: '.1em solid black',
            transformOrigin: 'left',
            borderRadius: '.25rem',
            transform: 'rotate(-45deg) !important'
        },
        '&.horizontal:after,&.vertical:after': {
            right: '1.25rem',
            left: 'auto',
            transformOrigin: 'right',
            transform: 'rotate(135deg) !important'
        },
        '&.vertical': {
            transform: 'translate(-50%, -50%) rotate(90deg)'
        },
    }
})

interface ArrowProps extends IconProps {
    dir?: 'up' | 'down' | 'left' | 'right' | 'horizontal' | 'vertical'
}

const upArrowProps: ArrowProps = { dir: 'up' }
const downArrowProps: ArrowProps = { dir: 'down' }
const leftArrowProps: ArrowProps = { dir: 'left' }
const rightArrowProps: ArrowProps = { dir: 'right' }
const horizontalArrowProps: ArrowProps = { dir: 'horizontal' }
const verticalArrowProps: ArrowProps = { dir: 'vertical' }

export const Arrow = (props = rightArrowProps): string => {
    const dir = props.dir?? 'right'
    const classes = useStyles()
    return `${classes.arrow} ${dir}`
}

export const UpArrow = (): string => Arrow(upArrowProps)

export const DownArrow = (): string => Arrow(downArrowProps)

export const LeftArrow = (): string => Arrow(leftArrowProps)

export const RightArrow = (): string => Arrow(rightArrowProps)

export const HorizontalArrow = (): string => Arrow(horizontalArrowProps)

export const VerticalArrow = (): string => Arrow(verticalArrowProps)


const ArrowIcon = (props: ArrowProps): JSX.Element => {
    const { dir, ...rest } = props

    const arrowDir = dir?? 'right'

    const classes = useStyles()
    return <Icon icon={`${classes.arrow} ${arrowDir}`} {...rest} />
}

export const UpArrowIcon = (props: IconProps): JSX.Element => ArrowIcon({
    ...upArrowProps,
    ...props
})

export const DownArrowIcon = (props: IconProps): JSX.Element => ArrowIcon({
    ...downArrowProps,
    ...props
})
export const LeftArrowIcon = (props: IconProps): JSX.Element => ArrowIcon({
    ...leftArrowProps,
    ...props
})
export const RightArrowIcon = (props: IconProps): JSX.Element => ArrowIcon({
    ...rightArrowProps,
    ...props
})
export const HorizontalArrowIcon = (props: IconProps): JSX.Element => ArrowIcon({
    ...horizontalArrowProps,
    ...props
})
export const VerticalArrowIcon = (props: IconProps): JSX.Element => ArrowIcon({
    ...verticalArrowProps,
    ...props
})

export default ArrowIcon