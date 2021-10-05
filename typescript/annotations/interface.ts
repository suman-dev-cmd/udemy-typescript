interface Vechile{
    name:string;
    year:number;
    broken:boolean;
}

const printVechile = (vechile:Vechile):void=>{
    console.log(`vechile name ${vechile.name}`);
    console.log(`vechile year ${vechile.year}`);
    console.log(`vechile broken ${vechile.broken}`);
}

const oldCivic ={
    name:'civic',
    year:2000,
    broken:true
}

printVechile(oldCivic);