import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterrestaurantComponent } from './registerrestaurant/registerrestaurant.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { RestaurantloginComponent } from './restaurantlogin/restaurantlogin.component';
import { RestauranthomeComponent } from './restauranthome/restauranthome.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { RemoveDishComponent } from './remove-dish/remove-dish.component';
import { ViewordersComponent } from './vieworders/vieworders.component';

const routes: Routes = [
  { path:'registerr', component: RegisterrestaurantComponent},
  { path:'restaurantl', component: RestaurantloginComponent},
  { path:'restauranthome', component: RestauranthomeComponent},
  { path:'registeru', component: RegisteruserComponent},
  { path:'addish', component: AddDishComponent},
  { path:'removedish', component: RemoveDishComponent},
  { path:'vieworders', component: ViewordersComponent},
  { path:'', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
