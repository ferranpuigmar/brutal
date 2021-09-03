import React from 'react'
import { styled } from 'frontity';
import { mq } from '../assets/styles/mediaqueries';
import { fontFamily } from '../assets/styles/variables';
import { theme } from '../assets/styles/theme';

const Paragraph = ( { text, className } ) =>
{
  const Wrapper = styled.p`
    font-family: ${ fontFamily.regular }, sans-serif;
    margin-bottom: 20px;
    font-size: 2rem;
    letter-spacing: 0.5px;
    color: ${ theme.colors.white };
    line-height: normal;
    &:last-child{
      margin-bottom: 0;
    }

    ${ mq[ "sm" ] } {
      font-size: 1.8rem;
      line-height: 1.6;
    }
  `

  return (
    <Wrapper className={ className }>
      { text }
    </Wrapper>
  )
}

const paragraph = {
  name: "paragraph",
  priority: 20,
  test: ( { component } ) =>
    component === "p",
  processor: ( { node } ) =>
  {
    const text = node.children[ 0 ].content;
    return {
      component: Paragraph,
      props: { text },
    };
  },
};

export default paragraph
