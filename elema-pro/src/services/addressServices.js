import axios from "axios";


export function getAddressData(){
    return new Promise((resolve,reject)=>{
        axios.get('/restapi/bgs/poi/reverse_geo_coding?latitude=22.54286&longitude=114.059563')
        .then(response=>{
            let data = response.data.address.map(item=>{
                return{

                    name:item.name,
                } 
            })
            
            resolve(data)
            
        })
        .catch(error=>{
            console.log('失败')
        })
    })
}