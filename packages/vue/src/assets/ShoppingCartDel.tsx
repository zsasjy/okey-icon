import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('shopping-cart-del', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path d="M39 32H13L8 12h36l-5 20Z" />
        <path
            stroke={props.colors[0]}
            d="M3 6h3.5L8 12m0 0 5 20h26l5-20H8Z"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <circle
            stroke={props.colors[0]}
            r="3"
            cy="39"
            cx="13"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <circle
            stroke={props.colors[0]}
            r="3"
            cy="39"
            cx="39"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M22 22h8"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
