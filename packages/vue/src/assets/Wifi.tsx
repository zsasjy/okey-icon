import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('wifi', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M4 18.965a29.355 29.355 0 0 1 1.817-1.586C17.037 8.374 33.382 8.903 44 18.965"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M38 25.799c-7.732-7.732-20.268-7.732-28 0M32 32.314c-4.418-4.419-11.582-4.419-16 0"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            fill={props.colors[0]}
            d="M24 40a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            clip-rule="evenodd"
            fill-rule="evenodd"
        />
    </svg>
));
