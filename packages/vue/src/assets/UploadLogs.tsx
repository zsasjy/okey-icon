import React from 'react';
import { VNode } from 'vue';
import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('upload-logs', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            d="M24 43.9998H10C8.89543 43.9998 8 43.1043 8 41.9998V5.99976C8 4.89519 8.89543 3.99976 10 3.99976H38C39.1046 3.99976 40 4.89519 40 5.99976V23.9998"
            stroke={props.colors[0]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M35.5 43.9998V30.9998"
            stroke={props.colors[0]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M31 34.4998L32.5 32.9998L35.5 29.9998L38.5 32.9998L40 34.4998"
            stroke={props.colors[0]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M16 15.9998H32"
            stroke={props.colors[0]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
        />
        <path
            d="M16 23.9998H24"
            stroke={props.colors[0]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
        />
    </svg>
)  as any as VNode);
