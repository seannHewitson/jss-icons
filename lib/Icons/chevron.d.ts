/// <reference types="react" />
import { IconProps } from './icon';
interface ChevronProps extends IconProps {
    dir?: 'up' | 'down' | 'left' | 'right';
}
export declare const Chevron: (props?: ChevronProps) => string;
export declare const UpChevron: () => string;
export declare const DownChevron: () => string;
export declare const LeftChevron: () => string;
export declare const RightChevron: () => string;
declare const ChevronIcon: (props: ChevronProps) => JSX.Element;
export declare const UpChevronIcon: (props: IconProps) => JSX.Element;
export declare const DownChevronIcon: (props: IconProps) => JSX.Element;
export declare const LeftChevronIcon: (props: IconProps) => JSX.Element;
export declare const RightChevronIcon: (props: IconProps) => JSX.Element;
export default ChevronIcon;
