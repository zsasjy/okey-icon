import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('list-checkbox', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <path d="M20 24h24-24Z" clip-rule="evenodd" />
        <path
            stroke={props.colors[0]}
            d="M20 24h24"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path d="M20 38h24-24Z" clip-rule="evenodd" />
        <path
            stroke={props.colors[0]}
            d="M20 38h24"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path d="M20 10h24-24Z" clip-rule="evenodd" />
        <path
            stroke={props.colors[0]}
            d="M20 10h24"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M4 34h8v8H4zM4 20h8v8H4zM4 6h8v8H4z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
