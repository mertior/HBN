// pages/musicListName/musciListName.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicListName: [] ,// 初始列表项数据
    listName:""
  },
  addItem: function() {
    wx.showModal({
        editable:true,//显示输入框
        placeholderText:'输入拒绝原因',//显示输入框提示信息
        success: res => {
          if (res.confirm) { //点击了确认
            console.log(res.content)//用户输入的值
            db.collection("musicPlayListA").add({
              data:{
                musicPlayListName:res.content
              }
            })
          } else {
            console.log('用户点击了取消')
          }
        }
    })
  },
  checkPlayList: function(e){
    console.log(e.currentTarget.dataset.id)
    this.data.listName = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/playList/playList?musicPlayListName'+ this.data.listName,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(123)
    console.log(getApp().globalData.openId)
      db.collection("musicPlayListA").where({
        _openid: getApp().globalData.openId
      }).get({
        success: res=>{
          console.log(res)
          this.setData({
            musicListName: res.data
          })
        },fail: err=>{
          console.log("查询失败")
        }
      })
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