//商品排序导航
const ITEM_SORTING='/restapi/shopping/v1/restaurants/outside_filter/attributes?latitude=22.54286&longitude=114.059563&terminal=h5'



//商家信息
const BUSINESS_INFORMATION='/restapi/shopping/v3/restaurants?latitude=22.54286&longitude=114.059563&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&order_by=0&rank_id=&terminal=h5'

//优惠信息
const DISCOUNT_INFORMATION='https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=22.54286&longitude=114.059563&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&order_by=5&rank_id=&terminal=h5'
//地址
const ADDRESS_RECOMMENDATION='https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding?latitude=22.54286&longitude=114.059563'
//商品展示
const SHWO_SHOP='/shopping/v2/menu?restaurant_id='

export default{
    ITEM_SORTING,
    BUSINESS_INFORMATION,
    DISCOUNT_INFORMATION,
    ADDRESS_RECOMMENDATION,
    SHWO_SHOP
}