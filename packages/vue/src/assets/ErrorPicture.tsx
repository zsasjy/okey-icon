import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('error-picture', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            fill={props.colors[0]}
            d="M44 23.994a2 2 0 0 0-4 0h4Zm-20-16a2 2 0 1 0 0-4v4Zm15 32H9v4h30v-4Zm-31-1v-30H4v30h4Zm32-15v15h4v-15h-4Zm-31-16h15v-4H9v4Zm0 32a1 1 0 0 1-1-1H4a5 5 0 0 0 5 5v-4Zm30 4a5 5 0 0 0 5-5h-4a1 1 0 0 1-1 1v4Zm-31-35a1 1 0 0 1 1-1v-4a5 5 0 0 0-5 5h4Z"
        />
        <path
            stroke={props.colors[0]}
            d="m6 35 10.693-9.802a2 2 0 0 1 2.653-.044L32 36M28 31l4.773-4.773a2 2 0 0 1 2.615-.186L42 31M33 7l8 8M41 7l-8 8"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
