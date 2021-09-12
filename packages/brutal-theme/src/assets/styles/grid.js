import { breakpoints, maxWidths } from "./variables";

export const gridTheme = {
  gridColumns: 12, // default 12
  breakpoints: { // defaults below
    xl: breakpoints.xl,
    lg: breakpoints.lg,
    md: breakpoints.md,
    sm: breakpoints.sm,
    xs: breakpoints.xs,
    // or you can use aliases
    // veryGiant: 1440,
    // giant: 1200,
    // desktop: 992,
    // tablet: 768,
    // phone: 576,
    // smaller: 575,
  },
  row: {
    padding: 20, // default 15
  },
  col: {
    padding: 20, // default 15
  },
  container: {
    padding: 0, // default 15
    maxWidth: { // defaults below
      xl: maxWidths.xl,
      lg: maxWidths.lg,
      md: maxWidths.md,
      sm: maxWidths.sm,
      // or you can use aliases
      // veryGiant: 1141,
      // giant: 1140,
      // desktop: 960,
      // tablet: 720,
      // phone: 540,
      // smaller: 540,
    },
  },
};