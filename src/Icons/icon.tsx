import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    icon: {
        position: 'relative',
        display: 'block',
        width: '1em',
        height: '1em',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '.25em',
    }
})

const IconStyle = {
    position: 'absolute',
    display: 'block',
    top: '50%',
    left: '50%',
    width: '1em',
    maxWidth: '1em',
    height: '.1em',
    maxHeight: '.1em',
    background: 'currentColor',
    transform: 'translate(-50%, -50%)',
    borderRadius: '.1em',
    transition: '500ms cubic-bezier(.4, 0, .2, 1)',
    msTransition: '500ms cubic-bezier(.4, 0, .2, 1)',
    MozTransition: '500ms cubic-bezier(.4, 0, .2, 1)',
    WebkitTransition: '500ms cubic-bezier(.4, 0, .2, 1)',
    '&:before,&:after': {
        content: '""',
        position: 'absolute',
        display: 'block',
        width: '100%',
        height: '100%',
        background: 'inherit',
        transition: '500ms cubic-bezier(.4, 0, .2, 1)',
        msTransition: '500ms cubic-bezier(.4, 0, .2, 1)',
        MozTransition: '500ms cubic-bezier(.4, 0, .2, 1)',
        WebkitTransition: '500ms cubic-bezier(.4, 0, .2, 1)',
        borderRadius: '.1em',
        transformOrigin: 'right',
    },
    '&:before': {
        transformOrigin: 'left',
    }
}

export { IconStyle } 

export interface IconProps {
    style?: any,
    onClick?: any
}

interface MainIconProps extends IconProps {
    icon: string,
    clickIcon?: string,
    hoverIcon?: string
}

const Icon = (props: MainIconProps): JSX.Element => {

    const { icon, clickIcon, hoverIcon, ...rest} = props

    const [classList, setClassList] = useState([icon])
    
    const classes: any = useStyles()

    const onclick = () => {
        if(!clickIcon){
            return;
        }
        if(!classList.includes(clickIcon)){
            return setClassList([...classList, clickIcon])
        }
        setClassList(classList.filter(c => c !== clickIcon))        
    }

    const mousein = () => {
        if(!hoverIcon){
            return;
        }
        if(!classList.includes(hoverIcon)){
            setClassList([...classList, hoverIcon])
        }
    }

    const mouseout = () => {
        if(!hoverIcon){
            return;
        }
        if(classList.includes(hoverIcon)){
            setClassList(classList.filter(c => c !== hoverIcon))
        }
    }

    return (
        <span
            className={classes.icon}
            onClick={onclick}
            onMouseEnter={mousein}
            onMouseLeave={mouseout}
            {...rest} 
        >
            <i className={classList.join(' ')}></i>
        </span>
    )
}

export default Icon