// components/songItem.js
const db = wx.cloud.database()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    songList: {
      value: {},
      type: Object
    },
    musicCount:{
      type: Number,
      value: 0
    },
    songCount: {
      type: Number,
      value: -10
    }
  },
  data: {
    name: "Mrcui-ming",
    musicPlayList:[]
  },
  methods: {
    songItemClick(e){
      //事件的传递参数  data-属性名="值" 可传递JSON。
      //组件用currentTarget获取  pages使用target获取
      // const data = e.currentTarget.dataset.key;
      console.log(e);
      
      const StrsongList = JSON.stringify(this.data.songList);  
      wx.navigateTo({
        url: `/pages/play/play?songList=${StrsongList}&songCount=${this.data.musicCount - 1}`,
      })
    },
    addMusic(e){
      
    },
    bindPickChange(e){
      console.log(e.detail.value)
      db.collection("musicPlayListB").add({
        data:{
          _openid:getApp().globalData.openId,
          musicPlayListName:e.detail.value,
          musicName:this.data.songList.SongName,
          musicId:this.data.songList._id
        }
      })
      console.log("点击了吗")
    }
  },
    attached(e){
      db.collection("musicPlayListA").where({
        _openid:getApp().globalData.openId
      }).get({
        success:res =>{
          this.data.musicPlayList = res.data
        } ,fail:err =>{
          console.log("查询失败")
        }
      })
      // this.setData({
      //   musicPlayList:getApp().globalData.musicPlayList
      // })
    }
})
