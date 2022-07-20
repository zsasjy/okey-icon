import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('upload-one', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M11.678 20.271C7.275 21.318 4 25.277 4 30c0 5.523 4.477 10 10 10 .947 0 1.864-.132 2.733-.378M36.055 20.271c4.403 1.047 7.677 5.006 7.677 9.729 0 5.523-4.477 10-10 10-.947 0-1.864-.132-2.732-.378M36 20c0-6.627-5.373-12-12-12s-12 5.373-12 12M17.065 27.881 24 20.924 31.132 28M24 38V24.462"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));