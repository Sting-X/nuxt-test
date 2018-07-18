<template>
    <div>
   <main class="page_main ">
        <header class="hd">
            <a class="icon_lg"  href="https://sina.cn/?vt=4&pos=108"  title="新浪移动_手机新浪网">
            <h1 class="hide"></h1>
          </a>
          <nav class="hd_cut" data-sudaclick="top_version"><a class="active"  href="javascript:;"  title="新浪网 手机新浪网 首页 智能推荐算法">标准版</a><a  href="javascript:;"  title="智能版">智能版</a></nav>
          <nav class="hd_set">
            <a id="weather_icon" class="hd_s_w hide"  href="http://weather1.sina.cn/?ttp=n13&vt=4&pos=108"  title="未来三天 天气趋势"></a>
            <a id="loginBox" class="hd_s_user icon_user"  href="http://my.sina.cn/?vt=4&pos=108" data-sudaclick="h_n_faceimg"></a>
            <a class="hd_s_set icon_set"  href="http://langshou.tytest.sina.cn/index/settings?vt=4&pos=108"  title="设置">
              <h2 class="hide">新浪移动_手机新浪网_用户设置</h2></a>
          </nav>
          <nav class="hd_nav" data-sudaclick="top_nav" id="j_top_nav">
            <a class="hd_nav_a" href="https://news.sina.cn/?vt=4&pos=108"  title="新闻">新闻</a>
            <a class="hd_nav_a" href="http://finance.sina.cn/?vt=4&pos=108" title="财经">财经</a>
            <a class="hd_nav_a" href="https://sports.sina.cn/?vt=4&pos=108" title="体育">体育</a>
            <a class="hd_nav_a" href="https://ent.sina.cn/?vt=4&pos=108" title="娱乐">娱乐</a>
            <a class="hd_nav_a" href="https://mil.sina.cn/?vt=4&pos=108" title="军事">军事</a>
            <a class="hd_nav_a" href="http://auto.sina.cn/?vt=4&pos=108" title="汽车">汽车</a>
            <a class="hd_nav_a" href="https://tech.sina.cn/?vt=4&pos=108" title="科技">科技</a>
            <a class="hd_nav_a" href="http://video.sina.cn/?vt=4&pos=108" title="视频">视频</a>
            <a class="hd_nav_a" href="https://photo.sina.cn/?vt=4&pos=108" title="美图">美图</a>
            <a class="hd_nav_a" href="http://nba.sina.cn/?vt=4&pos=108" title="NBA">NBA</a>
            <a class="hd_nav_a" href="http://blog.sina.cn/?vt=4&pos=108" title="博客">博客</a>
            <a class="hd_nav_a" href="http://m.leju.com/?vt=4&pos=108#source=m_sina_dbdh&source_ext=sina" title="房产">房产</a>
            <a class="hd_nav_a" href="http://finance.sina.cn/stock?vt=4&pos=108" title="股票">股票</a>
            <a class="hd_nav_a" href="http://games.sina.cn/?vt=4&pos=108" title="游戏">游戏</a>
            <a class="hd_nav_a" href="http://book.sina.cn/?wm=book_wap_0043&vt=4&pos=108" title="小说">小说</a>
            <a class="hd_nav_a" href="http://ast.sina.cn/?vt=4&pos=108" title="星座">星座</a>
            <a class="hd_nav_a" href="https://edu.sina.cn/?vt=4&pos=108" title="高考">教育</a>
            <a class="hd_nav_a" href="http://eladies.sina.cn/?vt=4&pos=108" title="女性">女性</a>
            <a class="hd_nav_a" href="http://health.sina.cn/?vt=4&pos=108" title="健康">健康</a>
            <a class="hd_nav_a" href="http://weibo.cn/?vt=4&pos=108" title="微博">微博</a>
            <a class="hd_nav_a" href="http://sina.cn/index/nav?vt=4&pos=108" title="更多">更多</a></nav>
      </header>

      
      <section class="s_card_item " id="j_card_tnews">
          <section class="s_card" id="j_card_yaowen" data-sudaclick="ls_c_yaowen">
              <nuxt-link :to="{path: '/detail/index' ,query:{id:item.id}}" tag='div' class="m_f_a_no cn"  :key="index" v-for="(item, index) in $store.state.feed">

                  <h2 class="cm_tit">{{item.title}}</h2>
                  <blockquote class="cm_f_ic">
                    <em class="m_f_con_n fr">
                      <span class="m_f_con_ic icon_com"></span>
                    </em>
                  </blockquote>
              </nuxt-link>
          </section>
      </section>  

      </main>
      <!-- <h1 class="title">index-首页</h1>
        <router-link tag='p' :to="{path: 'detail/index', query: {id: 1} }" >
          <li>12312</li>
          <p>123</p>
        </router-link> -->
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  async asyncData () {
    let { data } = {data:{
      title:'index',
    }};

    return {
      title: data.title
    }
  },
  components: {
  },
  methods:{
    ...mapMutations([
        'homeFeed'
    ]),
  },
  mounted(){
    this.homeFeed()

  },
  head () {
    return {
      title: this.title
    }
  },
}
</script>
<style>
*{
  margin:0;padding:0;
}
.m_f_a_no{
  height: 3rem;
}
.cm_tit{
height:3rem;
line-height: 3rem;
}
</style>
