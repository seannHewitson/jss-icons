import React from 'react'
import {
    Icon,
    Arrow, ArrowIcon,
    DownArrow, DownArrowIcon,
    LeftArrow, LeftArrowIcon,
    RightArrow, RightArrowIcon,
    UpArrow, UpArrowIcon,
    Beehive, BeehiveIcon,
    Check, CheckIcon,
    Chevron, ChevronIcon,
    DownChevron, DownChevronIcon,
    LeftChevron, LeftChevronIcon,
    RightChevron, RightChevronIcon,
    UpChevron, UpChevronIcon,
    HorizontalArrow, HorizontalArrowIcon,
    VerticalArrow, VerticalArrowIcon,
    Close, CloseIcon,
    Hamburger, HamburgerIcon,
    HamburgerAlt, HamburgerAltIcon,
    HamburgerAltReverse, HamburgerAltReverseIcon,
    Plus, PlusIcon
} from './index'

export default { title: 'Icons' }

const defaultStyle = {
    fontSize: '5em',
}

//  Conditional
export const _Conditional = () => {
    const [condition, setCondition] = React.useState(false)

    const onclick = () => {
        setCondition(!condition)
    }

    return (
        <div onClick={onclick}>
            <Icon
                icon={Beehive()}
                conditionIcon={Arrow()}
                condition={condition}
                style={defaultStyle}
            />
        </div>
    )
}

//  Arrows
export const _Arrow = () => <Icon icon={Arrow()} style={defaultStyle} />
export const _ArrowIcon = () => <ArrowIcon style={defaultStyle} />

export const _DownArrow = () => <Icon icon={DownArrow()} style={defaultStyle} />
export const _DownArrowIcon = () => <DownArrowIcon style={defaultStyle} />

export const _LeftArrow = () => <Icon icon={LeftArrow()} style={defaultStyle} />
export const _LeftArrowIcon = () => <LeftArrowIcon style={defaultStyle} />

export const _RightArrow = () => <Icon icon={RightArrow()} style={defaultStyle} />
export const _RightArrowIcon = () => <RightArrowIcon style={defaultStyle} />

export const _UpArrow = () => <Icon icon={UpArrow()} style={defaultStyle} />
export const _UpArrowIcon = () => <UpArrowIcon style={defaultStyle} />

export const _HorizontalArrow = () => <Icon icon={HorizontalArrow()} style={defaultStyle} />
export const _HorizontalArrowIcon = () => <HorizontalArrowIcon style={defaultStyle} />

export const _VerticalArrow = () => <Icon icon={VerticalArrow()} style={defaultStyle} />
export const _VerticalArrowIcon = () => <VerticalArrowIcon style={defaultStyle} />


//  Beehive
export const _Beehive = () => <BeehiveIcon style={defaultStyle} />
export const _BeehiveIcon = () => <Icon icon={Beehive()} style={defaultStyle} />
//  Check
export const _Check = () => <CheckIcon style={{fontSize: '5rem'}} bold />
export const _CheckIcon = () => <Icon icon={Check()} style={defaultStyle} />

//  Chevrons
export const _Chevron = () => <Icon icon={Chevron()} style={defaultStyle} />
export const _ChevronIcon = () => <ChevronIcon style={defaultStyle} />

export const _DownChevron = () => <Icon icon={DownChevron()} style={defaultStyle} />
export const _DownChevronIcon = () => <DownChevronIcon style={defaultStyle} />

export const _LeftChevron = () => <Icon icon={LeftChevron()} style={defaultStyle} />
export const _LeftChevronIcon = () => <LeftChevronIcon style={defaultStyle} />

export const _RightChevron = () => <Icon icon={RightChevron()} style={defaultStyle} />
export const _RightChevronIcon = () => <RightChevronIcon style={defaultStyle} />

export const _UpChevron = () => <Icon icon={UpChevron()} style={defaultStyle} />
export const _UpChevronIcon = () => <UpChevronIcon style={defaultStyle} />

//  Close
export const _Close = () => <CloseIcon style={defaultStyle} />
export const _CloseIcon = () => <Icon icon={Close()} style={defaultStyle} />
//  Hamburger
export const _Hamburger = () => <HamburgerIcon style={defaultStyle} />
export const _HamburgerIcon = () => <Icon icon={Hamburger()} style={defaultStyle} />
//  HamburgerAlt
export const _HamburgerAlt = () => <HamburgerAltIcon style={defaultStyle} />
export const _HamburgerAltIcon = () => <Icon icon={HamburgerAlt()} style={defaultStyle} />
//  HamburgerAltReverse
export const _HamburgerAltReverse = () => <HamburgerAltReverseIcon style={defaultStyle} />
export const _HamburgerAltReverseIcon = () => <Icon icon={HamburgerAltReverse()} style={defaultStyle} />
//  Plus
export const _Plus = () => <PlusIcon style={defaultStyle} />
export const _PlusIcon = () => <Icon icon={Plus()} style={defaultStyle} />