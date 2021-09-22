export const breakpoints = {
  xs: 320,
  sm: 500,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440
}

export const maxWidths = {
  sm: breakpoints.xs - 40,
  sm: breakpoints.sm - 40,
  md: breakpoints.md - 80,
  lg: breakpoints.lg - 40,
  xl: breakpoints.xl - 40,
  xxl: breakpoints.xxl
}

export const theme_colors = {
  primaryColor: '#c1fc13',
  black: '#000',
  white: '#fff'
}


export const fontFamily = {
  bold: 'DMSansBold',
  regular: 'DMSansRegular'
}

export const mq = Object.keys( breakpoints )
  .map( ( key ) => [ key, `@media (min-width: ${ breakpoints[ key ] }px)` ] )
  .reduce( ( prev, [ key, breakpoint ] ) =>
  {
    prev[ key ] = breakpoint;
    return prev;
  }, [] );


export const fontSize = {
  h1: {
    fontSize: '3.5rem',
    lineHeight: '',
    [ mq[ 'sm' ] ]: {
      fontSize: '4.9rem',
    }
  },
  h2: {
    lineHeight: '1.1',
    fontSize: '3rem',
    [ mq[ 'sm' ] ]: {
      fontSize: '3.5rem',
    }
  },
  h3: {
    fontSize: '2.6rem',
    [ mq[ 'sm' ] ]: {
      fontSize: '3rem',
    },
  },
  h4: {
    fontSize: '2rem',
    [ mq[ 'sm' ] ]: {
      fontSize: '2rem',
    }
  },
  h5: {
    fontSize: '1.6rem',
    [ mq[ 'sm' ] ]: {
      fontSize: '1.6rem',
    }
  },
  h6: {
    fontSize: '1.2rem',
    [ mq[ 'sm' ] ]: {
      fontSize: '1.2rem',
    }
  },
  p: {
    fontSize: '2rem',
    lineHeight: '1.6',

    [ mq[ 'sm' ] ]: {
      fontSize: '2rem'
    }
  }
}

export const mobilePaddingBlock = '28px'
export const tabletPaddingBlock = '50px'
export const desktopPaddingBlock = '60px'