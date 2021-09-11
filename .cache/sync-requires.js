const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("C:\\workspace\\www\\site-stanley\\node_modules\\gatsby-plugin-offline\\app-shell.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("C:\\workspace\\www\\site-stanley\\src\\templates\\blog-post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\workspace\\www\\site-stanley\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\workspace\\www\\site-stanley\\src\\pages\\about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\workspace\\www\\site-stanley\\src\\pages\\index.js")))
}

