const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

module.exports = () => {
  const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './src/styles/antd-custom.less'), 'utf8')
  )

  if (typeof require !== 'undefined') {
    // eslint-disable-next-line node/no-deprecated-api
    require.extensions['.less'] = file => {}
  }

  return withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables
    }
  })
}
