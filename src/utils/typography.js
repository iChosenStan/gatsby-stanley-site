import Typography from "typography"
//import Lincoln from "typography-theme-lincoln"
//import Wordpress2016 from "typography-theme-wordpress-2016"
import Moraga from "typography-theme-moraga"

Moraga.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "html": {
        fontFamily: `PT Sans`,
    },
    "body": {
        fontFamily: `PT Sans`,
    }
  }
}

//delete Wordpress2016.googleFonts
const typography = new Typography(Moraga)
/*
Lincoln.overrideStyles = () => {
    return {
        "html": {
            fontFamily: `PT Sans`,
        },
        "body": {
            fontFamily: `PT Sans`,
        }
    }
}
const typography = new Typography(Lincoln)
*/
// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
