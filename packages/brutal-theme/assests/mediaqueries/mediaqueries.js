const breakpoints= {
  sm: 500,
  md: 768,
  lg: 992,
  xl: 1200,
};

const mq = Object.keys(breakpoints)
  .map((key) => [key, breakpoints[key]])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (min-width: ${breakpoint}px)`;
    return prev;
  });

const Container = styled.div`
  ${mq["sm"]} {
    max-width: 750px;
  }
  ${mq["md"]} {
    max-width: 970px;
  }
  ${mq["lg"]} {
    max-width: 1170px;
  }
`;