import Vue from 'vue'
import Vuex from 'vuex'

import index from './modules/index'
import topicDetail from './modules/topicDetail'
import me from './modules/me'
import meConcern from './modules/meConcern'
import sillkNoodles from './modules/sillkNoodles'
import editMe from './modules/editMe'
import meComment from './modules/meComment'
import hymnCollect from './modules/hymnCollect'
import silkNoodles from './modules/silkNoodles'
import helper from './modules/helper'
import publish from './modules/publish'
import seek from './modules/seek'
import comment from './modules/comment'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    index,
    topicDetail,
    me,
    meConcern,
    sillkNoodles,
    editMe,
    meComment,
    hymnCollect,
    silkNoodles,
    helper,
    publish,
    seek,
    comment
  }
})
