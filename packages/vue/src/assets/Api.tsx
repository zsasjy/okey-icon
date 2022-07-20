import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('api', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="m37 22-3 3-11-11 3-3c1.5-1.5 7-4 11 0s1.5 9.5 0 11ZM42 6l-5 5M11 26l3-3 11 11-3 3c-1.5 1.5-7 4-11 0s-1.5-9.5 0-11ZM23 32l4-4M6 42l5-5M16 25l4-4"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
