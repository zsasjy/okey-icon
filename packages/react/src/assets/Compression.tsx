import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('compression', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M8.92 8.714C8.495 7.39 9.476 6 10.867 6h26.266c1.391 0 2.372 1.39 1.947 2.714C37.9 12.4 36 19.09 36 24c0 4.91 1.9 11.6 3.08 15.286.425 1.325-.556 2.714-1.947 2.714H10.867c-1.391 0-2.372-1.39-1.947-2.714C10.1 35.6 12 28.91 12 24c0-4.91-1.9-11.6-3.08-15.286ZM4 15c1.5 2 2 6 2 9s-.5 7-2 9"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M18 15.5h12M18 24h12M18 32h4"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
        />
        <path
            stroke={props.colors[0]}
            d="M44 15c-1.5 2-2 6-2 9s.5 6 2 9"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
