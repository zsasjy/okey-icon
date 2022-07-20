import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('chinese', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <rect
            x="6"
            y="6"
            width="36"
            height="36"
            rx="3"
            fill={props.colors[1]}
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
            strokeLinejoin={props.strokeLinejoin}
        />
        <rect
            x="14"
            y="18"
            width="20"
            height="10"
            fill={props.colors[3]}
            stroke={props.colors[2]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M24 14V35"
            stroke={props.colors[2]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
        />
    </svg>
));
