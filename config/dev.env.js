'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://127.0.0.1:8201"',
  OSS_PATH: '"https://msr-edu.oss-cn-beijing.aliyuncs.com"',
})
