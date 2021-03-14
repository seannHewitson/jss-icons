import * as React from 'react'
import {
    Icon,
    Beehive, BeehiveIcon,
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

//  Beehive
export const _Beehive = () => <BeehiveIcon style={defaultStyle} />
export const _BeehiveIcon = () => <Icon icon={Beehive()} clickIcon={Close()} style={defaultStyle} />
//  Close
export const _Close = () => <CloseIcon style={defaultStyle} />
export const _CloseIcon = () => <Icon icon={Close()} style={defaultStyle} />
//  Hamburger
export const _Hamburger = () => <HamburgerIcon style={defaultStyle} />
export const _HamburgerIcon = () => <Icon icon={Hamburger()} clickIcon={Close()} style={defaultStyle} />
//  HamburgerAlt
export const _HamburgerAlt = () => <HamburgerAltIcon style={defaultStyle} />
export const _HamburgerAltIcon = () => <Icon icon={HamburgerAlt()} clickIcon={Close()} style={defaultStyle} />
//  HamburgerAltReverse
export const _HamburgerAltReverse = () => <HamburgerAltReverseIcon style={defaultStyle} />
export const _HamburgerAltReverseIcon = () => <Icon icon={HamburgerAltReverse()} clickIcon={Close()} style={defaultStyle} />
//  Plus
export const _Plus = () => <PlusIcon style={defaultStyle} />
export const _PlusIcon = () => <Icon icon={Plus()} clickIcon={Close()} style={defaultStyle} />