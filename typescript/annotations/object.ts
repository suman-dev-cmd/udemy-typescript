const profile ={
    name:'suman',
    age:20,
    coords:{
        lat:0,
        lan:15
    },
    setAge(age:number):void{
        this.age=age;
    }
};
const {age}:{age:number} = profile;
const {coords:{lat,lan}} :{ coords:{lat:number,lan:number}} = profile;