import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('fire', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M24 44c8.235 0 15-6.526 15-14.902 0-2.056-.105-4.26-1.245-7.686-1.14-3.426-1.369-3.868-2.574-5.984-.515 4.317-3.27 6.117-3.97 6.655 0-.56-1.666-6.747-4.193-10.45C24.537 8 21.163 5.617 19.185 4c0 3.07-.863 7.634-2.1 9.96-1.236 2.325-1.468 2.41-3.013 4.14-1.544 1.73-2.253 2.265-3.545 4.365C9.236 24.565 9 27.362 9 29.418 9 37.794 15.765 44 24 44Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
