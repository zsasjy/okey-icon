import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('webcam', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M7.825 29.766C11.462 34.756 17.352 38 24 38c6.648 0 12.538-3.243 16.175-8.234C43.79 33.508 46 38.508 46 44H2c0-5.492 2.209-10.492 5.825-14.234Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M24 30c7.18 0 13-5.82 13-13S31.18 4 24 4 11 9.82 11 17s5.82 13 13 13Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M24 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
