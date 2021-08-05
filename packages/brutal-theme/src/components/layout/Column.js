import { styled } from 'frontity';

const Column = ( { children, ...rest } ) =>
{
  return (
    <Wrapper { ...rest } >
      { children }
    </Wrapper>
  )
}

export default Column

const Wrapper = styled.div`
  flex: ${ ( props ) => props.size };
`
export default Col