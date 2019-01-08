import {
  REQ_DATA,
  REQ_BANNER,
  REQ_CATEGORYL1LIST,
  REQ_KINGKONGMODULE,
  REQ_SCENELIGHTSHOPPINGGUIDEMODULE,
  REQ_REQCATEGORYMODULE,
  REQ_CURRENTCATEGORY,
  REQ_GETTABS,
  REQ_REQRECAUTO,
  SETSEARCHRESULT,
  RESETSEARCHRESULT,
  SETSEARCHGOODS,
  SETSEARCHINITLIST
} from './mutations-Type'

export default {
  [REQ_DATA] (state,{data}) {
    state.data = data;
  },
  [REQ_BANNER] (state,{focusList}) {
    state.focusList = focusList;
  },
  [REQ_KINGKONGMODULE] (state,{kingKongModule}) {
    state.kingKongModule = kingKongModule;
  },
  [REQ_SCENELIGHTSHOPPINGGUIDEMODULE] (state,{sceneLightShoppingGuideModule}) {
    state.sceneLightShoppingGuideModule = sceneLightShoppingGuideModule;
  },
  [REQ_REQCATEGORYMODULE] (state,{categoryModule}) {
    state.categoryModule = categoryModule;
  },
  [REQ_CURRENTCATEGORY] (state,{currentCategory}) {
    state.currentCategory = currentCategory;
  },
  [REQ_CATEGORYL1LIST] (state,{categoryL1List}) {
    state.categoryL1List = categoryL1List;
  },
  //网易在线接口识物Tab
  [REQ_GETTABS] (state,{data}) {
    state.data = data;
  },
  [REQ_REQRECAUTO] (state,{result}) {
    state.result = result;
  },

  //模糊查询,将获取的数据放入searchResult中
  [SETSEARCHRESULT](state, {searchResult}){
    state.searchResult = searchResult;
  },

  //模糊查询,将获取的数据放入searchResult中
  [RESETSEARCHRESULT](state){
    state.searchResult = [];
  },

  //商品查询,将获取的数据放入searchGoods中
  [SETSEARCHGOODS](state, {searchGoods}){
    state.searchGoods = searchGoods;
  },

  //查询页面的首屏信息,将获取的数据放入searchInitList中
  [SETSEARCHINITLIST](state, {searchInitList}){
    state.searchInitList = searchInitList;
  },

}
