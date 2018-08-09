import axios from "axios";


export function getAddressData(){
    return new Promise((resolve,reject)=>{
        axios.get('/v4/api/city?__t=1533797149649')
        .then(response=>{
            let data = response.data.data.cities;
            let citiesData = {};
            let citiesDataSort = {};
            data.map(item=>{
                let letter = item.pinyin[0]
                if(!citiesData[letter]){
                    citiesData[letter] = []
                }
                citiesData[letter].push(item)
            })

            let arr = []
            for(let key in citiesData){
                arr.push(key)
            }
            arr = arr.sort()
            // console.log(arr)
            for(let i = 0;i < arr.length;i++){
                citiesDataSort[arr[i]] = citiesData[arr[i]]
            }
            resolve(citiesDataSort)
        })
 })
}
