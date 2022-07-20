import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('webcam', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            d="M7.82507 29.7656C11.4617 34.7565 17.352 38.0001 24 38.0001C30.648 38.0001 36.5383 34.7565 40.1749 29.7656C43.7911 33.5078 46 38.5077 46 44.0001H2C2 38.5077 4.20894 33.5078 7.82507 29.7656Z"
            fill={props.colors[1]}
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M24 30C31.1797 30 37 24.1797 37 17C37 9.8203 31.1797 4 24 4C16.8203 4 11 9.8203 11 17C11 24.1797 16.8203 30 24 30Z"
            fill={props.colors[1]}
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22Z"
            fill={props.colors[3]}
            stroke={props.colors[2]}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
