import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('thermometer', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            d="M18 25.9993V10C18 6.68629 20.6863 4 24 4C27.3137 4 30 6.68629 30 10V25.9993C32.4289 27.8237 34 30.7284 34 34C34 39.5228 29.5228 44 24 44C18.4772 44 14 39.5228 14 34C14 30.7284 15.5711 27.8237 18 25.9993Z"
            fill={props.colors[1]}
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M24 17V30"
            stroke={props.colors[2]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M24 38C26.2091 38 28 36.2091 28 34C28 31.7909 26.2091 30 24 30C21.7909 30 20 31.7909 20 34C20 36.2091 21.7909 38 24 38Z"
            fill={props.colors[3]}
            stroke={props.colors[2]}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
