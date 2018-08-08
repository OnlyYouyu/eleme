import axios from "axios";

export function getSearchGoodsData(){
    return new Promise((resolve,reject)=>{
        axios.get('/restapi/shopping/v3/hot_search_words?latitude=22.54286&longitude=114.059563')
        .then(response=>{
            let data = response.data.map(item=>{
                return{
                   word:item.word, 
                }
                console.log(data) 
            })
            resolve(data)   
        })
        .catch(error=>{
            console.log('失败')
        })
    })
}