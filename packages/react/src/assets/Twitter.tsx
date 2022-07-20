import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('twitter', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M5 35.762c1.929 1.067 15.891 9.115 25.82 2.912 9.928-6.203 9.38-16.89 9.38-21.788.9-1.884 2.8-2.842 2.8-7.942-1.866 1.724-3.721 2.31-5.565 1.76-1.806-2.754-4.291-3.973-7.456-3.655-4.746.477-6.482 5.133-5.971 11.158-7.318 3.7-13.056-2.683-16.014-7.503-.988 3.796-1.94 8.354 0 13.395 1.294 3.362 4.405 6.203 9.331 8.526C12.332 35.33 8.224 36.377 5 35.762Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
