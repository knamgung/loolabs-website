import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  object-fit: cover;

  @media (max-width: 1440px) {
    display: none;
    width: 100%;
  }

  @media (max-width: 768px) {
  }

  & svg {
    width: 100%;
  }
`;

function GridDesktop() {
  return (
    <GridWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1345"
        height="889"
        fill="none"
        viewBox="0 0 1345 889"
      >
        <g stroke="#F4C82A" opacity="0.6">
          <path d="M0.5 1L0.5 889"></path>
          <path d="M660.5 1L660.5 889"></path>
          <path d="M684.5 1L684.5 889"></path>
          <path d="M318.5 1L318.5 889"></path>
          <path d="M342.5 1L342.5 889"></path>
          <path d="M1344 432.5L0 432.5"></path>
          <path d="M1344 456.5L0 456.5"></path>
          <path d="M1344 205.5L0 205.5"></path>
          <path d="M1344 229.5L0 229.5"></path>
          <path d="M1344 661.5L0 661.5"></path>
          <path d="M1344 685.5L0 685.5"></path>
          <path d="M1002.5 1L1002.5 889"></path>
          <path d="M1026.5 1L1026.5 889"></path>
          <path d="M0 0.5L1344 0.5"></path>
          <path d="M0 888.5L1344 888.5"></path>
          <path d="M1344.5 1L1344.5 889"></path>
        </g>
      </svg>
    </GridWrapper>
  );
}

export default GridDesktop;
