import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('financing-one', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M15 14.385C19.126 16 24.01 16 24.01 16S28.88 16 33 14.385c4.502 5.254 7.657 12.18 9.73 18.013C44.829 38.303 40.2 44 33.934 44H14.02C7.768 44 3.146 38.33 5.234 32.437 7.298 26.614 10.455 19.686 15 14.385Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M18 28h12M18 34h12M24.009 28v10M30 22l-6 6-6-6"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M24 16c7.18 0 13-2.686 13-6s-5.82-6-13-6-13 2.686-13 6 5.82 6 13 6Z"
            clip-rule="evenodd"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
