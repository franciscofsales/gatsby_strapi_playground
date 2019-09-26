// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-movie-js": () => import("/Users/franciscosales/Development/tests/strapi/website/src/templates/movie.js" /* webpackChunkName: "component---src-templates-movie-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/franciscosales/Development/tests/strapi/website/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/franciscosales/Development/tests/strapi/website/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/franciscosales/Development/tests/strapi/website/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/Users/franciscosales/Development/tests/strapi/website/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/franciscosales/Development/tests/strapi/website/.cache/data.json")

