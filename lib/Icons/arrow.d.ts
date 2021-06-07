/// <reference types="react" />
import { IconProps } from './icon';
interface ArrowProps extends IconProps {
    dir?: 'up' | 'down' | 'left' | 'right' | 'horizontal' | 'vertical';
}
export declare const Arrow: (props?: ArrowProps) => string;
export declare const UpArrow: () => string;
export declare const DownArrow: () => string;
export declare const LeftArrow: () => string;
export declare const RightArrow: () => string;
export declare const HorizontalArrow: () => string;
export declare const VerticalArrow: () => string;
declare const ArrowIcon: (props: ArrowProps) => JSX.Element;
export declare const UpArrowIcon: (props: IconProps) => JSX.Element;
export declare const DownArrowIcon: (props: IconProps) => JSX.Element;
export declare const LeftArrowIcon: (props: IconProps) => JSX.Element;
export declare const RightArrowIcon: (props: IconProps) => JSX.Element;
export declare const HorizontalArrowIcon: (props: IconProps) => JSX.Element;
export declare const VerticalArrowIcon: (props: IconProps) => JSX.Element;
export default ArrowIcon;
