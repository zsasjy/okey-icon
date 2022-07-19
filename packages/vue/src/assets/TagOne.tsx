import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('tag-one', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <path
            stroke={props.colors[0]}
            d="M42.17 29.245 29.262 42.151a3.6 3.6 0 0 1-5.094 0L8 26V8h18l16.17 16.17a3.6 3.6 0 0 1 0 5.075Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            fill={props.colors[0]}
            d="M18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            clip-rule="evenodd"
            fill-rule="evenodd"
        />
    </svg>
));
