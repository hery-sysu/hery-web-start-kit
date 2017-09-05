import $ from 'n-zepto'
let Promise = require('es6-promise').Promise

// console.log(Promise)
/**
 * [请求模块 get请求]
 * @param  {[String]}  url          [请求链接]
 * @param  {[Object]}  data         [发送数据]
 * @param  {Object}  [options={}] [get请求配置，可选]
 * @param  {Boolean} [wait=true]  [是否显示请求发送中没，可选]
 * @return {[Promise]}               [返回异步请求对象，供调用进行返回逻辑编写]
 */
export const get = (url, data, options = {}, wait = true) => {
  let promise = new Promise(function (resolve, reject) {
    $.ajax({
      url: url,
      type: 'GET',
      data: data,
      dataType: 'json',
      timeout: 15 * 1000,
      success: function (datas) {
        console.log(datas)
        if (datas.code === 0) {
          resolve(datas)
        } else {
          reject(datas)
        }
      },
      error: function (error) {
        console.log(error)
        reject(error)
      }
    })
  })
  return promise
}

/**
 * [post description]
 * @param  {[String]} url          [请求地址]
 * @param  {[Object]} data         [发送数据]
 * @param  {Object} [options={}] [请求配置]
 * @return {[Promise]}              [返回异步请求对象，供调用进行返回逻辑编写]
 */
export const post = (url, data, options = {}) => {
  let promise = new Promise(function (resolve, reject) {
    let jsonData = JSON.stringify(data)
    $.ajax({
      url: url,
      type: 'POST',
      data: jsonData,
      dataType: 'json',
      timeout: 15 * 1000,
      success: function (datas) {
        console.log(datas)
        if (datas.code === 0) {
          resolve(datas)
        } else {
          reject(datas)
        }
      },
      error: function (error) {
        console.log(error)
        reject(error)
      }
    })
  })
  return promise
}
