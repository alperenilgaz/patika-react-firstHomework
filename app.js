import axios from "axios";

async function getData(id){

    const {data : firstRequset} = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    const {data : secondRequset} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const newObj =  {Users: firstRequset, Post : secondRequset}
    console.log(newObj)
}

export default getData