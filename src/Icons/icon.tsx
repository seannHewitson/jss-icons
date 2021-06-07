import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((Theme) => ({
    icon: {
        position: 'relative',
        display: 'inline-block',
        width: '1em',
        height: '1em',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    defaultIcon: {
        position: 'absolute',
        display: 'block',
        top: '50%',
        left: '50%',
        width: '1em',
        maxWidth: '1em',
        height: ({ bold } = Theme) => bold ? '.125em' : '.1em',
        maxHeight: ({ bold } = Theme) => bold ? '.125em' : '.1em',
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
            top: 'auto',
            left: 'auto',
            right: 'auto',
            bottom: 'auto',
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
}))

export interface IconProps {
    style?: any,
    onClick?: any,
    bold?: boolean
}

interface MainIconProps extends IconProps {
    icon: string,
    condition?: boolean,
    conditionIcon?: string
}

const Icon = (props: MainIconProps): JSX.Element => {

    const { bold, condition, conditionIcon, icon, ...rest } = props

    const [classList, setClassList] = useState([icon])
    
    const classes: any = useStyles({bold: bold})

    useEffect(() => {
        if(condition === true && conditionIcon !== undefined){
            return setClassList([...classList, conditionIcon])
        }
        setClassList(classList.filter(c => c !== conditionIcon))
    }, [condition, conditionIcon])

    return (
        <span
            className={classes.icon}
            onClick={onclick}
            {...rest}
        >
            <i className={`${classes.defaultIcon} ${classList.join(' ')}`}></i>
        </span>
    )
}

export default Icon