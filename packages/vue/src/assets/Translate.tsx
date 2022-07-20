import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('translate', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M28.286 37h11.428M42 42l-2.286-5L42 42Zm-16 0 2.286-5L26 42Zm2.286-5L34 24l5.714 13H28.286ZM16 6l1 3M6 11h22M10 16s1.79 6.26 6.263 9.74C20.737 29.216 28 32 28 32"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M24 11s-1.79 8.217-6.263 12.783C13.263 28.348 6 32 6 32"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));