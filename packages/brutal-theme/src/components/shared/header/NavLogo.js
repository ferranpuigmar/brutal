import React from 'react';
import { connect, styled } from 'frontity';
import Link from "@frontity/components/link";

const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  margin: auto 0;
  a { height: 100% }
`;

const NavLogo = ({ state }) => {
  const logo_white = state.source.get( `/globaloptions/${ state.theme.globalOptions }/` ).acf.logo_white;

  return (
    <Logo>
      <div className="logo">
        <Link link={ `/` }>
          <img src={logo_white} className="logo" />
        </Link>
      </div>
    </Logo>
  )
}

export default connect ( NavLogo )