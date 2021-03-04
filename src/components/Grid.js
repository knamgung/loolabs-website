import React, { Component } from "react";
import styled from "styled-components";

const Colors = {
  background: "#164C33",
  title: "#051C11",
  text: "#E5C03B",
};
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;

  grid-column-gap: 48px;
  grid-row-gap: 48px;
`;

const GridLine = styled.div`
  border: 0.1px solid ${Colors.text};

  width: 100%;
  height: 120px;
`;
export default class Gris extends Component {
  render() {
    return (
      <GridWrapper>
        <GridLine></GridLine>
        <GridLine></GridLine>

        <GridLine></GridLine>

        <GridLine></GridLine>

        <GridLine></GridLine>
        <GridLine></GridLine>

        <GridLine></GridLine>

        <GridLine></GridLine>

        <GridLine></GridLine>

        <GridLine></GridLine>

        <GridLine></GridLine>

        <GridLine></GridLine>

        <GridLine></GridLine>

        <GridLine></GridLine>

        <GridLine></GridLine>

        <GridLine></GridLine>
      </GridWrapper>
    );
  }
}
