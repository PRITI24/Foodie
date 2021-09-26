import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationChangeEvent } from '@angular/common';

export class Restaurant{
  constructor(
    public id:number,
    public name:string,
    public category:string,
    public location:string,
    public contactNo:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient
    ) { 
       }
  
  getEmployees()
    {
      console.log("test call");
      return this.httpClient.get<Restaurant[]>('http://localhost:8080/restaurant/gell_All_restaurant');
    }

    public registerRestaurant(restaurant:any) {
      return this.httpClient.post<Restaurant>("http://localhost:8080/restaurant/register", restaurant);
    }
  }
  