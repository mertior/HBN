App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'lucky-9g15fi0e41c69c46',
        traceUser: true,
      })
    }
  },
  globalData: {
    userinfoL: null,
    musicURL: {
      // 排行榜
      
    },
    //正在播放的歌曲id
    songmid: null,
    //播放时间
    currentTime: "00:00",
    //播放总时间
    durationTime: "00:00",
    //播放进度
    sliderinfo: 0,
    //播放的状态
    broadcastState: true,
    //总歌曲的数组列表
    songList: [],
    //正在播放歌曲在歌曲列表中的索引值
    songCount: -2,
    //appid
    Appid: "wxd90ce64b07fce417",
    //秘钥
    Screat: "f22bcbd5aa61eb9a0748ea2c4bd6df58",
    openId:"",
    musicPlayList:["i like","hello","adele"],
    //当前歌曲的播放状态
    MusicState: 0
  }
})