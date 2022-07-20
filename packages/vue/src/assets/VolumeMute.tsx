import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('volume-mute', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path fill={props.colors[0]} opacity=".01" d="M30 18h13v13H30z" />
        <mask
            style={{maskType:"alpha"}}
            height={props.size}
            width={props.size}
            y="18"
            x="30"
            maskUnits="userSpaceOnUse"
            id="a"
        >
            <path fill={props.colors[0]} d="M30 18h13v13H30z" />
        </mask>
        <g
            mask="url(#a)"
            stroke={props.colors[0]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        >
            <path d="m40.735 20.286-8.486 8.485M32.25 20.286l8.485 8.485" />
        </g>
        <path
            stroke={props.colors[0]}
            d="M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
