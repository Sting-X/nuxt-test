

import Vuex from 'vuex'
import mutations from './mutations.js'
const state = {
    feed: [],
    feedDeatil: [
            { content: '北约峰会特朗普惹人不快 “太太团”活动未受影响', id: 1 },
            { content: '宠妻十五年，一朝劈腿女秘书，蒋友柏这次是真的崩了！', id: 2 },
            { content: '《War and Order》首次登陆中国，只有苹果能玩，安卓急死', id: 3 },
            { content: '郭艾伦约战嘻哈歌手黄旭：有时间打一场', id: 4 },
            { content: '切尔西官方宣布：孔蒂下赛季将不再执教', id: 5 },
            { content: '地球日报|解读最新一周英美刊封面', id: 6 },
            { content: '安室奈美惠登杂志封面 女神气场全开', id: 7 },
        ]
}

const createStore = () => {
    return new Vuex.Store({
        state,
        mutations
    })
}

export default createStore
