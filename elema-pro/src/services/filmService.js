import API from '../api'
import axios from 'axios'

//商家信息

export function getItemSorting(){
    return new Promise((resolve,reject)=>{
        axios.get(API.BUSINESS_INFORMATION)
        .then(response=>{
            let data=[];
            response.data.items.map(item=>{
              item.restaurant.iSshow=false
             data.push(item.restaurant)
            })  
            resolve(data) 
           
                
        }).catch(error=>{
            // let data=error;
            console.log(error)
        })
        
    })
}


//商品排序导航
export function getitemSorting(){
    return new Promise((resolve,reject)=>{
        axios.get(API.ITEM_SORTING)
        .then(response=>{   
            // console.log(response)
            let data=response.data.inside_sort_filter.map(item=>{
                return item
            })
            let data2=response.data.outside_sort_filter.map(item=>{
                return item
            })
            // console.log(data)
            resolve({
                fristBtn:data,
                nextBtn:data2
            })
        })
        .catch(error=>{
            console.log(error)
        })
    })
   
}


//
export function getShowshop(id){
    return new Promise((resolve,reject)=>{
        axios.get(API.SHWO_SHOP+id)
        .then(response=>{
            // console.log(response)
           let data=response
           resolve(response.data)
            })
           
           .catch(error=>{
            // let data=error;

            console.log(error)
        })
        
    })
}