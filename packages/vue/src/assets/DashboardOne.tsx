import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('dashboard-one', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 49 48">
        <path
            d="M24.7778 7C13.7321 7 4.77783 15.9543 4.77783 27C4.77783 32.2301 6.49127 37.4362 9.77783 41H39.7778C43.0644 37.4362 44.7778 32.2301 44.7778 27C44.7778 15.9543 35.8235 7 24.7778 7Z"
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
            strokeLinejoin={props.strokeLinejoin}
        />
        <circle
            cx="24.7778"
            cy="30"
            r="4"
            fill={props.colors[1]}
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M24.7778 20V26"
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M24.7778 12V14"
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M9.77783 28H11.7778"
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M13.7778 18L15.192 19.4142"
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M37.7778 28H39.7778"
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M34.7778 19.4141L36.192 17.9998"
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
