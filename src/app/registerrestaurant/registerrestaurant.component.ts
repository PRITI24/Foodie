import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {HttpClientService,Restaurant} from '../service/http-client.service';

interface categories {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registerrestaurant',
  templateUrl: './registerrestaurant.component.html',
  styleUrls: ['./registerrestaurant.component.css']
})
export class RegisterrestaurantComponent implements OnInit {
  // selectedValue: string;

  restaurant: Restaurant = new Restaurant(0,"","","","");
  // cat: categories[] = [
  //   {value: 'bar', viewValue: 'Bar'},
  //   {value: 'cafe', viewValue: 'Cafe'},
  //   {value: 'cloud_Kitchen', viewValue: 'Cloud Kitchen'},
  //   {value: 'takeaway', viewValue: 'TakeAway'}
  // ];
  constructor(
    private httpClientService: HttpClientService ) { }

  ngOnInit(): void {
  }
  getUserValue(values:any)
  {
    console.warn(values);
  }

  registerRestaurant(): void {
    console.log("entered");
    console.log(this.restaurant);
    this.httpClientService.registerRestaurant(this.restaurant)
        .subscribe( data => {
          alert("Restaurant Registered successfully.");
        });

  };
}
  