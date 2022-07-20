import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('more', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <circle cx="12" cy="24" r="3" fill={props.colors[0]} />
        <circle cx="24" cy="24" r="3" fill={props.colors[0]} />
        <circle cx="36" cy="24" r="3" fill={props.colors[0]} />
    </svg>
));
