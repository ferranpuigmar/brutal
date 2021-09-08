import { styled, connect } from 'frontity'
import React, { useState } from 'react';
import logoBlackSVG from '../../assets/images/logo-blackletter.svg';
import logoWhiteSVG from '../../assets/images/logo-whiteletter.svg';
import Text from './Text';
import Title from './Title';
import Container from '../layout/Container';
import Link from "@frontity/components/link";
import { theme_colors, breakpoints } from '../../assets/styles/variables'

const FooterColor = styled.footer`

    //background-color: #fff;
  .black-back {
    background-color: #000;
    padding: 5vh 0;
  }
  .white-back {
    background-color: #fff;
    padding: 5vh 0;
  }
  
`;
const FooterLogo = styled.div`
  img {
    width: 100%;
  }
`;

const FooterText = styled.div`
  margin-top: 3vh;
  display: flex;
  flex-wrap: wrap;
  .footer__text {
    margin-right: 6vw;
    letter-spacing: 1px;
    margin-top: 3vh;
    a {
      text-decoration: none;
    }
  }
  .footer__text-title {
    color: "#f0f";
    //font-weight: 800;
  }

  @media (max-width: ${ breakpoints[ "md" ] }px) {
    flex-direction: column; 
  }
  
`;

const Footer = ( { state } ) =>
{
  const settings = state.source.get( `/globaloptions/${ state.theme.globalOptions }/` ).acf;
  console.log( `settings`, settings )
  let blackback = false
  if ( state.router.link === "/" ) blackback = true;

  return (
    <FooterColor >
      <div className={ blackback ? "black-back" : "white-back" }>
        <Container>
          <FooterLogo>
            <img src={ blackback ? logoWhiteSVG : logoBlackSVG } className="logo" />
          </FooterLogo>
          <FooterText className="footer__text">
            <div className="footer__text">
              <Title level={ 5 } color={ blackback ? "#fff" : "#000" } className="footer__text-title">MENORCA, ESPAÑA</Title>
            </div>
            <div className="footer__text">
              <Title level={ 5 } color={ blackback ? "#fff" : "#000" } className="footer__text-title">ENCUÉNTRANOS</Title>
              <Text text={ "hola@esmuybrutal.com" } size={ "1.6em" } color={ blackback ? "#fff" : "#000" } className="footer__text-text" />
            </div>
            <div className="footer__text">
              <Title level={ 5 } color={ blackback ? "#fff" : "#000" } className="footer__text-title">SIGUENOS</Title>
              <Link link="https://www.instagram.com/esmuybrutal/">
                <Text text={ "@esmuybrutal" } size={ "1.6rem" } color={ blackback ? "#fff" : "#000" } className="footer__text-text" />
              </Link>
            </div>
          </FooterText>
        </Container>
      </div>
    </FooterColor>

  )
}


export default connect( Footer );
