import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('peoples', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <path
            stroke={props.colors[0]}
            d="M19 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM32.608 7A6.996 6.996 0 0 1 36 13a6.996 6.996 0 0 1-3.392 6M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8ZM44 42v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
