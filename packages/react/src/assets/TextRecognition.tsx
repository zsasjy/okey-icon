import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('text-recognition', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M6 33v6a3 3 0 0 0 3 3h6M33 42h6a3 3 0 0 0 3-3v-6M42 15V9a3 3 0 0 0-3-3h-6M6 15V9a3 3 0 0 1 3-3h6M24 15v20M17 15h14"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
