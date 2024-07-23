import React from 'react';

function SvgFooterbg(props, svgRef) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1440"
      height="600"
      preserveAspectRatio="none"
      viewBox="0 0 1440 600"
      ref={svgRef}
      aria-labelledby={props.titleId}
      {...props}
    >
      {props.title ? <title id={props.titleId}>{props.title}</title> : null}
      <g mask="url(#SvgjsMask1048)" fill="none">
        <rect width="1440" height="600" x="0" y="0" fill="rgba(113, 103, 53, 1)"></rect>
        <path d="M12 600L612 0L1311 0L711 600z" fill="url(#SvgjsLinearGradient1049)"></path>
        <path d="M513.2 600L1113.2 0L1332.2 0L732.2 600z" fill="url(#SvgjsLinearGradient1049)"></path>
        <path d="M1382 600L782 0L560 0L1160 600z" fill="url(#SvgjsLinearGradient1050)"></path>
        <path d="M949.8 600L349.79999999999995 0L-37.200000000000045 0L562.8 600z" fill="url(#SvgjsLinearGradient1050)"></path>
        <path d="M844.3499471729704 600L1440 4.34994717297036L1440 600z" fill="url(#SvgjsLinearGradient1049)"></path>
        <path d="M0 600L595.6500528270296 600L 0 4.34994717297036z" fill="url(#SvgjsLinearGradient1050)"></path>
      </g>
      <defs>
        <mask id="SvgjsMask1048">
          <rect width="1440" height="600" fill="#ffffff"></rect>
        </mask>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="SvgjsLinearGradient1049">
          <stop stopColor="rgba(255, 212, 0, 0.06)" offset="0"></stop>
          <stop stopOpacity="0" stopColor="rgba(255, 212, 0, 0.06)" offset="0.66"></stop>
        </linearGradient>
        <linearGradient x1="100%" y1="100%" x2="0%" y2="0%" id="SvgjsLinearGradient1050">
          <stop stopColor="rgba(255, 212, 0, 0.06)" offset="0"></stop>
          <stop stopOpacity="0" stopColor="rgba(255, 212, 0, 0.06)" offset="0.66"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgFooterbg);
export default ForwardRef;
