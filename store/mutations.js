import {
  REQ_DATA,
  REQ_BANNER,
  REQ_SALEINDEXVO,
  REQ_CATELIST,
  REQ_NEWITEMNEWUSERLIST,
  REQ_TOPICLIST,
  REQ_POPULARITEMLIST,
  REQ_TAGLIST,
  REQ_POLICYDESCLIST,
  REQ_CATEGORYL1LIST,
  REQ_TOPICBANNER,
  REQ_COLUMN,
  REQ_RECOMMENDONE,
  REQ_RECOMMENDITEMS,
  REQ_TENFIFTEEN,
  REQ_ZHENITEMS,
  REQ_ZHENONE,
  REQ_YXLOOK,
  REQ_FINDMORE,
  REQ_USERINFO,
  RESET_USERS,
  REQ_KINGKONGMODULE,
  REQ_SCENELIGHTSHOPPINGGUIDEMODULE,
  REQ_REQCATEGORYMODULE,
  REQ_CURRENTCATEGORY,
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

  [REQ_SALEINDEXVO] (state, {saleIndexVO}) {
    state.saleIndexVO  = saleIndexVO;
  },
  [REQ_CATELIST] (state,{cateList}) {
    state.cateList = cateList;
  },
  [REQ_NEWITEMNEWUSERLIST] (state,{newItemNewUserList}) {
    state.newItemNewUserList = newItemNewUserList
  },
  [REQ_TOPICLIST] (state,{topicList}) {
    state.topicList = topicList;
  },
  [REQ_POPULARITEMLIST] (state,{popularItemList}) {
    state.popularItemList = popularItemList;
  },
  [REQ_TAGLIST] (state,{tagList}) {
    state.tagList = tagList;
  },
  [REQ_POLICYDESCLIST] (state,{policyDescList}) {
    state.policyDescList = policyDescList;
  },

  [REQ_TOPICBANNER] (state,{banner}) {
    state.banner = banner
  },
  [REQ_COLUMN] (state,{column}) {
    state.column = column
  },
  [REQ_RECOMMENDONE] (state,{recommendOne}) {
    state.recommendOne = recommendOne
  },
  [REQ_RECOMMENDITEMS] (state,{recommendTwo,recommendThree}) {
    if (state.recommendItems.length === 0){
      state.recommendItems.push(recommendTwo,recommendThree)
    }
  },
  [REQ_TENFIFTEEN] (state,{tenfifteen}) {
    state.tenfifteen = tenfifteen
  },
  [REQ_ZHENONE] (state,{zhenOne}) {
    state.zhenOne = zhenOne
  },
  [REQ_ZHENITEMS] (state,{zhenTwo,zhenThree}) {
    if (state.zhenItems.length === 0){
      state.zhenItems.push(zhenTwo,zhenThree)
    }
  },
  [REQ_YXLOOK] (state,{yxLook}) {
    state.yxLook = yxLook
  },
  [REQ_FINDMORE] (state,{findMore}) {
    state.findMore = findMore
  },
  [REQ_USERINFO] (state,{users}){
    state.users = users
  },
  [RESET_USERS] (state){
    state.users = {}
  }
}
