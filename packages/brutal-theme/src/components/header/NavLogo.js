import React from 'react';
import { connect, styled } from 'frontity';
import Link from "@frontity/components/link";
import logoSVG from '../../assets/images/logo-whiteletter.svg';

const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  margin: auto 0;
  a {
    height: 100%;
  }
`;

const NavLogo = () => {
  return (
      <Logo>
        <div className="logo">
          <Link link={ `/` }>
            <img src={logoSVG} className="logo" />
          </Link>
        </div>
      </Logo>
  )
}

export default connect ( NavLogo )