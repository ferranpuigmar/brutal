import { spacing } from './spacing'

export const breakpoints = {
  xs: 320,
  sm: 500,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440
}

export const maxWidths = {
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