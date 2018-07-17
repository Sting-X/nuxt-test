<template>
  <section class="container">
    <div>
      <h1 class="title">标题：{{content}}</h1>
      <p>正文：{{content}}</p>
    </div>
  </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex'


export default {
  async asyncData ({query}) {
    let  feedDeatil =  [
            { content: '北约峰会特朗普惹人不快 “太太团”活动未受影响', id: 1 },
            { content: '宠妻十五年，一朝劈腿女秘书，蒋友柏这次是真的崩了！', id: 2 },
            { content: '《War and Order》首次登陆中国，只有苹果能玩，安卓急死', id: 3 },
            { content: '郭艾伦约战嘻哈歌手黄旭：有时间打一场', id: 4 },
            { content: '切尔西官方宣布：孔蒂下赛季将不再执教', id: 5 },
            { content: '地球日报|解读最新一周英美刊封面', id: 6 },
            { content: '安室奈美惠登杂志封面 女神气场全开', id: 7 },
        ];
      let curPage = feedDeatil.filter((item)=>{
        return item.id == query.id
      })
    return {
      query : query,
      title:curPage[0].content,
      content:curPage[0].content
    }
  },
  computed:{
    ...mapState([
      'feedDeatil'
    ])
  },
  components: {
  },
  mounted() {
  },
  head () {
    return {
      title: this.title
    }
  },
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 24px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
