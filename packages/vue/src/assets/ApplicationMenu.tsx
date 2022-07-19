import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('application-menu', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <path
            fill={props.colors[0]}
            d="M10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM24 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM38 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM10 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM38 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM10 42a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM24 42a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM38 42a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        />
    </svg>
));
