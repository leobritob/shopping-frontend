import color from 'color'

const primary = '#069'

export const theme = {
  colors: {
    primary,
    primaryLighten: color(primary).lighten(0.5).hex(),
    primaryDarken: color(primary).darken(0.5).hex(),
  },
}
