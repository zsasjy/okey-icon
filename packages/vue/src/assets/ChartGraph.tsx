import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('chart-graph', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <path
            stroke={props.colors[0]}
            d="M17 6h14v9H17zM6 33h14v9H6zM28 33h14v9H28z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M24 16v8M13 33v-9h22v9"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
