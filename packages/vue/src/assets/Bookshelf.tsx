import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('bookshelf', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M5 6h34s4 2 4 7-4 7-4 7H5s4-2 4-7-4-7-4-7ZM43 28H9s-4 2-4 7 4 7 4 7h34s-4-2-4-7 4-7 4-7Z"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
