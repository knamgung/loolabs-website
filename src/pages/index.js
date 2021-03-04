import * as React from "react";
import styled from "styled-components";
import GridDesktop from "../svg/GridDesktop.js";
import GridTablet from "../svg/GridTablet.js";
import GridDesktopImg from "../images/gridDesktop.png";
import GridTabletImg from "../images/gridTablet.png";
import GridPhoneImg from "../images/gridPhone.png";

import Grid from "../components/Grid.js";

import "../util/global.css";
// styles

const Colors = {
  background: "#164C33",
  title: "#051C11",
  text: "#E5C03B",
};
const Main = styled.main`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #164c33;

  @media (max-width: 1440px) {
    padding: 0 24px;
  }
`;

const Background = styled.div`
  display: flex;
  height: auto;
  position: relative;

  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Kanit";
  color: ${Colors.title};
  margin-bottom: 0;
  font-size: 180px;
  letter-spacing: 10px;
  line-height: 100px;

  @media (max-width: 1440px) {
    font-size: 120px;
    margin-top: 0;
  }
`;

const LooLabs = styled.div`
  display: flex;
  flex-flow: column;

  position: absolute;

  left: 42px;
  top: 195px;
  @media (max-width: 1440px) {
    left: 24px;
    top: 200px;
  }
`;

const Description = styled.p`
  font-family: "IBM Plex Mono";
  color: ${Colors.text};
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 5%;
  font-weight: 400;
`;
const LooLabDescription = styled(Description)`
  width: 400px;
  padding-left: 4px;
`;

const LooLabContact = styled(Description)`
  @media (max-width: 1440px) {
    display: none;
  }
`;

const LooLabInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 100px;

  @media (max-width: 1440px) {
    flex-flow: column;
    align-items: flex-start;
  }
`;

const ContactButton = styled.a`
  display: none;

  outline: none;
  text-decoration: none;

  @media (max-width: 1440px) {
    display: block;
  }
`;

const GridImg = styled.img`
  display: flex;

  width: 100%;
  height: 100vh;
  object-fit: fill;

  @media (max-width: 1440px) {
    display: none;
  }
`;
const GridImgTablet = styled.img`
  display: none;

  @media (max-width: 1440px) {
    display: flex;
    width: 100vw;
    height: 100vh;
    object-fit: fill;
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const GridImgPhone = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 100vw;
    padding: 0 24px;
    height: 100vh;
    object-fit: fill;
  }
`;

const ContactUs = styled(Description)`
  font-weight: 700;
  border-bottom: ${Colors.text} 2px solid;
`;
// markup
const IndexPage = () => {
  return (
    <>
      <Main>
        <Background>
          <GridImg src={GridDesktopImg}></GridImg>
          <GridImgTablet src={GridTabletImg}></GridImgTablet>
          <GridImgPhone src={GridPhoneImg}></GridImgPhone>

          <LooLabs>
            <Title>LOO LABS</Title>
            <LooLabInfo>
              <LooLabDescription>
                we’re connecting Waterloo through building projects to improve
                student life //
              </LooLabDescription>
              <LooLabContact>
                contact us
                <br />
                loolabs.uw [at] gmail.com
              </LooLabContact>
              <ContactButton href="mailto:loolabs.uw@gmail.com">
                <ContactUs>Contact Us</ContactUs>
              </ContactButton>
            </LooLabInfo>
          </LooLabs>
        </Background>
      </Main>
    </>
  );
};

export default IndexPage;
