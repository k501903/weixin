//index.js
//获取应用实例
const app = getApp()

// 典型的页面.js代码结构
// Page({
//   Data: {
//     Text: 'This is page data.'
//   },
//   onLoad: function () {
//     页面加载时执行的初始化工作
//   },
//   onReady: function () {
//     页面就绪后触发执行的操作
//   },
//   onShow: function () {
//     页面打开时，触发执行的操作
//   },
//   onHide: function () {
//     页面隐藏时，触发执行的操作
//   },
//   onUnLoad: function () {
//     页面关闭时触发执行的操作
//   },
//   事件触发函数
//   viewTap: function () {
//     this.setData({
//       text: 'set some data for updating view.'
//     })
//   },
// })
Page({
  data: {
    motto: 'Hello World！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 在app.js中定义的userinfo默认为null
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
