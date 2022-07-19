import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('pig', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <path
            stroke={props.colors[0]}
            d="M14.054 9.644a9.115 9.115 0 0 1 1.414 1.845 15.95 15.95 0 0 1 8.483-2.426c3.146 0 6.08.906 8.555 2.471.4-.691.886-1.337 1.44-1.89 2.521-2.516 6.946-3.624 8.991-1.583 2.045 2.04.934 6.456-1.587 8.972a9.358 9.358 0 0 1-2.638 1.824 15.89 15.89 0 0 1 1.24 6.175c0 8.819-7.164 15.968-16 15.968C15.113 41 7.95 33.85 7.95 25.032c0-2.204.447-4.304 1.256-6.214a9.34 9.34 0 0 1-2.556-1.785c-2.522-2.516-3.632-6.932-1.587-8.972 2.045-2.04 6.47-.933 8.99 1.583Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <ellipse stroke={props.colors[0]} ry="7" rx="8" cy="29" cx="24" strokeWidth={props.strokeWidth} />
        <circle fill={props.colors[1]} r="2" cy="18" cx="17" />
        <circle fill={props.colors[1]} r="2" cy="29" cx="21" />
        <circle fill={props.colors[1]} r="2" cy="18" cx="31" />
        <circle fill={props.colors[1]} r="2" cy="29" cx="27" />
    </svg>
));
