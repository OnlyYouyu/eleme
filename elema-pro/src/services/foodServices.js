import axios from "axios";

export function getFoodListData(){
    return new Promise((resolve,reject)=>{
        axios.get('/restapi/shopping/v2/foods_page/sift_factors?entry_id=20004689&longitude=114.085947&latitude=22.547&terminal=h5')
        .then(response=>{
            let data = response.data.map(item=>{
                return{
                   id:item.id,
                   name:item.name 
                }
            })
            resolve(data)   
        })
        .catch(error=>{
            console.log('失败')
        })
    })
}