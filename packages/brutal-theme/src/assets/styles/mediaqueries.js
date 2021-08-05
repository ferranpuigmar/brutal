import { breakpoints } from "./variables";

export const mq = Object.keys( breakpoints )
  .map( ( key ) => [ key, `@media (min-width: ${ breakpoints[ key ] }px)` ] )
  .reduce( ( prev, [ key, breakpoint ] ) =>
  {
    prev[ key ] = breakpoint;
    return prev;
  }, [] );