import axios from "axios";
const url = 'https://jsonplaceholder.typicode.com/comments';
axios.get(url).then(res=>console.log(res.data)).catch(err=>console.log(err));