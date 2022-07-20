import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('two-dimensional-code-one', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            d="M18 6H6V18H18V6Z"
            fill={props.colors[1]}
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M18 30H6V42H18V30Z"
            fill={props.colors[1]}
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M42 30H30V42H42V30Z"
            fill={props.colors[1]}
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M42 6H30V18H42V6Z"
            fill={props.colors[1]}
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M24 6V24"
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
        />
        <path
            d="M24 30V42"
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
        />
        <path
            d="M24 24L6 24"
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
        />
        <path
            d="M42 24H30"
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
        />
    </svg>
));
