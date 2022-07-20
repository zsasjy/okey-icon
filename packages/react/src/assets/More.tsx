import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('more', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <circle fill={props.colors[1]} r="3" cy="24" cx="12" />
        <circle fill={props.colors[1]} r="3" cy="24" cx="24" />
        <circle fill={props.colors[1]} r="3" cy="24" cx="36" />
    </svg>
));