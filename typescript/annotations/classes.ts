class Vechiles {
    drive():void{
        console.log('chugga chugga');
    }
    hunk():void{
        console.log('hunk hunk');
    }
}
class Car extends Vechiles{
    drive():void{
        console.log('boom boom');
    }
}
const car = new Car();
car.drive();