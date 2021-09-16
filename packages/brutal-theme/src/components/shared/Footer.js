import { styled, connect } from 'frontity'
import React from 'react';
import Container from '../layout/Container';
import { theme_colors, breakpoints } from '../../assets/styles/variables'
import FooterText from './FooterText';

const FooterColor = styled.footer`
  .black-back {
    background-color: ${ theme_colors[ "black" ] };
    padding: 5vh 0;
  }
  .white-back {
    background-color: ${ theme_colors[ "white" ] };
    padding: 5vh 0;
  }
`;

const FooterLogo = styled.div`
  img { width: 100% }
`;

const FooterTextStyle = styled.div`
  margin-top: 3vh;
  display: flex;
  flex-wrap: wrap;
  .footer__text {
    margin-right: 6vw;
    letter-spacing: 1px;
    margin-top: 3vh;
    color: ${ ( { blackBackground } ) => blackBackground ? `${ theme_colors.white }` : `${ theme_colors.black }` };;
    line-height: 2.5rem;
   
    .footer__text-title {
      font-size: 1.6rem; 
    }
    .footer__text-text a {
      color: ${ ( { blackBackground } ) => blackBackground ? `${ theme_colors.white }` : `${ theme_colors.black }` };;
      text-decoration: none;
      font-size: 1.6rem; 
    }

  }
  
  @media (max-width: ${ breakpoints[ "md" ] }px) {
    flex-direction: column; 
  }
`;

const Footer = ( { state, blackBackground, footerFields={footerFields}  } ) => {
  
  const logo = state.source.get( `/globaloptions/${ state.theme.globalOptions }/` ).acf;

  return (
    <FooterColor >
      <div className={ blackBackground ? "black-back" : "white-back" }>

        <Container>

          <FooterLogo>
            <img src={ blackBackground ? logo.logo_white : logo.logo_black } className="logo" />
          </FooterLogo>

          <FooterTextStyle blackBackground={blackBackground}>
            <FooterText footerFields={footerFields}  blackBackground={ blackBackground } textsize={ "1.6rem" } titlelevel={ 5 } />
          </FooterTextStyle>

        </Container>

      </div>
    </FooterColor>
  )
}

export default connect( Footer );
