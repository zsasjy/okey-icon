import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('align-vertical-center-two', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M12 7h24v6H12zM8 21h32v6H8zM15 35h18v6H15z"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));