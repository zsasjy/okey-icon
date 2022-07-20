import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('remind', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path d="M24 4c-7.732 0-14 6.268-14 14v20h28V18c0-7.732-6.268-14-14-14Z" />
        <path
            stroke={props.colors[0]}
            d="M10 38V18c0-7.732 6.268-14 14-14s14 6.268 14 14v20M4 38h40M24 44a5 5 0 0 0 5-5v-1H19v1a5 5 0 0 0 5 5Z"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));