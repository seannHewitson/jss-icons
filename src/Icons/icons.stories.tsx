import * as React from 'react'
import {
    Icon,
    Beehive,
    BeehiveIcon,
    Close,
    CloseIcon,
    Hamburger,
    HamburgerIcon,
    HamburgerAlt,
    HamburgerAltIcon,
    HamburgerAltReverse,
    HamburgerAltReverseIcon,
} from './index'

export default { title: 'Icons' }

//  Beehive
export const _Beehive = () => <BeehiveIcon />
export const _BeehiveIcon = () => <Icon icon={Beehive()} clickIcon={Close()} style={{fontSize: '5em'}} />

//  Close
export const _Close = () => <CloseIcon />
export const _CloseIcon = () => <Icon icon={Close()} />

//  Hamburger
export const _Hamburger = () => <HamburgerIcon />
export const _HamburgerIcon = () => <Icon icon={Hamburger()} hoverIcon={Close()} style={{fontSize: '5em'}} />
//  HamburgerAlt
export const _HamburgerAlt = () => <HamburgerAltIcon />
export const _HamburgerAltIcon = () => <Icon icon={HamburgerAlt()} />
//  HamburgerAltReverse
export const _HamburgerAltReverse = () => <HamburgerAltReverseIcon />
export const _HamburgerAltReverseIcon = () => <Icon icon={HamburgerAltReverse()} />