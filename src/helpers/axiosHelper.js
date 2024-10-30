import axios from "axios";

export async function callBackend(path, args){
    console.log(`${path}, + ${args}`)
    let resp = await axios.post(`http://www.sannes.se/api/${path}.php`, new URLSearchParams({ password: args }))
    let a = resp.data
    let b = a.guid
    console.log(a)
    //let q = await axios.post(`http://www.sannes.se/api/storeGuid.php`, new URLSearchParams({ guid: b }))
    //let v = q.data
    //console.log(v)
    return(a)
}   