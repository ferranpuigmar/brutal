import { styled, connect } from 'frontity'
import React from 'react';
import Container from '../layout/Container';
import { theme_colors, breakpoints } from '../../assets/styles/variables'
import FooterText from './FooterText';
import { mq } from '../../assets/styles/mediaqueries';

const FooterColor = styled.footer`
  .black-back {
    background-color: ${ theme_colors[ "black" ] };
    padding: 5em 0;
  }
  .white-back {
    background-color: ${ theme_colors[ "white" ] };
    padding: 5em 0;
  }
`;

const FooterSpace = styled.div`
  background-color: transparent;
  height: 75vh;
  max-height: calc(33vw + 18rem + 129px);

  ${ mq[ 'sm' ] }{ height: calc(147px + 18rem + 129px) }
  ${ mq[ 'md' ] }{ height: calc(205px + 14rem + 52px) }
  ${ mq[ 'lg' ] }{ height: calc(283px + 14rem + 52px) }
  ${ mq[ 'xl' ] }{ height: calc(344px + 14rem + 52px) }
  ${ mq[ 'xxl'] }{ height: calc(426px + 14rem + 52px) }
`;

const FixedPart = styled.div`
  background-color:  ${ ( { blackBackground } ) => blackBackground ? '#000' : '#fff' };
  width:100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: -10;
`;

const FooterLogo = styled.div`
  img { width: 100% }
`;

const FooterTextStyle = styled.div`
  width: 100vw;
  ${'' /* margin-top: 3vh; */}
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  .footer__text {
    margin-right: 6vw;
    letter-spacing: 1px;
    margin-top: 2.5rem;
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
      {/* <FooterSpace/> */}
      <FixedPart blackBackground={ blackBackground}>
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
      </FixedPart>
    </FooterColor>
  )
}

export default connect( Footer );
