import React from 'react'
import { styled } from 'frontity';
import { mq } from '../assets/styles/mediaqueries';
import { fontFamily } from '../assets/styles/variables';
import { theme } from '../assets/styles/theme';
import { spacing } from '../assets/styles/spacing';

const Paragraph = ( { text, className } ) =>
{
  const Wrapper = styled.p`
    font-family: ${ fontFamily.regular }, sans-serif;
    margin-bottom: ${ spacing[ 'mb-3' ] };
    letter-spacing: 0.5px;
    color: ${ theme.colors.white };

    &:last-child{
      margin-bottom: 0;
    }

    ${ mq[ "sm" ] } {
      margin-bottom: ${ spacing[ 'mb-6' ] };
    }

    ${ theme.fontSize.p }

  `

  return text ? <Wrapper className={ className }>
    { text }
  </Wrapper> : null
}

const paragraph = {
  name: "paragraph",
  priority: 20,
  test: ( { component } ) =>
    component === "p",
  processor: ( { node, className } ) =>
  {
    const text = node.children[ 0 ]?.content;
    return {
      component: Paragraph,
      props: { text, className },
    };
  },
};

export default paragraph
