import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('shield', false, (props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <path
            stroke={props.colors[0]}
            d="M6 8.256 24.009 3 42 8.256v10.778A26.316 26.316 0 0 1 24.003 44 26.32 26.32 0 0 1 6 19.029V8.256Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
