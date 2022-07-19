import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('more-one', false, (props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <circle fill={props.colors[1]} r="3" cy="12" cx="24" />
        <circle fill={props.colors[1]} r="3" cy="24" cx="24" />
        <circle fill={props.colors[1]} r="3" cy="35" cx="24" />
    </svg>
));
