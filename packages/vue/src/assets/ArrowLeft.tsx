import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('arrow-left', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <path
            stroke={props.colors[0]}
            d="M5.799 24h36M17.799 36l-12-12 12-12"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
