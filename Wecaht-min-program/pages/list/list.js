const db = wx.cloud.database()

Page({
  data: {
   songList: [],
   songCount: 0
  },
  onLoad: function (options) {
    //显示toast
    wx.showLoading({
      title: "正在加载..."
    })
    db.collection("music").get({
      success:res=>{
        console.log(res)
        this.setData({
          songList: res.data
        },()=>{
          getApp().globalData.songList = this.data.songList;
        })
        wx.hideLoading();
      }
    })
    // wx.request({
    //   url: getApp().globalData.musicURL.TOPURL,
    //   success: (response) => {
    //     this.setData({
    //       songList: response.data.songlist
    //     },() => {
    //       getApp().globalData.songList = this.data.songList;
    //     })
    //     //隐藏toast
    //     wx.hideLoading();
    //   }
    // })
  },
  onShow() {
    this.setData({songCount: getApp().globalData.songCount})
  },
  onReady: function () {
  },
  onUnload: function() {
    console.log("组件被销毁")
  }
})