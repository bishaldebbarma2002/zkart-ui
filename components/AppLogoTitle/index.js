import React from "react";
import { AppTitle, Container, LogoImage } from "./AppLogoTitleElements";
import LogoImgSrc from "../../public/assets/images/logo.png";

const AppLogoTitle = (props) => {
  return (
    <Container href="/">
      <AppTitle> E-Commerce </AppTitle>
      <LogoImage src={LogoImgSrc} alt="logo" />
    </Container>
  );
};

export default AppLogoTitle;
