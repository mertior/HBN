// pages/homepage/homepage.js
const app = getApp();
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: "",
    login: {
      show: false,
      avatar: 'https://img0.baidu.com/it/u=3204281136,1911957924&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    }
  },
  // 登录监听
  chooseAvatar(e) {
    console.log(e)
    wx.login({
      success: (res) => {
        this.setData({
          code : res.code,
        })
        console.log("1")
        console.log(this.data.code)
      },
    })
    this.setData({
      login: {
        show: true,
        avatar: e.detail.avatarUrl,
      }
    })
    console.log(this.data.code)
    // 发起网络请求
  },
  // 基本信息
  basicClick() {
    console.log('基本信息监听');
    db.collection("music").add({
      data:{
            musicPlayListName:"i like"
      }
    }).then(res=>{

    })
  },
  // 匿名反馈
  feedbackClick() {
    console.log('匿名反馈监听');
    wx.navigateTo({
      url: '/pages/musicListName/musicListName',
    })
    // wx.showModal({
    //   editable:true,//显示输入框
    //   placeholderText:'输入拒绝原因',//显示输入框提示信息
    //   success: res => {
    //     if (res.confirm) { //点击了确认
    //       console.log(res.content)//用户输入的值
    //       db.collection("musicPlayListA").add({
    //         data:{
    //           musicPlayListName:res.content
    //         }
    //       })
    //     } else {
    //       console.log('用户点击了取消')
    //     }
    //   }
    // })
  },
  // 关于我们
  aboutClick() {
    console.log('关于我们监听');
    const url = 'https://api.weixin.qq.com/sns/jscode2session?appid=wxd90ce64b07fce417&secret=0dae81de41760377fb7d11f6a5808983&js_code='+this.data.code+'&grant_type=authorization_code';
    console.log(url);
    wx.request({
      url,
      success:(res)=>{
        getApp().globalData.openId = res.data.openid;
        console.log(getApp().globalData.openId);
      }
    })
  },
  // 退出监听
  exitClick() {
    let that = this;
    wx.showModal({
      title: '提示',
      content: '确定退出登录吗？',
      success(res) {
        if (res.confirm) {
          that.setData({
            login: {
              show: false,
              avatar: 'https://img0.baidu.com/it/u=3204281136,1911957924&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const url = 'https://api.weixin.qq.com/sns/jscode2session?appid=wxd90ce64b07fce417&secret=0dae81de41760377fb7d11f6a5808983&js_code='+this.data.code+'&grant_type=authorization_code';
    console.log(url);
    wx.request({
      url,
      success:(res)=>{
        console.log(res);
        console.log("2");
        console.log(res.data.openid);
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
