import faker from 'faker';
export default 'red';
import { Mappable } from './CustomMap';
export class User implements Mappable{
    name:string;
    location:{
        lat:number;
        lng:number;
    };
    color: string = 'red';
    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }

    markContent():string{
        return `User name: ${this.name}`;
    }
}