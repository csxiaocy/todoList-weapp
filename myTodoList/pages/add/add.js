// pages/detail/detail.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    content: '',
    array: ['', '生活', '工作', '学习', '其他'],
    index: 0,
    label: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  getTitle(event) {
    this.setData({
      title: event.detail
    })
  },

  getContent(event) {
    this.setData({
      content: event.detail
    })
  },

  bindPickerChange: function (event) {
    let array = this.data.array;
    this.setData({
      label: array[event.detail.value]
    })
  },

  addTask() {
    if (this.data.title){
      wx.showLoading({
        title: '创建中'
      });

      let key = 'task' + (++app.data.indexNum).toString();
      let newTask = {
        title: this.data.title,
        content: this.data.content,
        label: this.data.label,
        isFinished: false,
        key: key
      };
      app.data.taskList.push(newTask);
      
      wx.hideLoading();
      wx.showToast({
        title: '创建成功',
      })
      wx.navigateBack();
    } else {
      wx.showModal({
        title: '提示',
        content: '任务标题不能为空',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})