export default function wxrequest(options) {
  return new Promise(function (result, reject) {
    wx.request({
      url: options.url, //仅为示例，并非真实的接口地址
      method: options.method || 'get',
      data: options.data || {},
      header: options.header || {},
      success(res) {
        result(res)
      },
      fail: function (error) {
        reject(error)
      }
    })
  })
}