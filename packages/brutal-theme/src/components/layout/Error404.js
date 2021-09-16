import React from 'react';
import { connect } from 'frontity';
import Container from '../layout/Container';
import { cx, css  } from '@emotion/css';
import { theme_colors } from '../../assets/styles/variables';
import { mq } from '../../assets/styles/mediaqueries';

const bigerror = css`
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme_colors.primaryColor};
  font-size: calc(100vw/5);

  .smallbox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 { line-height: calc(100vw/150); }

  p { 
    margin-top: -2rem;
    font-size: max(calc(100vw/25), 1rem);  
  }

  ${ mq[ "md" ] } {
    height: 92vh;
    color: ${theme_colors.white};
    p { margin-top: -4rem; }
  }

  ${ mq[ "lg" ] } {
    height: 88vh;
    color: ${theme_colors.primaryColor};
    p { margin-top: -5.5rem; }
  }

`;

const Error404 = ( { state } ) => {


  return (
    <Container>
      <div className={cx(bigerror)}>
        <div className="smallbox">
          <div>
            <h1>404</h1>
          </div>
          <div>
            <p>error</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default connect( Error404 )