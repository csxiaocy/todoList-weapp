import Dialog from '../../dist/dialog/dialog';
import Toast from '../../dist/toast/toast';
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    task: {},
    key: '',
    index: '',
    options: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let key = options.key;
    let task, index;
    let num = app.data.taskList.length;
    for (let i = 0; i < num; i++){
      if (app.data.taskList[i].key == key){
        task = app.data.taskList[i];
        index = i;
        break;
      }
    };
    this.setData({
      task: task,
      key: key,
      index: index,
      options: options
    });
  },

  changeIsFinished() {
    let index = this.data.index;
    app.data.taskList[index].isFinished = true;
    this.onLoad(this.data.options);
  },

  delTask() {
    Dialog.confirm({
      title: '提示',
      message: '确认删除?'
    }).then(() => {
      Dialog.close;
    }).catch(() => {
      Dialog.close;
    });
  },

  sureDelTask() {
    let key = this.data.key;
    let num = app.data.taskList.length;
    for (let i = 0; i < num; i++) {
      if (app.data.taskList[i].key == key) {
        app.data.taskList.splice(i, 1);
        break;
      }
    };
    Toast('删除成功');
    wx.navigateBack();
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