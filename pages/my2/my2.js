const app = getApp();
const HOSTNAME = app.globalData.hostname;
Page({
  data: {
    userInfo: null,
    sex: ''
  },
  getUserInfo(event) {
    if (wx.getStorageSync('user')) {
      this.setData({
        userinfo: wx.getStorageSync('user')
      })
    }
    wx.login({
      success: (res) => {
        let userinfo = event.detail.userInfo;
        wx.setStorage({
          key: 'user',
          data: userinfo,
        })
        let nickName = userinfo.nickName;
        this.setData({
          userInfo: userinfo
        })
        if (userinfo.gender == 0) {
          this.setData({
            sex: '未知'
          })
        } else if (userinfo.gender == 1) {
          this.setData({
            sex: '男'
          })
        } else if (userinfo.gender == 2) {
          this.setData({
            sex: '女'
          })
        }
        if (res.code) {
          wx.request({
            url: HOSTNAME + '/webinfo/insertuser',
            data: {
              username: nickName,
              sex: this.data.sex,
              avatarUrl: userinfo.avatarUrl,
              code: res.code
            },
            success:function(res){
              console.log(res);
            }
          })
        } else {
          console.log('登录失败! ' + res.errMsg);
        }
      }
    })
  }
})