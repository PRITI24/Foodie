import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-restaurantlogin',
  templateUrl: './restaurantlogin.component.html',
  styleUrls: ['./restaurantlogin.component.css']
})
export class RestaurantloginComponent implements OnInit {

  private router: Router;
  constructor(private routerr: Router) {this.router=routerr; }

  ngOnInit(): void {
  }

  getUserValue(values:any)
  {
    if(values.username=='Priti' && values.pass=='Priti@2000'){
      alert('Successful Login');
      this.router.navigate(['restauranthome']);
      console.warn(values);
    }

    this.router.navigate(['restauranthome']);
  }
}
