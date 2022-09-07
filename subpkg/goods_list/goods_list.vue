<template>
  <view>
    <van-card :thumb-link="`/subpkg/goods_detail/goods_detail?id=${item.goods_id}`" v-for="item in goods"
      :key="item.goods_id" :num="item.goods_number" :price="item.goods_price | toFixed" desc="描述信息"
      :title="item.goods_name" :thumb="item.goods_small_logo || defaultPic" />
  </view>
</template>

<script>
  import toast from '@/until/toast.js'
  import {
    getGoodsList
  } from '@/api/goods.js'
  export default {
    data() {
      return {
        queryData: {
          query: ',',
          cid: '',
          pagenum: 1,
          pagesize: 10
        },
        goods: [],
        total: 0,
        defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
        isloading: false
      }
    },
    methods: {
      async getGoodsList(stopPullDownRefresh) {
        this.isloading = true
        const res = await getGoodsList(this.queryData)
        // const res = await getGoodsList(this.queryData)
        console.log(res)
        this.isloading = false
        this.goods = [...this.goods, ...res.message.goods]
        this.total = res.message.total
        stopPullDownRefresh && stopPullDownRefresh()
      }
    },
    onPullDownRefresh() {
      this.queryData = {
        query: this.queryData.query,
        cid: '',
        pagenum: 1,
        pagesize: 10
      }
      goods: []
      total: 0
      this.getGoodsList(wx.stopPullDownRefresh)
    },
    // 触底的事件
    onReachBottom() {
      if (this.queryData.pagenum * this.queryData.pagesize >= this.total) return
      // 判断是否正在请求其它数据，如果是，则不发起额外的请求
      if (this.isloading) return
      // 让页码值自增 +1
      this.queryData.pagenum++
      // 重新获取列表数据
      this.getGoodsList()
    },
    onLoad({
      query
    }) {
      this.queryData.query = query
      this.getGoodsList()
    }
  }
</script>

<style>

</style>
