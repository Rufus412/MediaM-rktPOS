import axios from "axios";

export async function postToBackend(path, args){
    let resp = await axios.post(`http://www.sannes.se/api/${path}.php`, new URLSearchParams(args))
    let r = resp.data
    console.log(r.guid)
    return(r)
}   