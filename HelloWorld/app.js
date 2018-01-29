//app.js
//作用：监听并处理小程序的生命周期函数、声明全局变量、调用框架提供的丰富的API等
// 典型app.js代码结构
// App({
//   onLaunch: function () {
//   // 启动时执行的初始化工作
//   },
//   onShow: function () {
//   // 小程序启动或从后台进入前台时，触发执行的操作
//   },
//   onHide: function () {
//   // 小程序从前台进入后台时，触发指定的操作
//   },
//   globalConf: {
//     indexDate: '',
//     matchDate: ''
//   },
//   dataCache: {},
//   globalData: 'I am global data'
// })
App({
  onLaunch: function () {
    // 展示本地存储能力
    // 调用API从本地缓存中获取数据
    // 定义一个数组变量logs
    var logs = wx.getStorageSync('logs') || []
    // 在数组logs的集合开头插入一个元素，值为当前时间
    logs.unshift(Date.now())
    // 将数组logs写入本地名为logs缓存块中
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})