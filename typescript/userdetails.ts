import axios from "axios";
const url = 'https://jsonplaceholder.typicode.com/comments/1';
interface Todo{
    id:number,
    name:string,
    email:string
}
axios.get(url)
.then((res)=>{
    const details = res.data as Todo;
    const id = details.id;
    const name = details.name;
    const email = details.email;
    consoleLog(id,name,email);
})
.catch(err=>console.log(err));

const consoleLog =(id:number,name:string,email:string)=>{
    console.log(`
    User Id : ${id}
    User Name: ${name}
    User Email: ${email}
`);
}