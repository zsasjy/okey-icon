import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('tiktok', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M21.358 19.14c-5.889-.284-9.982 1.815-12.28 6.298-3.446 6.725-.598 17.729 10.9 17.729 11.5 0 11.832-11.112 11.832-12.276V17.875c2.46 1.557 4.533 2.495 6.22 2.813 1.689.317 2.761.458 3.22.422v-6.476c-1.561-.188-2.911-.547-4.05-1.076-1.709-.794-5.096-2.997-5.096-6.226.002.016.002-.817 0-2.499h-7.118c-.021 15.816-.021 24.502 0 26.058.031 2.334-1.78 5.6-5.45 5.6-3.672 0-5.483-3.263-5.483-5.367 0-1.288.443-3.155 2.272-4.538 1.085-.82 2.59-1.148 5.033-1.148V19.14Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));