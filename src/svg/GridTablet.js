import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: none;

  width: 95%;
  @media (max-width: 1440px) {
    display: flex;
  }

  & svg {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
  }
`;

function GridTablet() {
  return (
    <GridWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="779"
        height="1194"
        fill="none"
        viewBox="0 0 779 1194"
      >
        <g stroke="#F4C82A" strokeOpacity="0.6" filter="url(#filter0_d)">
          <path d="M4.5 0L4.5 1194"></path>
          <path d="M774.5 0L774.5 1194"></path>
          <path d="M174.5 0L174.5 1194"></path>
          <path d="M198.5 0L198.5 1194"></path>
          <path d="M377.5 0L377.5 1194"></path>
          <path d="M401.5 0L401.5 1194"></path>
          <path d="M580.5 0L580.5 1194"></path>
          <path d="M604.5 0L604.5 1194"></path>
        </g>
        <defs>
          <filter
            id="filter0_d"
            width="779"
            height="1202"
            x="0"
            y="0"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="4"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </GridWrapper>
  );
}

export default GridTablet;
