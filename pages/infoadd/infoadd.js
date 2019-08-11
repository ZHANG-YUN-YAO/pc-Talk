const app = getApp()
//引入wxParse
var WxParse = require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {

  //   wx.showLoading({
  //     title: '加载中',
  //     mask: true
  //   })
  //   var that = this;
  //   console.log(options)
  //   that.setData({
  //     activityId: options.activityId
  //   })

  //   wx.request({
  //     url: app.globalData.hostname + '/admin/cate2/queryfathercate',
  //     data: {
  //       token: app.globalData.token,
  //       activity: that.data.activityId
  //     },
  //     method: 'POST',
  //     success: function (res) {
  //       //获取html代码      
  //       that.setData({
  //         article: unescape(res.data.activity.aintroduct)
  //       })
  //       WxParse.wxParse('article', 'html', that.data.article, that, 5);
  //       wx.hideLoading();
  //     }
  //   })
  
  // }
  })