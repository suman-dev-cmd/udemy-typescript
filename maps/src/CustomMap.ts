import { User } from './User';
import { Company } from './Company';
export interface Mappable{
    location:{
        lat:number;
        lng:number;
    };
    markContent():string;
    color:string
}
export class CustomMap{
    private googleMap : google.maps.Map;
    constructor(divId:string){
        this.googleMap = new google.maps.Map(document.getElementById(divId),{
            zoom:1,
            center:{
                lat:0,
                lng:0
            }
        });
    }

    // addUserMarker(user:User):void{
    //     new google.maps.Marker({
    //         map:this.googleMap,
    //         position:{
    //             lat:user.location.lat,
    //             lng:user.location.lan,
    //         }
    //     });
    // }

    // addCompanyMarker(company:Company):void{
    //     new google.maps.Marker({
    //         map:this.googleMap,
    //         position:{
    //             lat:company.location.lat,
    //             lng:company.location.lan,
    //         }
    //     });
    // }

    addMarker(mappable:Mappable):void{
        const marker = new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:mappable.location.lat,
                lng:mappable.location.lng,
            }
        });

        marker.addListener('click',()=>{
            const infoWindow = new google.maps.InfoWindow({
                content:mappable.markContent()
            });
            infoWindow.open(this.googleMap,marker);
        })
    }
}