//annotation in function
const add = (a:number,b:number):number=>{
    return a+b;
}

//interface in function

const sub = (a:number,b:number):number=>{
    return a-b;
}

//void function

const logger = (message:string):void=>{
    console.log(message);
}

//never function

const throwError = (message:string):never=>{
    throw new Error(message);
    
}

//destructuring with annotations

const forCast = {
    date:new Date,
    weather:'sunny'
}

const logWeather = (forCast:{date:Date,weather:string}):void=>{
    console.log(forCast.date);
    console.log(forCast.weather);
}