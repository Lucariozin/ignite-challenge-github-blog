type Sizes = 'lg' | 'md' | 'sm'

// eslint-disable-next-line
const sizesObj: { [K in Sizes]: number } = {
  lg: 1200,
  md: 900,
  sm: 600,
}

export const theme = {
  palette: {
    white: '#FFFFFF',
    blue: {
      400: '#3294F8',
    },
    gray: {
      100: '#E7EDF4',
      200: '#C4D4E3',
      300: '#AFC2D4',
      400: '#7B96B2',
      500: '#3A536B',
      600: '#1C2F41',
      700: '#112131',
      800: '#0B1B2B',
      900: '#071422',
      950: '#040F1A',
    },
  },
  breakpoints: {
    sizes: sizesObj,
    down: (size: Sizes | number) => {
      const sizeNumber = typeof size === 'number' ? size : sizesObj[size]

      return `@media (max-width: ${sizeNumber}px)`
    },
    up: (size: Sizes | number) => {
      const sizeNumber = typeof size === 'number' ? size : sizesObj[size]

      return `@media (min-width: ${sizeNumber}px)`
    },
  },
} as const

export type CustomTheme = typeof theme
