import ajax from './ajax'

const BASE = '/api'


export const reqCodeLogin = (phone, code) => ajax(BASE + 'login_sms', {phone, code}, 'POST');
export const reqGetUsers = () => ajax(BASE + '/userinfo')


//msite nav数据
export const reqData = () => ajax('/data')

//msite banner数据
export const reqBanner = () => ajax('/banner')
//msite ul列表数据
export const reqkingKongModule = () => ajax('/kingKongModule')

export const reqsceneLightShoppingGuideModule = () => ajax('/sceneLightShoppingGuideModule')


export const reqcategoryModule = () => ajax('/categoryModule')

export const reqcurrentCategory = () => ajax('/currentCategory')

export const reqcategoryL1List = () => ajax('/categoryL1List')

export const reqgettabs = () => ajax('/data')

//home 福利
export const reqsaleIndexVO = () => ajax('/saleIndexVO')

//home nav总数据
export const reqCateList = () => ajax('/cateList')

//home 新品下的list
export const reqnewItemNewUserList = () => ajax('/newItemNewUserList')
//home 专题精选 下的list
export const reqTopicList = () => ajax('/topicList')

//home 下面最终的list
export const reqPopularItemList = () => ajax('/popularItemList')

//home 下品牌的list
export const reqTagList = () => ajax('/tagList')

//home 下banner的提示
export const reqPolicyDescList = () => ajax('/policyDescList')

// item 下左右侧的数据
export const reqCategoryL1List = () => ajax('/categoryL1List')

// topic下的banner
export const reqTopicBanner = () => ajax('/topicBanner')

//topic banner 下的list
export const reqColumn = () => ajax('/column')

//识物 为你推荐下的list
export const reqRecommendOne = () => ajax('/recommendOne')

//识物 为你推荐下的list items
export const reqRecommendTwo = () => ajax('/recommendTwo')

//识物 为你推荐下的list items
export const reqRecommendThree = () => ajax('/recommendThree')

export const reqTenfifteen = () => ajax('/tenfifteen')

// 识物 下的严选臻品
export const reqZhenOne = () => ajax('/zhenOne')
export const reqZhenTwo = () => ajax('/zhenTwo')
export const reqZhenThree = () => ajax('/zhenThree')

//  识物 下的yxLook
export const reqYxLook = () => ajax('/yxLook')
//   识物 下的more
export const reqFindMore = () => ajax('/findMore')


