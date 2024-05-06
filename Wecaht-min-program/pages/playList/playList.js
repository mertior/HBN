// pages/playList/playList.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicList:[{
      songName:"11111"
    },
  {
    songName:"2222222"
  }],
    songCount:-2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options.musicPlayListName)
    // db.collection("musicPlayListB").where({
    //   _openid:getApp().globalData.openId,
    //   musicPlayListName:options.musicPlayListName
    // }).get({
    //   success:res=>{
    //     this.setData({
    //       musicList:res.data
    //     })
    //   },fail: err=>{
    //     console.log("查询失败")
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      songCount:getApp().globalData.songCount
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})