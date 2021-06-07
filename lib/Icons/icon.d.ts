/// <reference types="react" />
export interface IconProps {
    style?: any;
    onClick?: any;
    bold?: boolean;
}
interface MainIconProps extends IconProps {
    icon: string;
    condition?: boolean;
    conditionIcon?: string;
}
declare const Icon: (props: MainIconProps) => JSX.Element;
export default Icon;
