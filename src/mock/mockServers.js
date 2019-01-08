/*
 使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'
import data_nav from './data_nav.json'
import home_data from './home_data.json'
import shiwu_data from './shiwu_data.json'
import fenlei_zhuanqu from './fenlei_zhuanqu.json'
import FeHelper from './new_data.json'
import FeHelper1 from  './daren_data.json'
import msite from './msite.json';
import category from './category.json';

// data的接口
Mock.mock('/data', {code:0, data: data})
//首页轮播图片的接口
Mock.mock('/banner', {code:0, focusList: home_data.focusList})
//首页ul列表接口

Mock.mock('/kingKongModule',{code:0,kingKongModule:home_data.kingKongModule})

Mock.mock('/sceneLightShoppingGuideModule',{code:0,sceneLightShoppingGuideModule:home_data.sceneLightShoppingGuideModule})

Mock.mock('/currentCategory',{code:0,data:category})
// 分类下数据
Mock.mock('/categoryL1List', {code:0, categoryL1List: data_nav.categoryL1List})

Mock.mock('/categoryModule',{code:0,categoryModule:home_data.categoryModule})

Mock.mock('/data',{code:0,data:FeHelper.data})

Mock.mock('/result',{code:0,result:FeHelper1.data.result})
//返回home页数据的接口
Mock.mock('/home', {code:0, home: home_data})
//home nav数据总数组
Mock.mock('/cateList', {code:0, cateList: home_data.cateList})
//home 下人气推荐的list
Mock.mock('/newItemNewUserList',{code:0,newItemNewUserList: home_data.newItemNewUserList})
//home 下人气推荐的list
Mock.mock('/popularItemList',{code:0,popularItemList: home_data.popularItemList})
//home 下品牌的list
Mock.mock('/tagList',{code:0,tagList: home_data.tagList})
//home 下专题下的list
Mock.mock('/topicList',{code: 0,topicList: home_data.topicList})
//home banner下的list
Mock.mock('/policyDescList',{code: 0,policyDescList: home_data.policyDescList})
Mock.mock('/saleIndexVO', {code:0, saleIndexVO: home_data.saleIndexVO})


//识物下的banner
Mock.mock('/topicBanner', {code:0, banner: shiwu_data.banner})
//识物 banner下的list
Mock.mock('/column', {code:0, column: shiwu_data.column})
//识物 为你推荐下的list
Mock.mock('/recommendOne', {code:0, recommendOne: shiwu_data.recommendOne})
//识物 为你推荐下的list 下的items
Mock.mock('/recommendTwo', {code:0, recommendTwo: shiwu_data.recommendTwo})
//识物 为你推荐下的list 下的items
Mock.mock('/recommendThree', {code:0, recommendThree: shiwu_data.recommendThree})
// 识物 tenfifteen
Mock.mock('/tenfifteen', {code:0, tenfifteen: shiwu_data.tenfifteen})
// 识物 下臻品list
Mock.mock('/zhenOne', {code:0, zhenOne: shiwu_data.zhenOne})
Mock.mock('/zhenTwo', {code:0, zhenTwo: shiwu_data.zhenTwo})
Mock.mock('/zhenThree', {code:0, zhenThree: shiwu_data.zhenThree})
// 识物 下的严选LOOK
Mock.mock('/yxLook', {code:0, yxLook: shiwu_data.yxLook})
// 识物 下的more
Mock.mock('/findMore', {code:0, findMore: shiwu_data.findMore})
//返回detail页数据的接口
Mock.mock('/detail', {code:0, detail: shiwu_data})
//返回分类页nav数据
Mock.mock('/nav', {code:0, nav: data_nav})

