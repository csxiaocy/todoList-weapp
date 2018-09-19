// pages/index/index.js
import Notify from '../../dist/notify/notify';
const util = require('../../utils/util');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    isShowHistory: false,
    taskList: [],
    doingTaskList: [],
    unFinishedNum: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Notify({
      text: '欢迎使用',
      duration: 1500,
      selector: '#custom-selector',
      backgroundColor: '#38f'
    });

    let date = util.formatTime(new Date())
    this.setData({
      date: date
    })
  },

  changeIsShowHistory() {
    let isShowHistory = this.data.isShowHistory
    this.setData({
      isShowHistory: !isShowHistory
    })
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
    this.setData({
      taskList: app.data.taskList
    })
    let num = app.data.taskList.length;
    let doingTaskList = [];
    for(let i = 0; i < num; i++){
      if (!app.data.taskList[i].isFinished){
        doingTaskList.push(app.data.taskList[i])
      }
    };
    let unFinishedNum = doingTaskList.length;
    this.setData({
      doingTaskList: doingTaskList,
      unFinishedNum: unFinishedNum
    })
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