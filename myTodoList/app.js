//app.js
App({
  data: {
    taskList: [],
    indexNum: 0
  },

  onLaunch: function () {
    this.data.taskList = wx.getStorageSync('taskList') || [];
    this.data.indexNum = wx.getStorageSync('otherData').indexNum || 0;
  },

  onShow() {},

  onHide(){
    wx.setStorage({
      key: 'taskList',
      data: this.data.taskList,
    });
    wx.setStorage({
      key: 'otherData',
      data: {
        indexNum: this.data.indexNum
      },
    })
  }

})