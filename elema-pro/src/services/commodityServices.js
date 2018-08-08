import axios from "axios";
// import Api from "../api/index.js";

//请求轮播图数据
export function getBannerHomeData(){
    return new Promise((resolve,reject)=>{
        axios.get('/restapi/shopping/openapi/entries?latitude=22.547&longitude=114.085947&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5')
        .then(response=>{
            let data = response.data[0].entries.map(item=>{
                return{
                    id:item.id,
                    name:item.name,
                    image:item.image_hash
                } 
            })
            
            resolve(data)
            
        })
        .catch(error=>{
            console.log('失败')
        })
    })
}
//请求优惠专区数据
export function getDiscountHomeData(){
    return new Promise((resolve,reject)=>{
        axios.get('/restapi/shopping/openapi/entries?latitude=22.547&longitude=114.085947&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5')
        .then(response=>{
            let data = response.data[1].entries.map(item=>{
                return{
                    id:item.id,
                    description:item.description,
                    name:item.name,
                    image:item.image_hash,
                    more:item.more
                } 
            })
            
            resolve(data)
            
        })
        .catch(error=>{
            console.log('失败')
        })
    })
}