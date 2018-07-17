
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'bobo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'sina' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'http://mjs.sinaimg.cn/wap/module/base/img/favicon.ico' },
      { rel: 'stylesheet', href: '/css/main_all.css' },
      { rel: 'stylesheet', href: '/css/common_feed.css' },
      { rel: 'stylesheet', href: '/css/reset.css' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#1eabf6' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push(...[{
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        },
      ])
      }
    }
  }
}
