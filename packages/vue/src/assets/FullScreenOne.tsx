import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('full-screen-one', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <path
            stroke={props.colors[0]}
            d="m6 6 10 9.9M6 41.9 16 32M42 41.9 32.1 32M41.9 6 32 15.9M33 6h9v9M42 33v9h-9M15 42H6v-9M6 15V6h9"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
