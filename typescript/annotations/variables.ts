const apples:number = 5;
let speed:string = 'fast';
let hasName:boolean = false;
let nothingMuch:null = null;
let nothing:undefined = undefined;

//built in object
let now: Date = new Date();

//array 

let colors: string[] = ['red','green','blue'];

// class

class Car {


}

let car: Car = new Car();

//object literal

let point:{x:number,y:number} = {
 x:10,
 y:30
}

//funtion
const logNumber:(i:number) =>void  = (i:number)=>{
    console.log(i);
}